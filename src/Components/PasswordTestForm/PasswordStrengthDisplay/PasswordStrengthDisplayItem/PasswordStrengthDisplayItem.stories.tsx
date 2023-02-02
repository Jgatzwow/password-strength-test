import React from 'react';
import {ComponentMeta, ComponentStory} from '@storybook/react';
import {PasswordStrengthDisplayItem} from './PasswordStrengthDisplayItem';
import {StrengthType} from '../../PasswordTestForm';

export default {
  title: 'Components/StrengthDisplayItem',
  component: PasswordStrengthDisplayItem,
} as ComponentMeta<typeof PasswordStrengthDisplayItem>;

const Template: ComponentStory<typeof PasswordStrengthDisplayItem> = (args) =>
  <PasswordStrengthDisplayItem {...args}/>;

export const DisabledStrengthItem = Template.bind({});
DisabledStrengthItem.args = {
  passwordStr: 'Empty' as StrengthType,
  children: 'Empty'
};

export const RedStrengthItem = Template.bind({});
RedStrengthItem.args = {
  passwordStr: 'Error' as StrengthType,
  children: 'Error or Easy'
};

export const YellowStrengthItem = Template.bind({});
YellowStrengthItem.args = {
  passwordStr: 'Medium' as StrengthType,
  children: 'Medium'
};

export const GreenStrengthItem = Template.bind({});
GreenStrengthItem.args = {
  passwordStr: 'Strong' as StrengthType,
  children: 'Strong'
};

