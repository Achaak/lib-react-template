import React from 'react';
import { Story, Meta } from '@storybook/react';

import { Icon as IconComponent, IconProps } from '../../icon';
import { IconExample } from './IconList';

export default {
  title: 'Icons/List',
  component: IconComponent
} as Meta;

const Template: Story<IconProps> = (args) => <IconExample {...args} />;

export const List = Template.bind({});
List.args = {
  size: 40
};
