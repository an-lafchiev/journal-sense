import { getUserByClerkID } from "@/utils/auth";
import { SignedIn, UserButton } from "@clerk/nextjs";

export default async function CurrentUser() {
  const user = await getUserByClerkID();
  return (
    <SignedIn>
      <div className="p-4 px-7 border-t">
        <div className="flex items-center gap-3">
          <UserButton />
          <div>
            <p className="text-sm font-medium">{user.name}</p>
            <p className="text-xs text-gray-500">{user.email}</p>
          </div>
        </div>
      </div>
    </SignedIn>
  );
}
