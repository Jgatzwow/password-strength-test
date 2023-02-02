import React from 'react'
import { ComponentMeta, ComponentStory } from '@storybook/react'
import { Input } from './Input'

export default {
  title: 'Components/Input',
  component: Input
} as ComponentMeta<typeof Input>

const Template: ComponentStory<typeof Input> = args => <Input {...args} />

export const DefaultInput = Template.bind({})
DefaultInput.args = {
  title: 'Your Password',
  hidePassword: true
}

export const ErrorInput = Template.bind({})
ErrorInput.args = {
  title: 'Your Password',
  hidePassword: true,
  error: 'Some thing is wrong'
}
