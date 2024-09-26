import Link from "next/link";

export default function NotFound(): JSX.Element {
  return (
    <div>
      <h1>404 - Not Found</h1>
      <Link href="/">Go to Main Page</Link>
    </div>
  );
}
