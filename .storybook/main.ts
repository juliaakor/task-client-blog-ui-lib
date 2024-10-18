import TsconfigPathsPlugin from 'tsconfig-paths-webpack-plugin';
import type { StorybookConfig } from '@storybook/react-webpack5';

const config: StorybookConfig = {
  stories: ['../src/**/*.mdx', '../src/**/*.stories.@(js|jsx|mjs|ts|tsx)'],
  addons: [
    '@storybook/addon-onboarding',
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@chromatic-com/storybook',
    '@storybook/addon-interactions',
  ],
  framework: '@storybook/nextjs',
  webpackFinal: async (config) => {
    if (config.resolve) {
      config.resolve.plugins = [new TsconfigPathsPlugin()];
      config.devtool = 'source-map';
    }

    return config;
  },
};

export default config;
