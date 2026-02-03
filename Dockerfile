FROM node:20-bullseye
WORKDIR /app
COPY . .
RUN npm install
CMD ["/bin/bash"]
