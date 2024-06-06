# Use the official Node.js runtime as the base image
FROM node:20.9.0

# Create and change to the app directory.
WORKDIR /usr/src/app

# Copy application dependency manifests to the container image.
# A wildcard is used to ensure both package.json AND package-lock.json are copied.
COPY package*.json ./

# Install production dependencies.
RUN npm install

# Copy local code to the container image.
COPY . .

# Build the Next.js application
RUN npm run build

# Expose the port on which your app will run
EXPOSE 3000

# Run the web service on container startup.
CMD ["npm", "start"]