FROM node:14-alpine AS BUILD_IMAGE

WORKDIR /usr/src/app

COPY package.json package-lock.json ./

RUN npm install

COPY . .

# ARG DB_URI_DEV
# ARG FIREBASE_VIEW
# RUN DB_URI=$DB_URI_DEV FIREBASE_VIEW=$FIREBASE_VIEW npm run build
RUN npm run build 
RUN npm run export
RUN npm prune --production


# FROM node:14-alpine


# WORKDIR /usr/src/app

# COPY --from=BUILD_IMAGE /usr/src/app/node_modules ./node_modules
# COPY --from=BUILD_IMAGE /usr/src/app/public ./public
# COPY --from=BUILD_IMAGE /usr/src/app/package.json ./package.json
# COPY --from=BUILD_IMAGE /usr/src/app/dist ./dist
# COPY --from=BUILD_IMAGE /usr/src/app/.next ./.next
# COPY --from=BUILD_IMAGE /usr/src/app/next.config.js ./next.config.js
# COPY --from=BUILD_IMAGE /usr/src/app/next-sitemap.config.js ./next-sitemap.config.js
# COPY --from=BUILD_IMAGE /usr/src/app/tailwind.config.js ./tailwind.config.js

EXPOSE 3000

CMD [ "npm", "start"]