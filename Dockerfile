FROM ghcr.io/puppeteer/puppeteer:latest

WORKDIR /app

COPY package.json /app
COPY config.js /app
RUN yarn install

CMD yarn build
