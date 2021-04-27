import PropTypes from 'prop-types';
import React, { Children, cloneElement } from 'react';
import { useForm } from 'react-hook-form';

const Form = ({
    classes,
    children,
    onSubmit,
    submitBtnText,
}) => {
    const { register, handleSubmit } = useForm();
    const createInput = (child) => {
        return cloneElement(child, {
            register: register
        });
    }

    return (
        <form
            onSubmit={handleSubmit((data) => onSubmit(data))}
            className={classes}
        >
            <fieldset>
                {Children.map(children, (child) => (
                    createInput(child)
                ))}
            </fieldset>
            <button type='submit'>
                {submitBtnText}
            </button>
        </form>
    )
}

Form.propTypes = {
    classes: PropTypes.any,
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node
    ]).isRequired,
    onSubmit: PropTypes.func,
    submitBtnText: PropTypes.string,
};

export default Form;