import styled from 'styled-components';


interface StyledPasswordStrengthDisplayItemProps {
  background?: string
}

export const StyledPasswordStrengthDisplayItem = styled.div<StyledPasswordStrengthDisplayItemProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 150px;
  height: 30px;
  border-radius: 5px;
  opacity: 0.7;
  background: ${props => (props.background ? props.background : '#bdbdbd')};


`