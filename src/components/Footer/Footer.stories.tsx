import * as React from 'react';
import type { ComponentMeta, ComponentStory } from '@storybook/react';
import Footer from './Footer';

export default {
  title: 'Components/Footer',
  component: Footer,
  argTypes: {},
} as ComponentMeta<typeof Footer>;

const Template: ComponentStory<typeof Footer> = () => <Footer />;

export const Default = Template.bind({});
Default.args = {};
