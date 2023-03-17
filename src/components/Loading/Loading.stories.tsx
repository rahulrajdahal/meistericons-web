import * as React from 'react';
import type { ComponentMeta, ComponentStory } from '@storybook/react';
import Loading from './Loading';

export default {
  title: 'Components/Loading',
  component: Loading,
  argTypes: {},
} as ComponentMeta<typeof Loading>;

const Template: ComponentStory<typeof Loading> = () => <Loading />;

export const Default = Template.bind({});
Default.args = {};
