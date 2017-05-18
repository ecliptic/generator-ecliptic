// @flow
import dotenv from "dotenv";

dotenv.config({ silent: true });

export const DEV = process.env.NODE_ENV === "develop";
export const TEST = process.env.NODE_ENV === "test";
