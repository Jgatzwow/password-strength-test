import styled from 'styled-components';

interface StyledTextProps {
  fontSize?: string
  margin?: string
  color?: string
  lineHeight?: string
}

export const StyledText = styled.p<StyledTextProps>`
  font-size: ${props => (props.fontSize ? props.fontSize : '20px')};
  line-height: ${props => (props.lineHeight ? props.lineHeight : 'normal')};
  color: ${props => (props.color ? props.color : '#282828')};
  margin: ${props => (props.margin ? props.margin : '20px 0 10px 0')};
`