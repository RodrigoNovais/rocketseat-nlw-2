import React, { useState } from 'react'
import { View, ScrollView } from 'react-native'

import AsyncStorage from '@react-native-community/async-storage'

import PageHeader from '../../components/PageHeader'
import TeacherItem, { Teacher } from '../../components/TeacherItem'

import styles from './style'
import { useFocusEffect } from '@react-navigation/native'

const Favorites: React.FC = () => {
    const [favorites, setFavorites] = useState<Teacher[]>([])

    const loadFavorites = () => {
        AsyncStorage.getItem('favorites')
            .then(response => {
                if (response) {
                    const favoritedTeachers = JSON.parse(response)

                    setFavorites(favoritedTeachers)
                }
            })
    }

    useFocusEffect(() => loadFavorites())

    return (
        <View style={styles.container}>
            <PageHeader title="Meus proffys favoritos" />

            <ScrollView style={styles.teacherList} contentContainerStyle={{
                paddingHorizontal: 16,
                paddingBottom: 16,
            }}>
                { favorites.map(teacher => (
                    <TeacherItem key={teacher.id} teacher={teacher} favorited />
                )) }
            </ScrollView>
        </View>
    )
}

export default Favorites
