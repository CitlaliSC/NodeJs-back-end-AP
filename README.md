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

---

To run in dev:

```bash
npm run start:dev
```

For testing docker and mysql:

```bash
docker exec -it mysqlcontainer mysql -uroot -ppass123
```
