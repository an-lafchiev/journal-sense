import Loading from "@/components/ui/icons/loading";
import { prisma } from "@/lib/prisma";
import { currentUser } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";

const createNewUser = async () => {
  const user = await currentUser();

  if (!user) {
    redirect("/sign-in");
  }

  const match = await prisma.user.findUnique({
    where: { clerkId: user.id },
  });

  if (!match) {
    const newUser = await prisma.user.create({
      data: {
        clerkId: user.id,
        email: user.emailAddresses[0].emailAddress,
        name: user.fullName,
      },
    });
    return newUser;
  }

  redirect("/journal");
};

export default async function Page() {
  await createNewUser();
  return (
    <div className="flex items-center justify-center h-screen">
      <Loading />;
    </div>
  );
}
