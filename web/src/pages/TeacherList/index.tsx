import React, { useState } from 'react'

import PageHeader from '../../components/PageHeader'
import TeacherItem, { Teacher } from '../../components/TeacherItem'
import Input from '../../components/Input'
import Select from '../../components/Select'

import api from '../../services/api'

import './styles.css'

const TeacherList: React.FC = () => {
    const [teachers, setTeachers] = useState<Teacher[]>([])

    const [subject, setSubject] = useState<string>('')
    const [weekDay, setWeekDay] = useState<number>(0)
    const [time, setTime] = useState<string>('')

    const searchTeachers = async (e: React.FormEvent) => {
        e.preventDefault()

        const response = await api.get('/classes', { params: {
            subject,
            week_day: weekDay,
            time
        }})

        setTeachers(response.data)
    }

    return (
        <div id="page-teacher-list" className="container">
            <PageHeader title="Estes são os proffys disponíveis.">
                <form id="search-teachers" onSubmit={searchTeachers}>
                    <Select name="subject" label="Matéria"
                        value={subject} onChange={e => setSubject(e.target.value)}
                        options={[
                        { value: 'Artes', label: 'Artes' },
                        { value: 'Biologia', label: 'Biologia' },
                        { value: 'Ciências', label: 'Ciências' },
                        { value: 'Educação Física', label: 'Educação Física' },
                        { value: 'Geografia', label: 'Geografia' },
                        { value: 'Historia', label: 'Historia' },
                        { value: 'Matemática', label: 'Matemática' },
                        { value: 'Português', label: 'Português' },
                        { value: 'Química', label: 'Química' },
                    ]} />

                    <Select name="week-day" label="Dia da Semana"
                        value={weekDay} onChange={e => setWeekDay(Number(e.target.value))}
                        options={[
                        { value: '0', label: 'Domingo' },
                        { value: '1', label: 'Segunda-Feira' },
                        { value: '2', label: 'Terça-Feira' },
                        { value: '3', label: 'Quarta-Feira' },
                        { value: '4', label: 'Quinta-Feira' },
                        { value: '5', label: 'Sexta-Feira' },
                        { value: '6', label: 'Sábado' },
                    ]} />

                    <Input type="time" name="time" label="Hora"
                        value={time}
                        onChange={e => setTime(e.target.value)} />

                    <button type="submit">
                        Buscar
                    </button>
                </form>
            </PageHeader>

            <main>
                { teachers.map(teacher => (
                    <TeacherItem key={teacher.id} teacher={teacher} />
                ))}
            </main>
        </div>
    )
}

export default TeacherList
