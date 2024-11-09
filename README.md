# Admin Panel

This is an Admin Panel project built using Laravel for the backend, React for the frontend, and Vite as the build tool. It provides a structured interface to manage and monitor application data and settings efficiently.

## Table of Contents
- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [Technologies](#technologies)
- [Contributing](#contributing)
- [License](#license)

## Features
- User authentication and authorization
- CRUD operations for managing resources
- Interactive data visualization
- Responsive design for mobile and desktop
- Modern UI components with dynamic routing

## Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/sadkingo/admin-panel.git
   cd admin-panel
2. **Install backend dependencies:**
   ```bash
   composer install
3. Install frontend dependencies:
    ```bash
    npm install
4. Configure environment variables:
- Copy .env.example to .env:
    ```bash
    cp .env.example .env
- Update .env with your database credentials and other necessary configurations.
- Set the APP_NAME in .env to Admin Panel or your preferred name.

5. Generate the application key:
    ```bash
    php artisan key:generate
6. Run database migrations:
    ```bash
    php artisan migrate


## Usage
1. Start the Laravel server:
    ```bash
    php artisan serve
2. Start the Vite development server:
    ```bash
    npm run dev
3. Access the application at http://localhost:8000 (or the specified address).

## Technologies
- Laravel - Backend framework
- React - Frontend library
- Vite - Build tool for fast development
- MySQL - Database (or any compatible database)

  
## Contributing
Contributions are welcome! Please fork the repository and create a pull request with your changes. Make sure to write clear commit messages and follow standard coding guidelines.


## License
This project is licensed under the MIT License. You are free to use, modify, and distribute this software, provided that the original copyright notice and this permission notice are included in all copies or substantial portions of the software.

See the [LICENSE](LICENSE) file for more details.
