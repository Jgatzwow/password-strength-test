import React from 'react';
import {ComponentMeta, ComponentStory} from '@storybook/react';
import {PasswordTestForm} from './PasswordTestForm';


export default {
  title: 'Components/PasswordTestForm',
  component: PasswordTestForm,
  args: {}
} as ComponentMeta<typeof PasswordTestForm>;

const Template: ComponentStory<typeof PasswordTestForm> = (args) =>
  <PasswordTestForm/>

export const PasswordTestFormExample = Template.bind({});
PasswordTestFormExample.args = {};
