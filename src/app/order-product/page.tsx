"use client";

import { useRouter } from "next/navigation";

export default function OrderProduct() {
  const router = useRouter();

  const handleClick = () => {
    console.log("Placing your order");

    router.push("/cart");
    // router.back()
    // router.forward()
    // router.replace()
    // router.refresh()
    // router.prefetch()
  };

  return (
    <div>
      <h1>Order product</h1>
      <div>
        <button type="button" onClick={handleClick}>
          Place your order
        </button>
      </div>
    </div>
  );
}
