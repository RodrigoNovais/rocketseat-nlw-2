import React from 'react'

import whatsAppIcon from '../../assets/images/icons/whatsapp.svg'

import './styles.css';

const TeacherItem: React.FC = () => {
    return (
        <article className="teacher-item">
            <header>
                <img src="https://avatars2.githubusercontent.com/u/11841314?s=460" alt="Rodrigo Novais"/>
                <div>
                    <strong>Rodrigo Novais</strong>
                    <span>Culinária</span>
                </div>
            </header>

            <p>
                Aquele famoso texto aleatório para teste de layout.<br /><br />
                Qualquer informação recebida por este meio não é real, todo o conteúdo é inventado apenas para preencher o espaço vago e criar uma sensação de conteúdo integro para o teste a interface.
            </p>

            <footer>
                <p>
                    Preço/hora
                    <strong>R$ 20,00</strong>
                </p>
                <button type="button">
                    <img src={whatsAppIcon} alt="WhatsApp"/>
                    Entrar em Contato
                </button>
            </footer>
        </article>
    );
};

export default TeacherItem;
