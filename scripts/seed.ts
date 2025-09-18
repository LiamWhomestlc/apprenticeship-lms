ts import { PrismaClient } from "@prisma/client"; const prisma = new PrismaClient(); async function main() { console.log("Seed script running"); } main().finally(()=>prisma.$disconnect());
