import React, { useState } from 'react'
import { Link } from 'react-router-dom'

import Input from '../../components/Input'

import backIcon from '../../assets/images/icons/back.svg'
import logoImage from '../../assets/images/logo.svg'

import './styles.css'

const Register: React.FC = () => {
    const [name, setName] = useState<string>('')
    const [surname, setSurname] = useState<string>('')
    const [email, setEmail] = useState<string>('')
    const [password, setPassword] = useState<string>('')

    return (
        <div id="page-register">
            <main>
                <Link to="/login">
                    <img src={backIcon} alt="Voltar"/>
                </Link>

                <form>
                    <h1>Cadastro</h1>

                    <p>Preencha os dados abaixo para começar.</p>

                    <div>
                        <Input type="text" name="name" label="Nome" placeholder="Nome" stacked autoComplete="name" value={name} onChange={e => setName(e.target.value)} />
                        <Input type="text" name="surname" label="Sobrenome" placeholder="Sobrenome" stacked autoComplete="family-name" value={surname} onChange={e => setSurname(e.target.value)} />
                        <Input type="email" name="email" label="E-mail" placeholder="E-mail" stacked autoComplete="email" value={email} onChange={e => setEmail(e.target.value)} />
                        <Input type="password" name="password" label="Senha" placeholder="Senha" stacked autoComplete="new-password" value={password} onChange={e => setPassword(e.target.value)} />
                    </div>

                    <button type="submit">Concluir Cadastro</button>
                </form>
            </main>

            <div className="logo">
                <div className="logo-container">
                    <img src={logoImage} alt="Proffy"/>
                    <h2>
                        Sua plataforma de <br />
                        estudos online.
                    </h2>
                </div>
            </div>
        </div>
    )
}

export default Register
