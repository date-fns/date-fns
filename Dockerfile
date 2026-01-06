FROM node:20-slim

# Set working directory
WORKDIR /app

# Install pnpm
RUN corepack enable

# Copy dependency files first (better caching)
COPY package.json pnpm-lock.yaml ./

# Install dependencies
RUN pnpm install

# Copy the rest of the repository
COPY . .

# Default to an interactive shell for dev/testing
CMD ["bash"]
