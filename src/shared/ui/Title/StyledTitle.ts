import styled from 'styled-components';

interface StyledTitleProps {
  fontSize?: string
  marginBottom: string
  color?: string
  lineHeight?: string
}

export const StyledTitle = styled.h2<StyledTitleProps>`
  font-size: ${props => (props.fontSize ? props.fontSize : '26px')};
  line-height: ${props => (props.lineHeight ? props.lineHeight : 'normal')};
  color: ${props => (props.color ? props.color : '#282828')};
`