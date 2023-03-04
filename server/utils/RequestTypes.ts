import { Query } from 'express-serve-static-core'

/*
 * typesafety and intellisense from the body that is passed
 */
export interface TypedRequestBody<T> extends Express.Request {
  body: T
}

/*
 * typesafety and intellisense from the query that is passed
 */
export interface TypedRequestQuery<T extends Query> extends Express.Request {
  query: T
}

/*
 * typesafety and intellisense from the query and body that is passed
 */
export interface TypedRequest<T extends Query, U> extends Express.Request {
  body: U
  query: T
}
