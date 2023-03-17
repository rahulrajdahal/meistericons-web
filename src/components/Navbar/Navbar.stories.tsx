import * as React from 'react';
import type { ComponentMeta, ComponentStory } from '@storybook/react';
import Navbar from './Navbar';

export default {
  title: 'Components/Navbar',
  component: Navbar,
  argTypes: {},
} as ComponentMeta<typeof Navbar>;

const Template: ComponentStory<typeof Navbar> = () => <Navbar />;

export const Default = Template.bind({});
Default.args = {};
