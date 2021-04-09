import React from 'react';
import { Story, Meta } from '@storybook/react';

import { Icon as IconComponent, IconProps } from '../../icon';

export default {
  title: 'Icons/Icon',
  component: IconComponent
} as Meta;

const Template: Story<IconProps> = (args) => <IconComponent {...args} />;

export const Icon = Template.bind({});
Icon.args = {
  icon: "edit"
};
