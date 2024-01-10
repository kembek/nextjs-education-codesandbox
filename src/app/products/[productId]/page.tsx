export default function ProductDetails({
  params,
}: {
  params: { productId: string };
}) {
  return <h1>Product details for {params.productId}</h1>;
}
