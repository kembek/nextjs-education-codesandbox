import Card from "@/components/Card";
import Link from "next/link";

export default function InactiveUsers() {
  return (
    <Card>
      <h2>Inactive Users</h2>
      <hr />
      <Link href="/complex-dashboard">Default</Link>
    </Card>
  );
}
