import React, { InputHTMLAttributes } from 'react'

import './styles.css'

type CheckProps = InputHTMLAttributes<HTMLInputElement> & {
    label?: string
    name: string
}

const Input: React.FC<CheckProps> = ({ label, name, ...rest }) => {
    return (
        <div className="check-block">
            <input type="checkbox" name={name} id={name} {...rest} />
            { label && <label htmlFor={name}>{label}</label> }
        </div>
    )
}

export default Input
