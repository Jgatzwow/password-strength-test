import styled from 'styled-components';

interface StyledFlexBoxProps {
  width?: string
  gap?: string
}

export const StyledFormBox = styled.div<StyledFlexBoxProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  row-gap: ${props => (props.gap ? props.gap : '5px')};
  width: ${props => (props.width ? props.width : '500px')};
  background: #fff;
  border-radius: 4px;
  box-shadow: 2px 1px 8px 0 rgba(34, 60, 80, 0.2);
  padding: 35px 33px 42px 33px;
`