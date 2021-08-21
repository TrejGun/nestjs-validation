# NestJS Validation

# Installation

```sh
npm i
npm start
```

## REST

Retrieve value from GET request, with only typechecking

```sh
curl http://localhost:3000/test/get-basic\?query\=1
```

Validate value from GET request
All values passed from query string are actually strings, so it has to be transformed first

```sh
curl http://localhost:3000/test/get-simple\?query\=1
```

Validate value from POST request, sent using simple html form
All values passed from form are actually strings too, so it has to be transformed first

```sh
curl -v \
-X POST http://localhost:3000/test/post-urlencoded \
-d "query=1" \
-H "Content-Type: application/x-www-form-urlencoded"
```

Validate value from POST request, sent as json object

```sh
curl -v \
-X POST http://localhost:3000/test/post-json \
-d '{"query": 1}' \
-H "Content-Type: application/json"
```

Validate value using custom validator

```sh
curl -v \
-X POST http://localhost:3000/test/custom-with-injection \
-d '{"query": 1}' \
-H "Content-Type: application/json"
```

Validate value using custom validator with injected dependency

```sh
curl -v \
-X POST http://localhost:3000/test/custom-with-injection \
-d '{"query": 1}' \
-H "Content-Type: application/json"
```

## GraphQL

Validate value using build in GraphQL type check

```gql
query basic {
  basic (query: 1)
}
```

Validate value using basic schema

```gql
query simple {
  simple (input: {query: 1})
}
```

Validate value using custom schema

```gql
query custom {
  custom (input: {query: 1})
}
```

Validate value using custom schema with injected dependency

```gql
query customWithInjection {
  customWithInjection (input: {query: 1})
}
```

## WebSockets

Navigate to http://localhost:3000/ to see it in action
