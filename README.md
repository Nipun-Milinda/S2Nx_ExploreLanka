
# ExploreLanka

ExploreLanka is an innovative application designed to promote tourism in Sri Lanka through an engaging treasure hunt experience. Tourists visit iconic locations, scan QR codes, complete challenges, and collect AR items while exploring the beautiful island of Sri Lanka.

## Features

- **Next.js Framework**: Provides a powerful and flexible React-based framework for building modern web applications.
- **Seamless Cloud Integration**: Uses Cloudinary for efficient file management and image optimization.
- **Rich UI Components**: Utilizes Heroicons and Material Tailwind for a beautiful and responsive design.
- **Real-Time Data Visualization**: Includes charting capabilities with Chart.js and React-ApexCharts.
- **State Management**: Manages global state effectively with Redux Toolkit.
- **Secure Authentication**: Implements JWT for secure user authentication.
- **Database Management**: Uses Sequelize with support for PostgreSQL.

## Getting Started

### Prerequisites

- **Node.js** (>= 18.0.0)
- **npm** (>= 9.0.0) or **yarn**

### Installation

Clone the repository:

```bash
git clone https://github.com/yourusername/explorelanka.git
cd explorelanka
```

Install dependencies:

```bash
npm install
# or
yarn install
```

### Set up environment variables:

Create a \`.env\` file in the root directory and add your environment variables. For example:

```env
PORT=your_port
DB_NAME=your_db_name
DB_USERNAME=your_db_username
DB_PASSWORD=your_db_password
DB_HOST=your_db_host
CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_api_key
CLOUNDINARY_API_SECRET=your_api_secret
JWT_SECRET=your_jwt_secret
JWT_EXPIRATION=1h
BCRYPT_SALT_ROUNDS=10
```

### Start From

- **Start Exploring App**: Start using the app.

```bash
   localhost:3000/mobile/onboarding/1
```

### Scripts

- **Development Server**: Start the development server with hot-reloading.

    ```bash
    npm run dev
    # or
    yarn dev
    ```

- **Build**: Build the application for production.

    ```bash
    npm run build
    # or
    yarn build
    ```

- **Start**: Start the production server.

    ```bash
    npm run start
    # or
    yarn start
    ```

- **Lint**: Lint the codebase.

    ```bash
    npm run lint
    # or
    yarn lint
    ```

### Database Migrations:

- **Create a new migration**:

    ```bash
    npm run migration:create
    # or
    yarn migration:create
    ```

- **Apply migrations**:

    ```bash
    npm run migrate
    # or
    yarn migrate
    ```

- **Rollback last migration**:

    ```bash
    npm run migrate:rollback
    # or
    yarn migrate:rollback
    ```

- **Rollback all migrations**:

    ```bash
    npm run migrate:rollback:all
    # or
    yarn migrate:rollback:all
    ```

## Technologies Used

- **Frontend**: Next.js, React, Tailwind CSS, Heroicons, Material Tailwind
- **Backend**: Express, Sequelize, PostgreSQL
- **Authentication**: JSON Web Tokens (JWT)
- **File Management**: Cloudinary
- **Charting**: Chart.js, React-ApexCharts

## Contributing

We welcome contributions to ExploreLanka! If you'd like to contribute, please follow these steps:

1. Fork the repository.
2. Create a new branch (\`git checkout -b feature/your-feature\`).
3. Commit your changes (\`git commit -am 'Add new feature'\`).
4. Push to the branch (\`git push origin feature/your-feature\`).
5. Create a new Pull Request.

## License

This project is licensed under the MIT License. See the LICENSE file for details.

## Contact

For questions or feedback, please reach out to us at \`shiwanthah@gmail.com\`.
