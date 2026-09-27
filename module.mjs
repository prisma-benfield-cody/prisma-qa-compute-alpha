// @ts-check
import { module } from "@prisma/composer";
import prismaQaComputeAlphaService from "./service.mjs";

export default module("prisma-qa-compute-alpha", ({ provision }) => {
  provision(prismaQaComputeAlphaService, { id: "prismaqacomputealpha" });
});
