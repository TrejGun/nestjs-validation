FROM node:24-alpine AS builder

WORKDIR /usr/src/app

COPY package.json .npmrc ./

# @ethberry/eslint-config comes from GitHub Packages and needs a token; linting is not part of the build.
# --ignore-scripts skips husky (no .git here) and install-time telemetry.
RUN npm pkg delete "devDependencies.@ethberry/eslint-config" \
 && npm install --ignore-scripts --no-audit --no-fund

COPY tsconfig.json ./
COPY src ./src

RUN npm run build

FROM node:24-alpine

WORKDIR /usr/src/app

ENV NODE_ENV=production

COPY package.json .npmrc ./

RUN npm install --omit=dev --ignore-scripts --no-audit --no-fund

COPY --from=builder /usr/src/app/dist ./dist
COPY static ./static

EXPOSE 3000

# GraphQL writes schema.gql (autoSchemaFile) into the working directory on startup
RUN chown node:node /usr/src/app

USER node

CMD ["node", "."]
