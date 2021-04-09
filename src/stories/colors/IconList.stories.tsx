import React from 'react';
import { Story, Meta } from '@storybook/react';

import { ColorExample, ColorExampleProps } from './ColorList';

export default {
  title: 'Colors/List',
  component: ColorExample
} as Meta;

const Template: Story<ColorExampleProps> = (args) => <ColorExample {...args} />;

export const List = Template.bind({});
List.args = {};
