import { Resolver } from 'react-hook-form';
import { IFormValues } from './types';

const resolver: Resolver<IFormValues> = async (values) => {
    const errors: Record<string, any> = {};

    // Validate email or phone number
    if (!values.firstName) {
        errors.firstName = {
            type: 'required',
            message: 'First name is required',
        };
    } 
    if(!values.lastName) {
        errors.lastName = {
            type: 'required',
            message: 'Last name is required',
        };
    }
    
    if(!values.address) {
        errors.address = {
            type: 'required',
            message: 'Address is required',
        };
    }
    if(!values.email) {
        errors.email = {
            type: 'required',
            message: 'Email is required',
        }
    } else if (!values.email.includes('@')) {
        errors.email = {
            type: 'validate',
            message: 'Invalid email address',
        };
    }
    
    if (!/^\d{11}$/.test(String(values.telephone))) {
        errors.telephone = {
            type: 'minLength',
            message: 'Invalid phone number'
        }
    }

    // Validate password
    if (!values.password) {
        errors.password = {
            type: 'required',
            message: 'Password is required',
        };
    } else if (values.password.length < 8) {
        errors.password = {
            type: 'minLength',
            message: 'Password must be at least 8 characters',
        };
    } else if (!/[a-z]/.test(values.password) || !/[A-Z]/.test(values.password) || !/[^a-zA-Z0-9]/.test(values.password)) {
        errors.password = {
            type: 'validate',
            message: 'Password must include at least one uppercase letter, one lowercase letter, one number, and one special character',
        };
    }

    return {
        values: values,
        errors: errors,
    };
};

export default resolver;
