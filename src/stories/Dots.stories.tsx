import React from 'react';
import { Dots } from '../components/Dots';
import type { Meta, StoryObj } from '@storybook/react';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
    title: 'Example/Dots',
    component: Dots,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    decorators: [
        (Story) => (
            <>
                < Story />
            </>
        ),
    ],
} satisfies Meta<typeof Dots>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Main: Story = {
    args: {
        
    },
};