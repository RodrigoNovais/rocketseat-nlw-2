import React, { useState } from 'react'
import { View, ScrollView, Text, TextInput } from 'react-native'
import { BorderlessButton, RectButton } from 'react-native-gesture-handler'
import { Feather } from '@expo/vector-icons'

import PageHeader from '../../components/PageHeader'
import TeacherItem, { Teacher } from '../../components/TeacherItem'

import api from '../../services/api'

import styles from './style'

const TeacherList: React.FC = () => {
    const [isFiltersVisible, setIsFiltersVisible] = useState<boolean>(false)

    const [teachers, setTeachers] = useState<Teacher[]>([])

    const [subject, setSubject] = useState<string>('')
    const [weekDay, setWeekDay] = useState<number>(0)
    const [time, setTime] = useState<string>('')

    const handleToggleFiltersVisible = () => setIsFiltersVisible(!isFiltersVisible)

    const handleFiltersSubmit = async () => {
        const response = await api.get('/classes', { params: {
            subject,
            week_day: weekDay,
            time
        }})

        setIsFiltersVisible(false)
        setTeachers(response.data)
    }

    return (
        <View style={styles.container}>
            <PageHeader title="Proffys disponíveis" headerRight={(
                <BorderlessButton onPress={handleToggleFiltersVisible}>
                    <Feather name="filter" size={20} color="#fff" />
                </BorderlessButton>
            )}>
                { isFiltersVisible && (
                    <View style={styles.searchForm}>
                        <Text style={styles.label}>Matéria</Text>
                        <TextInput style={styles.input} placeholder="Qual a matéria?" placeholderTextColor="#c1bccc"
                            value={subject} onChangeText={text => setSubject(text)} />

                        <View style={styles.inputGroup}>
                            <View style={styles.inputBlock}>
                                <Text style={styles.label}>Dia da semana</Text>
                                <TextInput style={styles.input} placeholder="Qual o dia?" placeholderTextColor="#c1bccc"
                                    value={weekDay.toString()} onChangeText={text => setWeekDay(Number(text))} />
                            </View>

                            <View style={styles.inputBlock}>
                                <Text style={styles.label}>Horário</Text>
                                <TextInput style={styles.input} placeholder="Qual horário?" placeholderTextColor="#c1bccc"
                                    value={time} onChangeText={text => setTime(text)} />
                            </View>
                        </View>

                        <RectButton onPress={handleFiltersSubmit} style={styles.submitButton}>
                            <Text style={styles.submitButtonText}>Filtrar</Text>
                        </RectButton>
                    </View>
                ) }
            </PageHeader>

            <ScrollView style={styles.teacherList} contentContainerStyle={{
                paddingHorizontal: 16,
                paddingBottom: 16,
            }}>
                { teachers.map(teacher => (
                    <TeacherItem key={teacher.id} teacher={teacher} />
                ))}
            </ScrollView>
        </View>
    )
}

export default TeacherList
