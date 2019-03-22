## Requirements: ##

1. docker
2. docker-compose

## Run app: ##

Commands should be called from the  app  root folder.

First time build will be executed automatically.

1. Run with build and logs in console: `docker-compose up --build`
2. Run build:  `docker-compose build`
3. Run in daemon mode with build: `docker-compose up --build -d`
4. Run in daemon mode with out build: `docker-compose up -d`
5. Stop app: `docker-compose down`

sudo can be required for unix based systems depending on the docker installation flow.

## Usage: ##

1. Open in browser: `http://localhost:8081/`
