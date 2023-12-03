# Clean React Vite Boilerplate

This repository contains a clean, scalable, and efficient React starter boilerplate, embodying best practices and modern development standards. It's designed to kickstart React projects with a suite of pre-configured tools and libraries for a seamless development experience.

## Features

- **Vite**
- **React Router**
- **Sass**
- **Zustand**
- **Axios**
- **ESLint & Prettier**
- **Husky & lint-staged**
- **Tailwind CSS**
- **Internationalization**

## Getting Started

To get started with this boilerplate, clone the repository and install the dependencies:

```bash
git clone https://github.com/b3hniya/clean-react-vite-boilerplate.git
cd clean-react-vite-boilerplate
npm install
```

## Usage

After installing, you can start the development server with:

```bash
npm run dev
```

Build the project with:

```bash
npm run build
```

## Project Structure

- `src/assets`: Static files like images and fonts.
- `src/common`: Shared components, hooks, styles, and utilities.
- `src/config`: Global configurations and API setup.
- `src/presentation`: Feature-based modules, each with components, hooks, etc.
- `src/store`: State management using Zustand.

### Environment Configuration

To properly configure and run this project, you need to set up environment variables. These variables are essential for the application to connect to external services and APIs correctly.

#### Creating the `.env` File

1. **Location**: Create a `.env` file in the root directory of the project.
2. **Content**: Add the following lines to the `.env` file:

    ```txt
    VITE_API_BASE_URL=http://localhost:3000/api
    ```

    This variable sets the base URL for API requests made through Axios.

#### Important Considerations

- **Security**: Do not include sensitive information like API keys or secrets in this file if the project is public.
- **Different Environments**: If you are working with multiple environments (like development, staging, and production), consider creating environment-specific files like `.env.development` or `.env.production`.

#### Troubleshooting

- If changes to the `.env` file don't seem to have an effect, try restarting your development server.
- Ensure that the `.env` file is at the root level of your project, not nested inside any other directories.

## Contributing

Contributions are welcome! Please read the [contributing guide](CONTRIBUTING.md) for more information.

## License

This project is licensed under the [MIT License](LICENSE).

## Acknowledgements

- This project was bootstrapped with [Vite](https://vitejs.dev/).
- Tailwind CSS setup and configuration inspired by [Tailwind CSS Documentation](https://tailwindcss.com/docs).

---

For more detailed information about each tool and setup, please refer to the respective documentation.
