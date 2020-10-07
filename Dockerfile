FROM node:alpine

WORKDIR /app

ADD . .

RUN npm i
RUN npx next build
RUN echo 1

# Run the image as a non-root user
RUN adduser -D myuser
USER myuser

CMD npx next start -p $PORT