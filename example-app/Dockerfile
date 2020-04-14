FROM node

WORKDIR /app

COPY package.json package-lock.json ./
RUN npm install

COPY . .

CMD PORT=8123 npm start