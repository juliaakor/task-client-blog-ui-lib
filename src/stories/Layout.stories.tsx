import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';

import { PageContent } from '@components/PageContent';

const meta = {
  component: PageContent,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
  title: 'Components/Layout',
} satisfies Meta<typeof PageContent>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: (
      <div>
        <h1 className="text-3xl font-bold">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h1>
        <p>
          Suspendisse lectus arcu, congue sed malesuada quis, sodales vel felis. Proin in dui lectus. Aenean pulvinar
          ligula ut elit blandit ultricies. Nunc tellus augue, placerat ac feugiat ac, luctus a neque. Donec malesuada,
          dui ac gravida scelerisque, nunc tellus euismod odio, ac pharetra risus dolor vitae dui. Proin eu massa dolor.
          Donec accumsan magna nec felis euismod luctus.
        </p>
      </div>
    ),
  },
};

export const MultipleChildren: Story = {
  args: {
    children: (
      <>
        <div>
          <h1 className="text-3xl font-bold">
            Suspendisse lectus arcu, congue sed malesuada quis, sodales vel felis. Proin in dui lectus. Aenean pulvinar
            ligula ut elit blandit ultricies.
          </h1>
          <h2 className="text-2xl">
            Vestibulum facilisis tempor consequat. Pellentesque non nisi felis. Phasellus neque ex, vestibulum eget nunc
            quis, fringilla pulvinar massa.
          </h2>
          <p>
            Sed non consequat purus. Aliquam eget libero efficitur felis vulputate consectetur. Maecenas eu rutrum erat.
            Donec varius, libero id tincidunt venenatis, augue justo tristique arcu, at luctus elit nulla a enim. Fusce
            odio felis, euismod in odio eget, iaculis euismod nunc. Quisque at sagittis sapien.
          </p>
        </div>
        <div>
          <h1 className="text-3xl font-bold">
            Suspendisse lectus arcu, congue sed malesuada quis, sodales vel felis. Proin in dui lectus. Aenean pulvinar
            ligula ut elit blandit ultricies.
          </h1>
          <h2 className="text-2xl">
            Vestibulum facilisis tempor consequat. Pellentesque non nisi felis. Phasellus neque ex, vestibulum eget nunc
            quis, fringilla pulvinar massa.
          </h2>
          <p>
            Sed non consequat purus. Aliquam eget libero efficitur felis vulputate consectetur. Maecenas eu rutrum erat.
            Donec varius, libero id tincidunt venenatis, augue justo tristique arcu, at luctus elit nulla a enim. Fusce
            odio felis, euismod in odio eget, iaculis euismod nunc. Quisque at sagittis sapien.
          </p>
        </div>
      </>
    ),
  },
};
