import styled from 'styled-components';

interface StyledTextProps {
  fontSize?: string
  marginBottom?: string
  color?: string
  lineHeight?: string
}

export const StyledText = styled.p<StyledTextProps>`
  font-size: ${props => (props.fontSize ? props.fontSize : '20px')};
  line-height: ${props => (props.lineHeight ? props.lineHeight : 'normal')};
  color: ${props => (props.color ? props.color : '#282828')};
  margin-bottom: ${props => (props.marginBottom ? props.marginBottom : '10px')};
`