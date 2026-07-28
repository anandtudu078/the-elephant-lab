"use client";
import { MDXRemote, MDXRemoteSerializeResult } from "next-mdx-remote";
import Link from "next/link";

const components = {
  h1: (props: any) => <h1 className="text-3xl font-bold mt-10 mb-4" {...props} />,
  h2: (props: any) => <h2 className="text-2xl font-bold mt-8 mb-3" {...props} />,
  h3: (props: any) => <h3 className="text-xl font-semibold mt-6 mb-2" {...props} />,
  p: (props: any) => <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4" {...props} />,
  a: (props: any) => {
    const href = props.href;
    if (href?.startsWith("/")) return <Link href={href} className="text-lab-accent underline" {...props} />;
    return <a className="text-lab-accent underline" target="_blank" rel="noopener noreferrer" {...props} />;
  },
  ul: (props: any) => <ul className="list-disc list-inside space-y-1 mb-4" {...props} />,
  ol: (props: any) => <ol className="list-decimal list-inside space-y-1 mb-4" {...props} />,
  li: (props: any) => <li className="text-gray-700 dark:text-gray-300" {...props} />,
  blockquote: (props: any) => <blockquote className="border-l-4 border-lab-accent pl-4 italic text-gray-600 dark:text-gray-400 my-4" {...props} />,
  code: (props: any) => <code className="bg-gray-100 dark:bg-gray-800 px-1.5 py-0.5 rounded text-sm" {...props} />,
  pre: (props: any) => <pre className="bg-gray-100 dark:bg-gray-800 p-4 rounded-xl overflow-x-auto my-4" {...props} />,
  img: (props: any) => <img className="rounded-xl my-4 max-w-full" alt={props.alt || ""} {...props} />,
};

export default function MdxContent({ source }: { source: MDXRemoteSerializeResult }) {
  return (
    <div className="prose-custom">
      <MDXRemote {...source} components={components} />
    </div>
  );
}