"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const authLinks = [
  {
    name: "Register",
    href: "/register",
  },
  {
    name: "Login",
    href: "/login",
  },
  {
    name: "Forgot password",
    href: "/forgot-password",
  },
];

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  return (
    <>
      <nav>
        <ul>
          {authLinks.map((link) => {
            const isActive = pathname.startsWith(link.href);

            return (
              <li key={link.name}>
                <Link
                  href={link.href}
                  style={{ color: isActive ? "tomato" : "black" }}
                >
                  {link.name}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
      <hr />
      {children}
    </>
  );
}
