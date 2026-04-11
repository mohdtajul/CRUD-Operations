FROM node:18

WORKDIR /app

# Backend ki package.json copy karo
COPY package*.json ./

RUN npm install

# Pura backend code copy karo
COPY . .

EXPOSE 3001

CMD ["npm", "start"]