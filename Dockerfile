FROM node:8.9.4
WORKDIR /app
COPY package.json /app
RUN npm install
RUN npm install npm-run-all eslint-watch
COPY . /app
CMD npm start
EXPOSE 4000