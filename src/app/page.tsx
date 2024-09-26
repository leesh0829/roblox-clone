import Link from "next/link";

export default function Home() {
  return (
    <div>
      <h1>BOBBLOX</h1>
      <div>
        <Link href="/login">Login</Link>
      </div>
      <div>
        <Link href="/sign-up">Sign Up</Link>
      </div>
    </div>
  );
}
