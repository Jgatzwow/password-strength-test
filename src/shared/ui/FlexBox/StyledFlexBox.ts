import styled from 'styled-components'

interface StyledFlexBoxProps {
  flexDirection?: string
  alignItems?: string
  justifyContent?: string
  gap?: string
  margin?: string
  padding?: string
  width?: string
  height?: string
}

export const StyledFlexBox = styled.div<StyledFlexBoxProps>`
  display: flex;
  width: ${props => (props.width ? props.width : '100%')};
  height: ${props => (props.height ? props.height : 'auto')};
  flex-direction: ${props =>
    props.flexDirection ? props.flexDirection : 'row'};
  justify-content: ${props =>
    props.justifyContent ? props.justifyContent : 'flex-start'};
  gap: ${props => (props.gap ? props.gap : '0')};
  align-items: ${props => (props.alignItems ? props.alignItems : 'flex-start')};
  margin: ${props => (props.margin ? props.margin : '0')};
  padding: ${props => (props.padding ? props.padding : '0')};
`
