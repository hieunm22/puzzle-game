FROM node:14

WORKDIR /app
COPY . .
RUN npm install
RUN npm run build
RUN npm install -g serve
# RUN apt-get update -y
# RUN apt-get install -y xsel

EXPOSE 5000

CMD ["serve", "-s", "-n", "--ssl-cert=ssl/localhost.crt", "--ssl-key=ssl/localhost.key", "build"]
