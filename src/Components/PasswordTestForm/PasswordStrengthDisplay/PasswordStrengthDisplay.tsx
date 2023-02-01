import React from 'react';
import {PasswordStrengthDisplayItem} from './PasswordStrengthDisplayItem/PasswordStrengthDisplayItem';
import {Text} from '../../../shared/ui/Text/Text';
import {FlexBox} from '../../../shared/ui/FlexBox/FlexBox';



export const PasswordStrengthDisplay = () => {
  return (
    <>
      <Text>Password Strength</Text>
      <FlexBox justifyContent='center' gap='5px'>
        <PasswordStrengthDisplayItem>Easy</PasswordStrengthDisplayItem>
        <PasswordStrengthDisplayItem>Medium</PasswordStrengthDisplayItem>
        <PasswordStrengthDisplayItem>Strong</PasswordStrengthDisplayItem>
      </FlexBox>
    </>
  );
};
