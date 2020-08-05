import React, { TextareaHTMLAttributes } from 'react'

import './styles.css';

type TextareaProps = TextareaHTMLAttributes<HTMLTextAreaElement> & {
    label: string
    name: string
}

const TextArea: React.FC<TextareaProps> = ({ label, name, ...rest }) => {
    return (
        <div className="textarea-block">
            <label htmlFor={name}>{label}</label>
            <textarea name={name} id={name} {...rest} />
        </div>
    );
};

export default TextArea;
