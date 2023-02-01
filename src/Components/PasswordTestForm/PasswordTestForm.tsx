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
  password: yup.string().required().min(8).max(50)
})

export const PasswordTestForm = () => {

  const ONLY_LETTERS = /[a-z]/gi
  const ONLY_DIGITS = /[0-9]/
  const ONLY_SYMBOLS = /[!@#$%^&*)(+=.<>{}[\]:;'"|~`_-]/g
  const LETTERS_AND_DIGITS = /^(?=.*?\d)(?=.*?[a-zA-Z])[a-zA-Z\d]+$/
  /*const LETTERS_AND_SYMBOLS = /^(?=.*?\d)(?=.*?[a-zA-Z])[a-zA-Z\d]+$/
  const DIGITS_AND_SYMBOLS = /^[0-9\x2D\x2B\x23]+$/
  const LETTERS_DIGITS_SYMBOLS = /^(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z])$/*/

  const [passwordStrength, setPasswordStrength] = useState<StrengthType>('empty')

  const {control, formState: {errors}} = useForm<FormValues>({
    defaultValues: {
      password: ''
    },
    mode: 'all',
    resolver: yupResolver(Schema)
  })
  const onChangePasswordHandler = (newPass: string) => {
    if (newPass.trim().length < 8) {
      setPasswordStrength('error')
    }
    if (newPass.length >= 8) {
      if (newPass.match(ONLY_DIGITS)) {
        setPasswordStrength('easy')
      }
      if (newPass.match(ONLY_LETTERS)) {
        setPasswordStrength('easy')
      }
      if (newPass.match(ONLY_SYMBOLS)) {
        setPasswordStrength('easy')
      }
      if (newPass.match(LETTERS_AND_DIGITS)) {
        setPasswordStrength('medium')
      }
      /*if (newPass.match(LETTERS_DIGITS_SYMBOLS)) {
        if (newPass.includes(''))
        setPasswordStrength('strong')
      }*/
    }
  }

  return (
    <form>
      <FormBox>
        <Title marginBottom="10px">Enter Your Password</Title>
        <Controller control={control} name={'password'}
                    render={({field}) => (
                      <Input onChangePassword={onChangePasswordHandler}
                             title={'Enter your password'} hidePassword
                             error={errors.password?.message} {...field}
                      />)}
        />
        <PasswordStrengthDisplay passwordStrength={passwordStrength}/>
      </FormBox>
    </form>
  );
};

