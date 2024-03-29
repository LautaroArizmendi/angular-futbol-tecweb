FROM node:16-alpine

WORKDIR /app

COPY package*.json .
RUN npm install

COPY . .

EXPOSE 4200

CMD ["npm", "run", "start", "--", "--configuration=k8s", "--host=0.0.0.0"]