import React from 'react'

import whatsAppIcon from '../../assets/images/icons/whatsapp.svg'

import './styles.css'
import api from '../../services/api'

export type Teacher = {
    id: number
    subject: string
    cost: number
    name: string
    avatar: string
    whatsApp: string
    bio: string
}

type TeacherItemProps = {
    teacher: Teacher
}

const TeacherItem: React.FC<TeacherItemProps> = ({ teacher }) => {
    const createNewConnection = () => {
        api.post('/connections', { user_id: teacher.id })
    }

    return (
        <article className="teacher-item">
            <header>
                <img src={teacher.avatar} alt={teacher.name} />
                <div>
                    <strong>{teacher.name}</strong>
                    <span>{teacher.subject}</span>
                </div>
            </header>

            <p>{teacher.bio}</p>

            <footer>
                <p>
                    Preço/hora
                    <strong>R$ {teacher.cost}</strong>
                </p>
                <a target="_blank" rel="noopener noreferrer" href={`https://wa.me/${teacher.whatsApp}`} onClick={createNewConnection}>
                    <img src={whatsAppIcon} alt="WhatsApp"/>
                    Entrar em Contato
                </a>
            </footer>
        </article>
    )
}

export default TeacherItem
