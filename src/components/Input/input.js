import PropTypes from 'prop-types';
import React from 'react';
import { useUID } from 'react-uid';

import styles from './input.module.scss';

const Input = ({
    placeholder,
    label,
    name,
    register,
    autoComplete = 'off',
    type = 'text'
}) => {
    const uid = useUID();

    return (
        <div className={styles.root}>
            {label &&
                <label htmlFor={uid}>{label}</label>
            }
            <input
                name={uid}
                className={styles.input}
                placeholder={placeholder ? placeholder : ''}
                {...register(name)}
                autoComplete={autoComplete}
                type={type}
            />
        </div>
    )
}

Input.propTypes = {
    autoComplete: PropTypes.oneOf([
        'off',
        'on'
    ]),
    type: PropTypes.oneOf([
        'text',
        'password'
    ]),
    placeholder: PropTypes.string,
    label: PropTypes.string,
    name: PropTypes.string,
    register: PropTypes.func
}

export default Input;