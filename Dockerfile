FROM alpine

RUN apk update && apk add python g++ make nodejs 

COPY . /app/

COPY package.json /app/

WORKDIR /app

RUN npm install

EXPOSE 4000

CMD ["node", "jora.js"]
