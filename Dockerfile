FROM mhart/alpine-node:latest
RUN apk update && apk add bash

RUN apk update && apk upgrade && \
    apk add --no-cache bash git openssh

ARG USER
RUN adduser -D $USER
WORKDIR /harraga-frontend
RUN chown -R $USER:$USER .

USER $USER

COPY package*.json /harraga-frontend/
COPY yarn.lock /harraga-frontend/


EXPOSE 80
# Run the app when the container launches
CMD ["yarn", "start"]
