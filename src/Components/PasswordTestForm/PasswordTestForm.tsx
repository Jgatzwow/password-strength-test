import React, {useState} from 'react';
import {FormBox} from '../../shared/ui/FormBox/FormBox';
import {Title} from '../../shared/ui/Title/Title';
import {PasswordStrengthDisplay} from './PasswordStrengthDisplay/PasswordStrengthDisplay';
import {Controller, useForm} from 'react-hook-form';
import {yupResolver} from '@hookform/resolvers/yup/dist/yup';
import * as yup from 'yup';
import {Input} from '../../shared/ui/Input/Input';

interface FormValues {
  password: string
}

export type StrengthType = 'empty' | 'easy' | 'medium' | 'strong' | 'error'

const Schema = yup.object({
  password: yup.string().required()
})

export const PasswordTestForm = () => {

  const [passwordStrength, setPasswordStrength] = useState<StrengthType>('strong')

  const {control, formState: {errors}} = useForm<FormValues>({
    defaultValues: {
      password: ''
    },
    mode: 'all',
    resolver: yupResolver(Schema)
  })


  return (
    <form>
      <FormBox>
        <Title marginBottom="10px">Enter Your Password</Title>
        <Controller control={control} name={'password'}
                    render={({field}) => (
                      <Input title={'Enter your password'} hidePassword
                             error={errors.password?.message} {...field}/>)}/>
        <PasswordStrengthDisplay passwordStrength={passwordStrength}/>
      </FormBox>
    </form>
  );
};

