# NodeJs-back-end-API

1. Clone this repository

```bash
git clone https://github.com/CitlaliSC/NodeJs-back-end-AP.git
```

2. Install dependencies

```bash
npm i
```

3. Create a .env file with the following info:

- SERVER_PORT=3000
- DB_HOST=localhost
- DB_PORT=3306
- DB_USER=admin
- DB_PASSWORD=pass123
- DB_NAME=patientsdb
- DB_CONNECTION_LIMIT=20

4. Create docker container
```bash
docker-compose up -d 
```

---

For testing docker and mysql:

```bash
docker exec -it mysqlcontainer mysql -uroot -ppass123
```

---

To run in dev:

```bash
npm run start:dev
```

> **Note:** If you are running this on Windows, you may need to adapt the following lines in your `package.json` scripts, as setting environment variables differs from Linux:
> 
> ```json
> "scripts": {
>   "start:dev": "NODE_ENV=dev nodemon src/index.js",
>   "start:prod": "NODE_ENV=production node src/index.js"
> }
> ```