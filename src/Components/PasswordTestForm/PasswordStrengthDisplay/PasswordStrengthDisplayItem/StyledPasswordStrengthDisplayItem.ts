import styled, { css } from 'styled-components'
import { StrengthType } from '../../PasswordTestForm'

interface StyledPasswordStrengthDisplayItemProps {
  passwordStr: StrengthType
}

export const StyledPasswordStrengthDisplayItem = styled.div<StyledPasswordStrengthDisplayItemProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 150px;
  height: 30px;
  border-radius: 5px;
  opacity: 0.5;
  background: #bdbdbd;
  transition: 0.5s;

  ${props =>
    props.passwordStr === 'Easy' &&
    css`
      &:first-child {
        opacity: 1;
        color: aliceblue;
        background: #c90505;
      }
    `}
  ${props =>
    props.passwordStr === 'Error' &&
    css`
      opacity: 1;
      color: aliceblue;
      background: #c90505;
    `}
  ${props =>
    props.passwordStr === 'Medium' &&
    css`
      &:nth-child(1),
      &:nth-child(2) {
        opacity: 1;
        background: #cece04;
      }
    `}
  ${props =>
    props.passwordStr === 'Strong' &&
    css`
      opacity: 1;
      background: #05be08;
    `}
`
