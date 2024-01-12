import Link from "next/link";

const productIdList = [1, 2, 3, 100];

export default function ProductList() {
  return (
    <section>
      <div>
        <Link href="/">Home</Link>
      </div>

      <h1>Product list</h1>

      <ul>
        {productIdList.map((productId) => {
          return (
            <li key={productId}>
              <Link href={`products/${productId}`} replace={productId === 3}>
                <h5>Product {productId}</h5>
              </Link>
            </li>
          );
        })}
      </ul>
    </section>
  );
}
