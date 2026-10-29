# ----------------------------------------------------
# 1. Base Stage
# ----------------------------------------------------
FROM node:22-alpine AS base
WORKDIR /app

# Copy package files first for optimal Docker layer caching
COPY package*.json ./

# ----------------------------------------------------
# 2. Builder Stage
# Compiles the TypeScript/React application into static assets
# Dev dependencies (Vite, TypeScript, Tailwind) are required for building!
# ----------------------------------------------------
FROM base AS builder

# Clean install all dependencies (including devDependencies required by Vite)
RUN npm ci

# Copy all application source code
COPY . .

# Build the Vite project (outputs to /app/dist)
RUN npm run build

# ----------------------------------------------------
# 3. Development Stage
# Used for local development with Hot Module Replacement (HMR)
# Target: --target development
# ----------------------------------------------------
FROM base AS development
ENV NODE_ENV=development

# Install dependencies for development
RUN npm install

# Copy source code
COPY . .

# Expose Vite dev server port (configured as 8080 in vite.config.ts)
EXPOSE 8080

# Start Vite dev server with host flag for external container access
CMD ["npm", "run", "dev", "--", "--host", "0.0.0.0"]

# ----------------------------------------------------
# 4. Production Stage
# Lightweight Nginx image for VPS deployment
# Default target when no --target is specified
# ----------------------------------------------------
FROM nginx:alpine AS production

# Copy custom Nginx configuration (handles SPA routing & caching)
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Copy production static assets from the builder stage
COPY --from=builder /app/dist /usr/share/nginx/html

# Expose HTTP port
EXPOSE 80

# Start Nginx in the foreground
CMD ["nginx", "-g", "daemon off;"]
