FROM node:alpine

# Default environment variables
ENV PORT=4000 \
    NODE_ENV=production

# Create app directory
RUN mkdir -p /srv/<%= name %>
WORKDIR /srv/<%= name %>

# Install app dependencies
COPY package.json /srv/<%= name %>
RUN npm install

# Copy app source
COPY . /srv/<%= name %>

EXPOSE $PORT
CMD ["npm", "start"]
