import { promises } from "fs";
import matter from "gray-matter";
import { notFound } from "next/navigation";
import { join } from "path";

export async function generateStaticParams() {
  const componentDirectory = join(process.cwd(), "src/components");
  const mdxFiles = await promises.readdir(componentDirectory);
  const components = mdxFiles.map((filename) => {
    // const filepath = join(componentDirectory, filename);
    // const fileContents = await promises.readFile(filepath, "utf8");
    return filename;
  });
  console.log(components);

  return components.map((component) => ({
    component: component.replace(/\.mdx$/, ""),
    // replace(".mdx", ""),
  }));
  //   return posts.map((post) => ({
  //     component: post.slug,
  //   }));
}
async function getComponent(params: string) {
  try {
    const componentDirectory = join(process.cwd(), "src/components");
    const componentPath = join(componentDirectory, `${params}.mdx`);
    // const mdxFiles = await promises.readdir(componentDirectory);
    const componentFile = await promises.readFile(componentPath, "utf-8");
    const { data, content } = matter(componentFile);
    return { data, content };
  } catch (error) {
    notFound();
  }
}
export default async function Page({
  params,
}: {
  params: { component: string };
}) {
  const { data } = await getComponent(params.component);
  console.log(data);

  return (
    <>
      <section className="bg-white text-center">
        <div className={`mx-auto max-w-screen-xl px-4`}>
          <div className="flex flex-col space-y-4 space-y-reverse">
            <h1 className="order-last text-lg text-gray-700">
              {data.subtitle}
            </h1>

            <h2 className="text-5xl font-bold text-gray-900 sm:text-6xl">
              {data.title}
            </h2>
          </div>

          <p className="mx-auto mt-6 max-w-lg text-base/relaxed text-gray-600">
            {data.seo.description}
          </p>
        </div>
      </section>
      <h1>{params.component}</h1>
    </>
  );
}
