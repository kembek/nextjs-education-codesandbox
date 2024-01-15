import Link from "next/link";
import Card from "@/components/Card";

export default function Notifications() {
  return (
    <Card>
      <h2>Notifications</h2>
      <hr />
      <Link href="/complex-dashboard/archived">Archived</Link>
    </Card>
  );
}
