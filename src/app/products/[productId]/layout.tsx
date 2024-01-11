export default function ProductDetails({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      {children}
      <h3>Featured products</h3>
    </>
  );
}
