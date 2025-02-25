import { SignIn } from '@clerk/nextjs';

export default function Page() {
  return (
    <section className="w-screen h-svh flex justify-center items-center">
      <SignIn />
    </section>
  );
}
