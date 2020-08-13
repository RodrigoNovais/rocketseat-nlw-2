import React, { useState } from 'react'
import { Link } from 'react-router-dom'

import Input from '../../components/Input'
import Checkbox from '../../components/Checkbox'

import logoImage from '../../assets/images/logo.svg'
import purpleHeartIcon from '../../assets/images/icons/purple-heart.svg'

import './styles.css'

const Login: React.FC = () => {
    const [email, setEmail] = useState<string>('')
    const [password, setPassword] = useState<string>('')
    const [remember, setRemember] = useState<boolean>(false)

    return (
        <div id="page-login">
            <div className="logo">
                <div className="logo-container">
                    <img src={logoImage} alt="Proffy"/>
                    <h2>
                        Sua plataforma de <br />
                        estudos online.
                    </h2>
                </div>
            </div>

            <main>
                <form>
                    <h1>Fazer login</h1>

                    <div>
                        <Input type="email" name="email" label="email" placeholder="E-mail" stacked autoComplete="email" value={email} onChange={e => setEmail(e.target.value)} />
                        <Input type="password" name="password" label="password" placeholder="Senha" stacked autoComplete="current-password" value={password} onChange={e => setPassword(e.target.value)} />
                    </div>

                    <div className="input-group">
                        <Checkbox name="remember" label="Lembrar-me" checked={remember} onChange={e => setRemember(e.target.checked)} />

                        <Link to="/forgot-password">
                            Esqueci minha senha
                        </Link>
                    </div>

                    <button type="submit">Entrar</button>

                    <footer>
                        <span className="register">
                            Não tem conta?
                            <Link to="/register">
                                Cadastre-se
                            </Link>
                        </span>

                        <span className="forFree">
                            É de graça
                            <img src={purpleHeartIcon} alt="Coração"/>
                        </span>
                    </footer>
                </form>
            </main>
        </div>
    )
}

export default Login
