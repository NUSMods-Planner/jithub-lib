/**
 * This module provides parsing functionality for blocks using
 * [ajv](https://ajv.js.org/), a JSON Type Definition validator, and
 * [j-toml](https://www.npmjs.com/package/@ltd/j-toml)), a TOML parser in TypeScript.
 *
 * @module
 */

// import Ajv, { JTDSchemaType } from "ajv/dist/jtd";
// const ajv = new Ajv();

// interface MyType {
//   num: number;
//   optionalStr?: string;
//   nullableEnum: "v1.0" | "v1.2" | null;
//   values: Record<string, number>;
// }

// const schema: JTDSchemaType<MyType> = {
//   properties: {
//     num: { type: "float64" },
//     nullableEnum: { enum: ["v1.0", "v1.2"], nullable: true },
//     values: { values: { type: "int32" } },
//   },
//   optionalProperties: {
//     optionalStr: { type: "string" },
//   },
// };

// import TOML from '@ltd/j-toml';

import TOML from "@ltd/j-toml";
import fs from "fs";

// const test = TOML.parse('DSL Specification');

const test = () => {
  const data = fs.readFileSync("./DSL Specification.toml", "utf8");

  const toml = TOML.parse(data);
  // 1.0, "\n", true

  console.log(toml);
};

test();
