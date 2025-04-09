import { PrismaClient } from "./generated/client"

const prisma = new PrismaClient()

export { prisma }
export * from "./generated/client"
export * from "./prisma.module"
export * from "./prisma.service"
