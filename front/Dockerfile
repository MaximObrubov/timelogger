FROM node:18.12.0

RUN npm install -g @angular/cli

RUN mkdir -p /home/node/front/node_modules

WORKDIR /home/node/front/
COPY package*.json ./
RUN chown -R node:node /home/node

USER node
RUN npm install
EXPOSE 4200

CMD npm start
