
import { MDXRemote, MDXRemoteSerializeResult } from "next-mdx-remote/rsc";

const MDXRemoteClient = ({
  mdxSource,
  components,
}: {
  mdxSource: MDXRemoteSerializeResult;
  components?: any;
}) => <MDXRemote source={mdxSource} options={{scope:mdxSource}} {...mdxSource} components={components} />;

export default MDXRemoteClient;