# Apollo gateway example

This monorepo contains two graphql microservices and one apollo gateway. 

Each of the microservices provides some part of the graph and the the gateway stiches them together so you can have one federated graph. 

# Install and run

- clone the repo
- run `yarn install`
- run `yarn dev` in one terminal
- Once both servers have started run `yarn dev:gateway` in a second terminal

# Deployed server

Check out this example on [now.sh](https://tbergq-graphql-gateway.now.sh/)
