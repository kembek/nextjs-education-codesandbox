"use client";

const getRandomInt = (count: number) => Math.ceil(Math.random() * count);

export default function ProductDetails({
  children,
}: {
  children: React.ReactNode;
}) {
  if (getRandomInt(2) > 1) {
    throw Error("Error for product detailing LAYOUT");
  }

  return (
    <>
      {children}
      <h3>Featured products</h3>
    </>
  );
}
