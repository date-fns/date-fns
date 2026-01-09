# Use official Node LTS
FROM node:20-bullseye

# Set working directory
WORKDIR /app

# Copy package files first (better caching)
COPY package.json package-lock.json* pnpm-lock.yaml* ./

# Install pnpm (date-fns prefers pnpm)
RUN npm install -g pnpm

# Install dependencies
RUN pnpm install

# Copy the rest of the repo
COPY . .

# Make test.sh executable
RUN chmod +x test.sh

# Default command: run both base and new tests
CMD ["bash", "-c", "./test.sh base && ./test.sh new"]
