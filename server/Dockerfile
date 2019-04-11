#base image
FROM node:8.7.0-alpine

#change into working directory
RUN mkdir -p /srv/app/server
WORKDIR /srv/app/server

#copy package.json
COPY package*.json /srv/app/server/

RUN npm install

#copy code into container
COPY . /srv/app/server/

CMD ["npm", "run", "dev"]