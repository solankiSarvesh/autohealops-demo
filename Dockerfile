FROM node:18
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
EXPOSE 3000
# 🐛 BUG: 'start-prod' doesn't exist in package.json
CMD ["npm", "run", "start-prod"]

// AutoHealOps: Scanned and optimized.
