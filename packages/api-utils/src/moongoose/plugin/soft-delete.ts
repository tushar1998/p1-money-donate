import { Schema, Document, Query, Aggregate, DocumentOrQueryMiddleware } from "mongoose";

export function softDeletePlugin(schema: Schema, options) {
  console.log({ schema, options });
}
