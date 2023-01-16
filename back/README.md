## Timelogger Back-end

A simple Nest.js backend to log time in Postgres DB 

### To start
1. create a `.env` file with following data:

```
DB_HOST=db
DB_PORT=${DB_PORT}             // take from docker-compose.yml
DB_USERNAME='${DB_USER}'   // take from docker-compose.yml
DB_PASSWORD='${DB_PASS}' // take from docker-compose.yml
DB_NAME='${DB_NAME}'  // take from docker-compose.yml
```

2. run `npm i`
3. done :)