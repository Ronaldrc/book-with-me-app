# book-with-me-app
Book an appointment with me via website app created using full-stack concepts.

Linux users must run these two commands before `pip install psycopg2`
- sudo apt install libpq-dev python3-dev
- sudo apt install build-essential

## Running this project:
Create the .env file in the same directory as docker-compose-yml.
Use the variables below, but replace the 3 values:
- POSTGRES_PASSWORD: my_postgres_password
- POSTGRES_USER: my_postgres_user
- POSTGRES_DB: my_postgres_db

Now, run this command to create your database
`docker compose up -d db`

