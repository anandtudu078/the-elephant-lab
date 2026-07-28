import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { getAllPosts } from "@/lib/blog";
import Link from "next/link";

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <main>
      <Navbar />
      <section className="pt-24 pb-16 px-6">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Blog</h1>
          <p className="text-gray-600 dark:text-gray-400 text-lg mb-12">
            Thoughts on AI, memory, and building the future.
          </p>

          {posts.length === 0 ? (
            <p className="text-gray-500">No posts yet. Check back soon.</p>
          ) : (
            <div className="space-y-8">
              {posts.map((post) => (
                <Link
                  key={post.slug}
                  href={`/blog/${post.slug}`}
                  className="block group p-6 bg-white dark:bg-gray-900 border border-gray-100 dark:border-gray-800 rounded-3xl shadow-lg hover:shadow-xl hover:border-lab-accent/30 transition-all"
                >
                  <div className="flex items-center gap-3 text-sm text-gray-400 mb-2">
                    <span>{post.date}</span>
                    <span>·</span>
                    <span>{post.author}</span>
                  </div>
                  <h2 className="text-2xl font-bold group-hover:text-lab-accent transition-colors mb-2">
                    {post.title}
                  </h2>
                  <p className="text-gray-500 dark:text-gray-400">{post.excerpt}</p>
                  <span className="text-sm text-lab-accent mt-4 inline-block">
                    Read more →
                  </span>
                </Link>
              ))}
            </div>
          )}
        </div>
      </section>
      <Footer />
    </main>
  );
}