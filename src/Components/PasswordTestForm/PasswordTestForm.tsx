import React, {useState} from 'react';
import {FormBox} from '../../shared/ui/FormBox/FormBox';
import {Title} from '../../shared/ui/Title/Title';
import {PasswordStrengthDisplay} from './PasswordStrengthDisplay/PasswordStrengthDisplay';
import {Controller, useForm} from 'react-hook-form';
import {yupResolver} from '@hookform/resolvers/yup/dist/yup';
import * as yup from 'yup';
import {Input} from '../../shared/ui/Input/Input';
import {validate} from '../../shared/utils/validate';

interface FormValues {
  password: string
}

export enum StrengthType {
  Empty = 'Empty',
  Easy = 'Easy',
  Medium = 'Medium',
  Strong = 'Strong',
  Error = 'Error'
}

const ValidationSchema = yup.object({
  password: yup.string().required().min(8).max(50)
})

export const PasswordTestForm = () => {


  const [passwordStrength, setPasswordStrength] = useState<StrengthType>(StrengthType.Empty)

  const {control, formState: {errors}} = useForm<FormValues>({
    defaultValues: {
      password: ''
    },
    mode: 'all',
    resolver: yupResolver(ValidationSchema)
  })
  const onChangePasswordHandler = (newPass: string) => {
    const newPassStrength = validate(newPass)
    setPasswordStrength(newPassStrength)
  }

  return (
    <form>
      <FormBox>
        <Title marginBottom="10px">Enter Your Password</Title>
        <Controller control={control} name={'password'}
                    render={({field}) => (
                      <Input onChangePassword={onChangePasswordHandler}
                             title={'Your password'} hidePassword
                             error={errors.password?.message} {...field}
                      />)}
        />
        <PasswordStrengthDisplay passwordStrength={passwordStrength}></PasswordStrengthDisplay>
      </FormBox>
    </form>
  );
};

