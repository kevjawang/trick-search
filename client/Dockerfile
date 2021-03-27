FROM node:14
WORKDIR /usr/src/app
COPY package*.json ./
RUN npm install
# production
# RUN npm ci --only=production
COPY . .
EXPOSE 3000
CMD ["npm", "run", "dev"]
