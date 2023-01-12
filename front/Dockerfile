FROM node:18.12.0

RUN npm install -g @angular/cli

USER node
RUN mkdir -p /home/node/front/node_modules && chown -R node:node /home/node

WORKDIR /home/node/front/
COPY package*.json ./
RUN npm install
EXPOSE 4200

CMD npm start
