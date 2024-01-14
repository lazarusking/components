import Link from "next/link";

export default function Home() {
  //   <Image
  //   className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
  //   src="/next.svg"
  //   alt="Next.js Logo"
  //   width={180}
  //   height={37}
  //   priority
  // />
  return (
    <main className="flex min-h-[80dvh] flex-col items-center justify-center">
      <section className="px-4 py-7 flex flex-col items-center justify-center">
        <div className="max-w-xl space-y-2 mx-auto text-center lg:text-lg">
          <h1 className="text-4xl sm:text-6xl font-bold text-slate-900">
            Components
          </h1>
          <p className="text-gray-600">
            Explore our collection of free, reusable and customizable
            TailwindCSS components that you may find useful.
          </p>
          <p className="text-gray-600">Yup, that's it.</p>
        </div>
        <Link
          className="mt-8 inline-flex items-center justify-center px-6 py-3 text-sm font-medium bg-gray-900 text-white rounded-md hover:bg-gray-800"
          href="/"
        >
          Explore Library
        </Link>
      </section>
    </main>
  );
}
