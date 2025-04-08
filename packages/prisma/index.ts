import { PrismaClient } from "./generated/client"

const prisma = new PrismaClient()

export { prisma }
export * from "./generated/client"
