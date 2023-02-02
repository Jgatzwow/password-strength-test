import {
  ChangeEvent,
  ClipboardEvent,
  forwardRef,
  InputHTMLAttributes,
  KeyboardEvent,
  memo,
  useState
} from 'react'

import {
  StyledInput,
  StyledShowPasswordIcon,
  StyledShowPasswordSlashIcon,
  StyledShowPasswordWrapper
} from './StyledInput'
import styles from './Input.module.css'
import { Span } from '../Span/Span'
import classNames from 'classnames'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  title: string
  hidePassword?: boolean
  withSaveButton?: boolean
  error?: string
  onEnter?: () => void
  onChangePassword?: (newPass: string) => void
  margin?: string
}

type TypeInput = 'text' | 'password'

export const Input = memo(
  forwardRef<HTMLInputElement, InputProps>((props, ref) => {
    const {
      error,
      onEnter,
      withSaveButton,
      hidePassword,
      title,
      onChange,
      onChangePassword,
      value,
      ...restProps
    } = props

    const [typeInput, setTypeInput] = useState<TypeInput>(
      hidePassword ? 'password' : 'text'
    )

    const inputValueHandler = (e: ChangeEvent<HTMLInputElement>) => {
      onChange?.(e)
      onChangePassword?.(e.currentTarget.value.trim())
    }

    const onKeyDownHandler = (e: KeyboardEvent<HTMLInputElement>) => {
      if (e.code === 'Space') e.preventDefault()
    }
    const onClipBoardActionHandler = (e: ClipboardEvent) => {
      e.preventDefault()
    }
    const toggleTypeHandler = () => {
      setTypeInput(prev => (prev === 'text' ? 'password' : 'text'))
    }

    return (
      <div className={styles.wrapperWrapper}>
        <div className={styles.wrapper}>
          <Span
            className={classNames(styles.span, {
              [styles.show]: value as string
            })}
            nonSelect
            light
          >
            {title}
          </Span>
          {hidePassword ? (
            <StyledShowPasswordWrapper onClick={toggleTypeHandler} tabIndex={1}>
              {typeInput === 'password' ? (
                <StyledShowPasswordIcon />
              ) : (
                <StyledShowPasswordSlashIcon />
              )}
            </StyledShowPasswordWrapper>
          ) : null}
          <label className={styles.label}>
            <StyledInput
              value={value}
              ref={ref}
              error={!!error}
              onCopy={onClipBoardActionHandler}
              onCut={onClipBoardActionHandler}
              onPaste={onClipBoardActionHandler}
              withSaveButton={!!withSaveButton}
              type={typeInput}
              onKeyDown={onKeyDownHandler}
              hidePassword={!!hidePassword}
              onChange={inputValueHandler}
              placeholder={title}
              {...restProps}
            />
            <Span error className={styles.error}>
              {error}
            </Span>
          </label>
        </div>
      </div>
    )
  })
)
