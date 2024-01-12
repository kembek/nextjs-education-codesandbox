import { Metadata } from "next";

type Props = {
  params: { productId: string };
};

export const generateMetadata = async ({
  params,
}: Props): Promise<Metadata> => {
  const title = await Promise.resolve(`Product ${params.productId}`);

  return {
    title,
  };
};

export default function ProductDetails({ params }: Props) {
  return <h1>Product details for {params.productId}</h1>;
}
