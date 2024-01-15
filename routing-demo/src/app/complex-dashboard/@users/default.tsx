import Link from "next/link";
import Card from "@/components/Card";

export default function UsersAnalytics() {
  return (
    <Card>
      <h2>Users Analytics</h2>
      <hr />
      <Link href="/complex-dashboard/inactive">inactive</Link>
    </Card>
  );
}
