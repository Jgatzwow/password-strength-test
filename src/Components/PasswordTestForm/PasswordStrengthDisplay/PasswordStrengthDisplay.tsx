import React, { FC, memo } from 'react'
import { PasswordStrengthDisplayItem } from './PasswordStrengthDisplayItem/PasswordStrengthDisplayItem'
import { Text } from '../../../shared/ui/Text/Text'
import { FlexBox } from '../../../shared/ui/FlexBox/FlexBox'
import { StrengthType } from '../PasswordTestForm'

interface PasswordStrengthDisplayProps {
  passwordStrength: StrengthType
}

export const PasswordStrengthDisplay: FC<PasswordStrengthDisplayProps> = memo(
  ({ passwordStrength }) => {
    return (
      <>
        <Text>Password Strength</Text>
        <FlexBox justifyContent='center' gap='5px'>
          <PasswordStrengthDisplayItem passwordStr={passwordStrength}>
            Easy
          </PasswordStrengthDisplayItem>
          <PasswordStrengthDisplayItem passwordStr={passwordStrength}>
            Medium
          </PasswordStrengthDisplayItem>
          <PasswordStrengthDisplayItem passwordStr={passwordStrength}>
            Strong
          </PasswordStrengthDisplayItem>
        </FlexBox>
      </>
    )
  }
)
