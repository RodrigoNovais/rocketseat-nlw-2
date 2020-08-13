import React, { useState } from 'react'
import { Link } from 'react-router-dom'

import Input from '../../components/Input'

import backIcon from '../../assets/images/icons/back.svg'
import logoImage from '../../assets/images/logo.svg'

import './styles.css'

const Register: React.FC = () => {
    const [email, setEmail] = useState<string>('')

    return (
        <div id="page-forgot-password">
            <main>
                <Link to="/login">
                    <img src={backIcon} alt="Voltar"/>
                </Link>

                <form>
                    <h1>Eita, esqueceu sua senha?</h1>

                    <p>Não esquenta, vamos dar um jeito nisso.</p>

                    <div>
                        <Input type="email" name="email" label="E-mail" placeholder="E-mail" stacked autoComplete="email" value={email} onChange={e => setEmail(e.target.value)} />
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
