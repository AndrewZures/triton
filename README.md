# triton
GraphQL client/proxy/service Proof of Concept App

## Summary
This repo is an attempt to better understand the feasibility of GraphQL.  It has three distinct services:
1. `client` - Front End UI built in React + Apollo client.  Sends requests to the `proxy`
2. `proxy` - Proxy server that receives requests from the `client` and routes to the `service`
3. `service` - represents a backend-only service that serves data.  receives requests from the `proxy`

## Process

#### v1
* build `client` that can read a graphql schema that is sent from the `proxy`
* build `proxy` that takes requests from the `client` and sends them to the `service`
* build `service` that defines a graphql schema (that is read by the `client`) but returns data responses to the `proxy`
* `proxy` exposes graphql schema defined by `service` to the `client` (remoteSchema)
* `service` is backed by DB layer that is complicated enough to provide at least some level of meaningful latency
* `service` uses batch-requesting to improve graphql DB query efficiency
* `service` latency is mitigated by application-layer caching strategy (redis)
* `client` uses typescript and graphql schemas work with Types

#### v2
* `service` uses GRPC instead of HTTP
* build second service `service2` that is technical similar to `service` but has different graphql schemas
* `proxy` can stitch together schemas from both `service` and `service2`, allowing client to interact with both without caring about service details
