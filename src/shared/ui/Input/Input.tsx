import React, {ChangeEvent, forwardRef, InputHTMLAttributes, KeyboardEvent, memo, useState} from 'react';
import {StyledInput} from './StyledInput';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  placeHolderVal: string
  showPassword?: boolean
  error?: boolean
  margin?: string
  onEnter?: () => void
}

type InputType = 'text' | 'password'

export const Input = memo(forwardRef<HTMLInputElement, InputProps>((props, ref) => {
  const {placeHolderVal, showPassword, onEnter, onChange, ...restProps} = props

  const [inputType, setInputType] = useState<InputType>(showPassword ? 'password' : 'text')

  const onInputValueChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    onChange?.(e)
  }

  const toggleTypeHandler = () => {
    setInputType((prev) => (prev === 'text' ? 'password' : 'text'))
  }

  const onEnterPressHandler = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      onEnter && onEnter()
    }
  }
  return <StyledInput {...restProps}></StyledInput>
}));

