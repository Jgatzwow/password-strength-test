import { ButtonHTMLAttributes, forwardRef } from 'react'

import { StyledButton } from './StyledButton'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  primary?: boolean
  secondary?: boolean
  danger?: boolean
  width?: string
  logout?: boolean
  nonRounded?: boolean
  margin?: string
  disabled?: boolean
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (props, ref) => {
    const { disabled, logout, children, ...restProps } = props

    return (
      <StyledButton ref={ref} disabled={!!disabled} {...restProps}>
        {children}
      </StyledButton>
    )
  }
)