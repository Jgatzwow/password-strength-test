import styled from 'styled-components';

interface StyledInputProps {
  changeInputsView?: boolean
  showPassword?: boolean
  error?: boolean
  margin?: string
}

export const StyledInput = styled.input<StyledInputProps>`
  width: 100%;
  font-size: 16px;
  line-height: 24px;
  font-weight: 500;
  height: 36px;
  font-family: inherit;
  border: 1px solid #d9d9d9;
  border-radius: 2px;
  padding: 6px 6px 6px 40px;
  margin: ${props => (props.margin ? props.margin : '5px')};

  &:focus {
    outline: none;
    border: 1px solid rgba(54, 110, 255, 1);
  }
  &::placeholder {
    font-weight: 400;
    user-select: none;
  }
`