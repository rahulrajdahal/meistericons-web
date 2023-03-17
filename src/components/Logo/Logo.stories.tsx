import * as React from 'react';
import type { ComponentMeta, ComponentStory } from '@storybook/react';
import Logo from './Logo';

export default {
  title: 'Components/Logo',
  component: Logo,
  argTypes: {},
} as ComponentMeta<typeof Logo>;

const Template: ComponentStory<typeof Logo> = () => <Logo />;

export const Default = Template.bind({});
Default.args = {};
