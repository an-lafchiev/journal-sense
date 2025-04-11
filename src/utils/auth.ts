import "server-only";
import { prisma } from "@/lib/prisma";
import { auth } from "@clerk/nextjs/server";

export const getUserByClerkID = async () => {
  const { userId } = await auth();
  const user = await prisma.user.findUniqueOrThrow({
    where: {
      clerkId: userId as string,
    },
    select: {
      id: true,
      email: true,
      name: true,
    },
  });

  return user;
};
