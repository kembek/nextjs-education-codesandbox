export default function ProductDetails({
  params,
}: {
  params: { productId: string; reviewId: string };
}) {
  return (
    <h1>
      Review {params.reviewId} for {params.productId}
    </h1>
  );
}
