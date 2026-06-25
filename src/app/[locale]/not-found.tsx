import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex min-h-[60vh] flex-col items-center justify-center px-6 text-center">
      <h1 className="font-serif text-4xl font-semibold text-accent-dark">404</h1>
      <p className="mt-4 text-muted">Page not found</p>
      <Link
        href="/en"
        className="mt-8 rounded-lg bg-accent px-6 py-3 text-sm font-semibold text-white hover:bg-accent-dark"
      >
        Go to homepage
      </Link>
    </div>
  );
}
