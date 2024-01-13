import Link from "next/link";

export default function F4() {
  return (
    <div>
      <h1>F4 page</h1>
      <div>
        <ul>
          <li>
            <Link href="/f1/f3">F2</Link>
          </li>
          <li>
            <Link href="/about">About</Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
