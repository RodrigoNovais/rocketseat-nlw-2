import React from 'react'
import { View, ScrollView } from 'react-native'

import PageHeader from '../../components/PageHeader'
import TeacherItem from '../../components/TeacherItem'

import styles from './style'

const TeacherList: React.FC = () => {
    return (
        <View style={styles.container}>
            <PageHeader title="Proffys disponíveis" />

            <ScrollView style={styles.teacherList} contentContainerStyle={{
                paddingHorizontal: 16,
                paddingBottom: 16,
            }}>
                <TeacherItem />
            </ScrollView>
        </View>
    )
}

export default TeacherList
