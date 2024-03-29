"use client";

export default function ErrorBoundary({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  return (
    <div>
      <h2>Error message: {error.message}</h2>
      <div>
        <button onClick={reset}>Try again</button>
      </div>
    </div>
  );
}
