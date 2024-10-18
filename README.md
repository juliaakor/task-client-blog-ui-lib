# task-client-blog-ui-lib

## Installation

### Prerequisites

Ensure you have the following dependencies installed in your project:

- React 18.0.0 or higher
- React DOM 18.0.0 or higher
- Tailwind CSS 3.4.1 or higher

### Installation Command

To install the task-blog-ui-lib package, run the following command:

```bash
yarn add task-blog-ui-lib
```

### Peer Dependencies

```json
{
  "react": "^18.0.0",
  "react-dom": "^18.0.0",
  "tailwindcss": "^3.4.1"
}
```

### Available Components

- `Button`: A customizable button component.
- `AuthorCard`: Displays author information, such as avatar and name.
- `CategoryCard`: Shows category details for blog posts.
- `PostCard`: Displays blog post information with customizable tags.
- `ErrorMessage`: Displays error messages in a styled format.
- `PageContent`: Renders page content with customizable sections.
- `Socials`: A component for displaying social media icons.

## For Contributors

### Getting Started

To set up the development environment, clone the repository and install dependencies:

```bash
yarn
yarn prepare
```

Create a .env file:

```bash
touch .env.local
```

Add environment variables by referencing the .env.draft file.

Run the development server:

```bash
yarn dev
```

Run Storybook for component development:

```bash
yarn storybook
```

Visit http://localhost:6006 to see the result.

### Available Scripts

To run scripts within the project, use the following commands:

- yarn build: Create a production build of the library.
- yarn dev: Run the development server with Rollup in watch mode.
- yarn storybook: Start Storybook in development mode.
- yarn build-storybook: Build Storybook for production.
- yarn clean: Remove the build folder.
- yarn lint: Check for linting issues.
- yarn prettier: Check for code formatting issues.
- yarn chromatic: Publish Storybook to Chromatic.
