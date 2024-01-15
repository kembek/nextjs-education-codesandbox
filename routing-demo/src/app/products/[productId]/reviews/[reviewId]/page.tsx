"use client";
import { notFound } from "next/navigation";

const getRandomInt = (count: number) => Math.ceil(Math.random() * count);

export default function ProductDetails({
  params,
}: {
  params: { productId: string; reviewId: string };
}) {
  if (getRandomInt(2) > 1) {
    throw Error("Error for reviewing");
  }

  if (parseInt(params.reviewId) > 1000) {
    notFound();
  }

  return (
    <h1>
      Review {params.reviewId} for {params.productId}
    </h1>
  );
}
