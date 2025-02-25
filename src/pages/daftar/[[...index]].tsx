import { SignUp } from '@clerk/nextjs';

export default function Page() {
  return (
    <section className="w-screen h-fit flex justify-center items-center">
      <SignUp />
    </section>
  );
}
