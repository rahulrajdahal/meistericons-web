import * as React from 'react';
import type { ComponentMeta, ComponentStory } from '@storybook/react';
import Base from './SponserBanner.tsx.js';

export default {
  title: 'Components/Base',
  component: Base,
  argTypes: {},
} as ComponentMeta<typeof Base>;

const Template: ComponentStory<typeof Base> = (args) => <Base {...args} />;

export const Default = Template.bind({});
Default.args = {};
