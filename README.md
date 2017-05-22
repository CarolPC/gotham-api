# gotham-api
Simple API to be used in "Node Sorocaba - Meetup #1".

## Running project
You need to have installed Node.js

### Install dependencies
To install dependencies enter project folder and run following command:
```
npm install
```

## Run server
```
npm start
```

### Make Requests
Listing all characters
```
http GET http://localhost:5000/characters
```

### Using Heroku

## Heroku

## GET/POST characters
```
https://secure-thicket-39526.herokuapp.com/characters
```

## JSON example for POST
```
{
    "name": "James Gordon",
    "ocupation": "Police Commissioner",
    "quote": "Because he's not our hero.",
    "firstAppearance": 1938
}
```

## Docker

## Build your image

```
docker build -t gotham/node-web-app
```

## Run the image

```
docker run --rm -i -t -p 49160:8080 gotham/node-web-app
```

If you want to debug, using a shell you can get the `<container id>` by running:

```
docker ps
```

Then, to get the shell

```
docker exec -it <container id> /bin/bash
```

## Stop the container

```
docker stop <container id>
```
