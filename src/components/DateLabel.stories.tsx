import type { Meta, StoryObj } from '@storybook/react';
import { DateLabel } from './DateLabel';

const meta: Meta<typeof DateLabel> = {
  component: DateLabel,
  title: 'components/DateLabel',
};
export default meta;

type Story = StoryObj<typeof DateLabel>;

export const Story01: Story = {
  name: 'Default',
  args: {
    date: '2023-01-01',
  },
};
// ...existing code (from src/app/components/DateLabel.stories.tsx)...
