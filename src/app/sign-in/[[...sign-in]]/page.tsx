import { SignIn } from "@clerk/nextjs";

export default function Page() {
  return (
    <div className="mx-auto my-20">
      <SignIn signInUrl="/sign-in" />;
    </div>
  );
}
