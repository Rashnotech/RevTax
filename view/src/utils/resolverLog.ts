import { Resolver } from 'react-hook-form';
import { IFormInput } from './types';

const resolver: Resolver<IFormInput> = async (values) => {
    const errors: Record<string, any> = {};

    // Validate email or phone number
    if (!values.record) {
        errors.record = {
            type: 'required',
            message: 'Please enter a valid email or phone number',
        };
    } else if (!/^(?:(?:\+?\d{1,3}[\s-]?)?(?:\(\d{1,3}\)|\d{1,3})[\s-]?\d{1,4}[\s-]?\d{1,4}(?:[\s-]?\d{1,9})?|[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/.test(values.record)) {
        errors.record = {
            type: 'validate',
            message: 'Invalid email or phone number format',
        };
    }

    // Validate password
    if (!values.password) {
        errors.password = {
            type: 'required',
            message: 'Password is required',
        };
    }
    return {
        values: values,
        errors: errors,
    };
};

export default resolver;
