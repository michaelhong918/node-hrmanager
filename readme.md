### Installation

- Install npm packages using "npm install" command
- Make sure that MySQL server is running on your machine
- Edit config.js in config folder as follows:
  ```
  "development": {
      "username": YOUR_DATABASE_USERNAME,
      "password": YOUR_DATABSE_PASSWORD,
      "database": YOUR_DATABASE_NAME,
      "host": "127.0.0.1",
      "dialect": "mysql",
      "logging": false
  }
  ```
- Run server using "npm start" command
- Run seeder using "npm run seed:run"
