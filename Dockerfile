FROM node:18

WORKDIR /app
COPY . .
RUN npm install

CMD ["/bin/bash"]
