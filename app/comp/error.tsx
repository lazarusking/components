"use client"; // Error components must be Client Components

import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  const router = useRouter();
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <main>
      <div className="max-w-screen-xl mx-auto px-4 flex items-center justify-start h-screen md:px-8">
        <section className="py-20 max-w-screen-xl mx-auto px-4 flex items-center justify-start h-screen md:px-8">
          <div className="container px-4 mx-auto text-center">
            <span className="text-4xl text-blue-600 font-bold font-heading">
              Whoops!
            </span>
            <h2 className="mb-2 text-4xl font-bold font-heading">
              Something went wrong!
            </h2>
            <p className="mb-6">Sorry, but we are unable to open this page.</p>
            <div>
              <a
                className="block sm:inline-block py-4 px-8 mb-4 sm:mb-0 sm:mr-3 text-xs text-white text-center font-semibold leading-none bg-blue-600 hover:bg-blue-700 rounded"
                onClick={() => router.back()}
              >
                Go back to Homepage
              </a>
              <button
                className="block sm:inline-block py-4 px-8 text-xs text-center font-semibold leading-none rounded active:ring-1"
                onClick={() => reset()}
              >
                Try Again
              </button>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
