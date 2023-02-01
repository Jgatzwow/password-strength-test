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

  const ONLY_LETTERS = /^(?=.*[a-zA-Z])/
  const ONLY_DIGITS = /(?=.*[0-9])/
  const ONLY_SYMBOLS = /(?=.*[!@#\$%\^&\*\_])/

  const LETTERS_AND_DIGITS = /^(?=.*[a-zA-Z])(?=.*[0-9])/
  const LETTERS_AND_SYMBOLS = /^(?=.*[a-zA-Z])(?=.*[!@#\$%\^&\*\_])/
  const DIGITS_SYMBOLS = /(?=.*[0-9])(?=.*[!@#\$%\^&\*\_])/

  const DIGITS_LETTERS_SYMBOLS = /^(?=.*[a-zA-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*\_])/

  const [passwordStrength, setPasswordStrength] = useState<StrengthType>(StrengthType.Empty)

  const {control, formState: {errors}} = useForm<FormValues>({
    defaultValues: {
      password: ''
    },
    mode: 'all',
    resolver: yupResolver(ValidationSchema)
  })
  const onChangePasswordHandler = (newPass: string) => {
    if (newPass.trim().length >= 8) {
      if (
        newPass.match(ONLY_LETTERS)
        || newPass.match(ONLY_DIGITS)
        || newPass.match(ONLY_SYMBOLS)
      ) {
        setPasswordStrength(StrengthType.Easy)
      }
      if (
        newPass.match(LETTERS_AND_DIGITS)
        || newPass.match(LETTERS_AND_SYMBOLS)
        || newPass.match(DIGITS_SYMBOLS)
      ) {
        setPasswordStrength(StrengthType.Medium)
      }
      if (newPass.match(DIGITS_LETTERS_SYMBOLS)) {
        setPasswordStrength(StrengthType.Strong)
      }
    } else setPasswordStrength(StrengthType.Error)
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
        <PasswordStrengthDisplay passwordStrength={passwordStrength}/>
      </FormBox>
    </form>
  );
};

