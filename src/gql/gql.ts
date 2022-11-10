/* eslint-disable */
import * as types from './graphql';
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';

const documents = {
    "\n  query blogListForHome {\n    blogCollection(order: date_DESC) {\n      items {\n        title\n      }\n    }\n  }\n": types.BlogListForHomeDocument,
};

export function graphql(source: "\n  query blogListForHome {\n    blogCollection(order: date_DESC) {\n      items {\n        title\n      }\n    }\n  }\n"): (typeof documents)["\n  query blogListForHome {\n    blogCollection(order: date_DESC) {\n      items {\n        title\n      }\n    }\n  }\n"];

export function graphql(source: string): unknown;
export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;