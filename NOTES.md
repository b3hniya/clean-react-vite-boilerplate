# Notes

## Environment Configuration

To properly configure and run this project, you need to set up environment variables. These variables are essential for the application to connect to external services and APIs correctly.

### Creating the `.env` File

1. **Location**: Create a `.env` file in the root directory of the project.
2. **Content**: Add the following lines to the `.env` file:

    ```txt
    VITE_API_BASE_URL=http://localhost:3000/api
    ```

    This variable sets the base URL for API requests made through Axios.

### Important Considerations

- **Security**: Do not include sensitive information like API keys or secrets in this file if the project is public.
- **Different Environments**: If you are working with multiple environments (like development, staging, and production), consider creating environment-specific files like `.env.development` or `.env.production`.

### Troubleshooting

- If changes to the `.env` file don't seem to have an effect, try restarting your development server.
- Ensure that the `.env` file is at the root level of your project, not nested inside any other directories.
