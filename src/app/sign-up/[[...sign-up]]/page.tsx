import { SignUp } from "@clerk/nextjs";

export default function Page() {
  return (
    <div className="mx-auto my-20">
      <SignUp path="/sign-up" routing="path" signInUrl="/sign-in" />;
    </div>
  );
}
