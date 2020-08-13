import React, { InputHTMLAttributes } from 'react'

import './styles.css'

type InputProps = InputHTMLAttributes<HTMLInputElement> & {
    label?: string
    name: string
    stacked?: boolean
}

const Input: React.FC<InputProps> = ({ label, name, stacked, ...rest }) => {
    return (
        <div className={`input-block ${stacked && 'input-stacked'}`}>
            <input name={name} id={name} {...rest} />
            { label && <label htmlFor={name}>{label}</label> }
        </div>
    )
}

export default Input
