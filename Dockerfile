FROM node:18

RUN npm install

COPY . .

RUN npm run build --prod


CMD ["npm", "start"]