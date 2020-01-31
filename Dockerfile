FROM docker.io/library/node:8.11.3

ENV NODE_ENV production
ENV PORT 8080

RUN mkdir /app
COPY public /app/public
COPY app.js /app/
COPY package.json /app/package.json
WORKDIR /app
RUN npm install

CMD ["node", "app.js"]
