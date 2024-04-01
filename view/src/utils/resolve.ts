import { Resolver } from 'react-hook-form';

export interface IFormInput {
    userId: string;
    business: string;
    name: string;
    isRegistered: Boolean;
    cac: string;
    tin: string;
    type: string;
    state: string;
    LGA: string;
    method: string;
    amount: number;
}



const resolver: Resolver<IFormInput> = async (values) => {
    const errors: Record<string, any> = {};

    if (!values.business) {
        errors.business = {
            type: 'required',
            message: 'Option is required',
        };
    }

    if (!values.name) {
        errors.name = {
            type: 'required',
            message: 'Business name is required',
        };
    } 
    if(!values.isRegistered) {
        errors.isRegistered = {
            type: 'required',
            message: 'Registration is required',
        };
    }
    
    if(!values.type) {
        errors.type = {
            type: 'required',
            message: 'Type is required',
        };
    }
    if(!values.state) {
        errors.state = {
            type: 'required',
            message: 'State is required',
        }
    }
    if(!values.LGA) {
        errors.LGA = {
            type: 'required',
            message: 'Local Government Area is required',
        }
    }
    return {
        values: values,
        errors: errors,
    };
};

export default resolver;
