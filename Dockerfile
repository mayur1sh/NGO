FROM node:18
WORKDIR /app
COPY package*.json ./
RUN npm install --force 
COPY . .
RUN npm run ng build
EXPOSE 4200
CMD ["npm", "start"]