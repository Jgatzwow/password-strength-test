import styled, {css} from 'styled-components';
import {StrengthType} from '../../PasswordTestForm';


interface StyledPasswordStrengthDisplayItemProps {
  passwordStr: StrengthType
}

export const StyledPasswordStrengthDisplayItem = styled.div<StyledPasswordStrengthDisplayItemProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 150px;
  height: 30px;
  border-radius: 5px;
  opacity: 0.5;
  background: #bdbdbd;

  ${props =>
          props.passwordStr === 'easy' &&
          css`
            &:first-child {
              opacity: 1;
              color: aliceblue;
              background: #c90505;
            }
          `
  }
  ${props =>
          props.passwordStr === 'error' &&
          css`
              opacity: 1;
              color: aliceblue;
              background: #c90505;
          `
  }
  ${props =>
          props.passwordStr === 'medium' &&
          css`
            &:not(&:last-child) {
              opacity: 1;
              background: #cece04;
            }
          `
  }
  ${props =>
          props.passwordStr === 'strong' &&
          css`
            opacity: 1;
            background: #05be08;
          `
  }

`