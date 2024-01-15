"use client";
import { useState } from "react";
import Link from "next/link";

const navLinks = [
  { href: "/blog/first", name: "First" },
  { href: "/blog/second", name: "Second" },
];

export default function BlogTemplate({
  children,
}: {
  children: React.ReactNode;
}) {
  const [search, setSearch] = useState("");

  return (
    <>
      <hr />
      <input
        type="text"
        value={search}
        onChange={(e) => {
          setSearch(e.target.value);
        }}
      />
      <hr />
      <ul>
        {navLinks.map((link) => (
          <li key={link.name}>
            <Link href={link.href}>{link.name}</Link>
          </li>
        ))}
      </ul>

      <hr />
      {children}
    </>
  );
}
