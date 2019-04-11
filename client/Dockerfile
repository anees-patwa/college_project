#base image
FROM node:8.7.0-alpine

#change into working directory
RUN mkdir -p /srv/app/client
WORKDIR /srv/app/client

#copy package.json
COPY ./college_client/package*.json /srv/app/client/

RUN npm install

#copy code into container
COPY ./college_client/ /srv/app/client/

CMD ["npm", "start"]