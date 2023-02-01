import React from 'react';
import {FormBox} from '../../shared/ui/FormBox/FormBox';
import {Title} from '../../shared/ui/Title/Title';
import {PasswordStrengthDisplay} from './PasswordStrengthDisplay/PasswordStrengthDisplay';
import {Controller, SubmitHandler, useForm} from 'react-hook-form';
import {yupResolver} from '@hookform/resolvers/yup/dist/yup';
import * as yup from 'yup';
import {Input} from '../../shared/ui/Input/Input';

interface FormValues {
  password: string
}



const Schema = yup.object({
  password: yup.string().required()
})


export const PasswordTestForm = () => {


  const {handleSubmit, control, formState: {errors}} = useForm<FormValues>({
    defaultValues: {
      password: ''
    },
    mode: 'all',
    resolver: yupResolver(Schema)
  })

  const onSubmit: SubmitHandler<FormValues> = (data: FormValues) => {
    alert(data)
  }


  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <FormBox>
        <Title marginBottom="10px">Enter Your Password</Title>
        <Controller control={control} name={'password'}
                    render={({field}) => (<input  {...field}/>)}/>
        <PasswordStrengthDisplay/>
      </FormBox>
    </form>
  );
};

