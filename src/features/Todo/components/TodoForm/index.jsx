import React from 'react';
import PropTypes from 'prop-types';
import InputField from '../../../../components/FormControl/InputField';
import { useForm } from 'react-hook-form';

TodoForm.propTypes = {
    onSubmit: PropTypes.func
};

function TodoForm(props) {
    const form = useForm({
        defaultValues:{
            title:'',

        }
    })
    const handleSubmit = (values) =>{
        console.log("Todo submit",values);
    }
    return (
        <form onSubmit={form.handleSubmit(handleSubmit)}>
         
            <InputField name="title" label="Todo" form={form}/>
        </form>
    );
}

export default TodoForm;