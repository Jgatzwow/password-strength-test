import styled, { css } from 'styled-components'
import { ReactComponent as EyeIcon } from '../../assets/icons/Eye.svg'
import { ReactComponent as EyeSlashIcon } from '../../assets/icons/Eye-slash.svg'

interface StyledInputProps {
  hidePassword?: boolean
  error?: boolean
  withSaveButton?: boolean
  margin?: string
}

export const StyledInput = styled.input<StyledInputProps>`
  width: 100%;
  font-size: 16px;
  line-height: 24px;
  font-weight: 500;
  height: 28px;
  font-family: inherit;
  transition: 0.2s ease-in;
  border: none;
  border-bottom: 2px solid rgba(0, 0, 0, 0.2);
  border-radius: 2px;
  padding: 0;
  margin: ${props => (props.margin ? props.margin : '0')};

  &:focus {
    outline: none;
    border-bottom: 2px solid rgb(54, 110, 255);
  }

  &::placeholder {
    font-weight: 400;
    user-select: none;
  }

  ${props =>
    props.hidePassword &&
    css`
      padding-right: 48px;
    `}
  ${props =>
    props.withSaveButton &&
    css`
      padding-right: 80px;
    `}
  ${props =>
    props.error &&
    css`
      border: none;
      border-bottom: 2px solid #ff3636;

      &:focus {
        border-bottom: 2px solid #ff3636;
      }
    `}
`
export const StyledShowPasswordIcon = styled(EyeIcon)`
  width: 24px;
  height: 24px;
`
export const StyledShowPasswordSlashIcon = styled(EyeSlashIcon)`
  width: 24px;
  height: 24px;
`

export const StyledShowPasswordWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  cursor: pointer;
  width: 39px;
  height: 36px;
  transition: 0.3s;
  top: 13px;
  right: 0;

  &:hover {
    opacity: 0.7;
  }
`
