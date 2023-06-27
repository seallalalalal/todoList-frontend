FROM node:14

WORKDIR /todoList-frontend
COPY package.json .
RUN npm install
COPY . .
EXPOSE 3001
CMD npm start



