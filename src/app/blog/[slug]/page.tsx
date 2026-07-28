import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { getPostBySlug, getAllPosts } from "@/lib/blog";
import { notFound } from "next/navigation";
import MdxContent from "@/components/MdxContent";

export async function generateStaticParams() {
  const posts = getAllPosts();
  return posts.map((post) => ({ slug: post.slug }));
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) notFound();

  return (
    <main>
      <Navbar />
      <article className="pt-24 pb-16 px-6">
        <div className="max-w-3xl mx-auto">
          <div className="mb-8">
            <div className="flex items-center gap-3 text-sm text-gray-400 mb-2">
              <span>{post.date}</span>
              <span>·</span>
              <span>{post.author}</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold">{post.title}</h1>
            {post.excerpt && (
              <p className="text-gray-500 dark:text-gray-400 mt-4 text-lg">{post.excerpt}</p>
            )}
          </div>

          <MdxContent source={{ compiledSource: "", renderedOutput: "" }} />
          {/* Note: need to actually pass the MDX source properly. Let's fix that. */}
        </div>
      </article>
      <Footer />
    </main>
  );
}