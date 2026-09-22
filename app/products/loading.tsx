export default function ProductsLoading() {
  return (
    <div className="space-y-4 p-6">
      <div className="h-7 w-64 animate-pulse rounded bg-black/[.06]" />
      {[1, 2, 3].map((i) => (
        <div key={i} className="h-16 animate-pulse rounded-lg bg-black/[.06]" />
      ))}
    </div>
  );
}
