import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'

import PageHeader from '../../components/PageHeader'
import Input from '../../components/Input'
import TextArea from '../../components/TextArea'
import Select from '../../components/Select'

import warningIcon from '../../assets/images/icons/warning.svg'

import api from '../../services/api'

import './styles.css'

export type Schedule = {
    week_day: number
    from: string
    to: string
}

const TeacherForm: React.FC = () => {
    const history = useHistory()

    const [name, setName] = useState<string>('')
    const [avatar, setAvatar] = useState<string>('')
    const [whatsApp, setWhatsApp] = useState<string>('')
    const [bio, setBio] = useState<string>('')

    const [subject, setSubject] = useState<string>('')
    const [cost, setCost] = useState<number>(0)

    const [scheduleItems, setScheduleItems] = useState<Schedule[]>([
        { week_day: 0, from: '', to: '' }
    ])

    const addNewScheduleItem = () => {
        setScheduleItems([
            ...scheduleItems,
            { week_day: 0, from: '', to: '' }
        ])
    }

    const setScheduleItemValue = (position: number, field: string, value: string) => {
        const updatedScheduleItems = scheduleItems.map((scheduleItem, index) => {
            if (index === position)
                return { ...scheduleItem, [field]: value }

            return scheduleItem
        })

        setScheduleItems(updatedScheduleItems)
    }

    const handleCreateClass = (e: React.FormEvent) => {
        e.preventDefault()

        api.post('/classes', { name, avatar, whatsApp, bio, subject, cost, schedule: scheduleItems })
            .then(() => {
                alert('YAY')

                history.push('/')
            })
            .catch(() => alert(';('))
    }

    return (
        <div id="page-teacher-form" className="container">
            <PageHeader
                title="Que incrível que você quer dar aulas."
                description="O primeiro passo é preencher esse formulário de inscrição."/>

            <main>
                <form onSubmit={handleCreateClass}>
                    <fieldset>
                        <legend>Seus dados</legend>

                        <Input name="name" label="Nome Completo" value={name} onChange={e => setName(e.target.value)} />
                        <Input name="avatar" label="Avatar" value={avatar} onChange={e => setAvatar(e.target.value)} />
                        <Input name="whatsApp" label="WhatsApp" value={whatsApp} onChange={e => setWhatsApp(e.target.value)} />

                        <TextArea name="bio" label="Biografia" value={bio} onChange={e => setBio(e.target.value)} />
                    </fieldset>

                    <fieldset>
                        <legend>Sobre a aula</legend>

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

                        <Input name="cost" label="Custo da sua hora por aula" value={cost} onChange={e => setCost(Number(e.target.value))} />
                    </fieldset>

                    <fieldset>
                        <legend>
                            Horários disponíveis
                            <button type="button" onClick={addNewScheduleItem}>+ Novo horário</button>
                        </legend>

                        { scheduleItems.map((scheduleItem, index) => (
                            <div key={index} className="schedule-item">
                                <Select name="week-day" label="Dia da Semana"
                                    value={scheduleItem.week_day}
                                    onChange={e => setScheduleItemValue(index, 'week_day', e.target.value)}
                                    options={[
                                    { value: '0', label: 'Domingo' },
                                    { value: '1', label: 'Segunda-Feira' },
                                    { value: '2', label: 'Terça-Feira' },
                                    { value: '3', label: 'Quarta-Feira' },
                                    { value: '4', label: 'Quinta-Feira' },
                                    { value: '5', label: 'Sexta-Feira' },
                                    { value: '6', label: 'Sábado' },
                                ]} />

                                <Input type="time" name="from" label="Das"
                                    value={scheduleItem.from}
                                    onChange={e => setScheduleItemValue(index, 'from', e.target.value)} />

                                <Input type="time" name="to" label="Até"
                                    value={scheduleItem.to}
                                    onChange={e => setScheduleItemValue(index, 'to', e.target.value)} />
                            </div>
                        )) }
                    </fieldset>

                    <footer>
                        <p>
                            <img src={warningIcon} alt="Aviso Importante"/>
                            Importante! <br />
                            Preencha todos os dados
                        </p>

                        <button type="submit">Salvar cadastro</button>
                    </footer>
                </form>
            </main>
        </div>
    )
}

export default TeacherForm
