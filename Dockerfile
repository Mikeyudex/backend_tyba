FROM node:14 

WORKDIR /app

COPY package*.json ./

RUN npm install

RUN npm install -G typescript

COPY . .

CMD [ "npm" , "deploy"]