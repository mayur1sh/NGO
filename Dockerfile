FROM node:16-alpine AS build
WORKDIR /app
COPY package*.json ./
RUN npm install --force --legacy-peer-deps
COPY . .
RUN npm run build
EXPOSE 4200
CMD ["npm", "start"]