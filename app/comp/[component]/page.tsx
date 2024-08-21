import { promises } from "fs";
import matter from "gray-matter";
import { notFound } from "next/navigation";
import { join } from "path";
import { serialize } from "next-mdx-remote/serialize";
import { compileMDX, MDXRemote } from 'next-mdx-remote/rsc'
import dynamic from "next/dynamic";
import Card from "@/components/card.mdx";
import MDXRemoteClient from "../../../components/MDXRemoteClient";
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
    const mdxSource = await serialize(content);
    return { componentFile, data, content, mdxSource };
  } catch (error) {
    notFound();
  }
}
export default async function Page({
  params,
}: {
  params: { component: string };
}) {
  const { data, content, mdxSource, componentFile } = await getComponent(params.component);
  console.log(data);
  const Component = dynamic(() => import(`../../../src/components/${params.component}.mdx`));
  const { content: CE, frontmatter, } = await compileMDX<{ title: string }>({
    source: componentFile,
    options: { parseFrontmatter: true },
  });

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
      <MDXRemote
        {...mdxSource}
        source={mdxSource}
        components={{
          // h1: (props) => <h1 style={{ color: "tomato" }} {...props} />,
          // h2: (props) => <h2 style={{ color: "rebeccapurple" }} {...props} />,
          // p: (props) => <p style={{ color: "blue" }} {...props} />,
          // a: (props) => <a style={{ color: "blue" }} {...props} />,
          // Image,
          // TestComponent,
        }}

      />
      <MDXRemote {...mdxSource} source={componentFile} components={{
        Component, code(props) {
          return <pre style={{ color: 'goldenrod' }}>
            <code {...props} />
          </pre>
        },
      }} />
      {/* <>{CE}</> */}
      <article className="prose prose-invert max-w-7xl">
        <MDXRemoteClient
          mdxSource={{ ...mdxSource }}
          components={{
            Component,
            code(props) {
              return <code style={{ color: 'goldenrod' }} {...props} />
            },
          }}
        />
      </article>
      {/* <Component /> */}
    </>
  );
}
