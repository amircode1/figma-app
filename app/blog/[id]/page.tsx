import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { getBlogById, getRelatedBlogs } from "../../lib/api";

type Props = {
  params: Promise<{ id: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  try {
    const resolvedParams = await params;
    const blog = await getBlogById(resolvedParams.id);

    if (!blog) {
      return {
        title: "مقاله پیدا نشد - کافه قهوه فارسی",
        description: "مقاله مورد نظر پیدا نشد.",
      };
    }

    return {
      title: `${blog.title} - کافه قهوه فارسی`,
      description:
        blog.description ||
        `مطالعه مقاله ${blog.title} در وبلاگ کافه قهوه فارسی. آخرین مطالب و اخبار دنیای قهوه.`,
      keywords: [
        blog.title,
        "وبلاگ قهوه",
        "مقاله قهوه",
        "کافه قهوه فارسی",
        "اخبار قهوه",
      ],
      openGraph: {
        title: `${blog.title} - کافه قهوه فارسی`,
        description:
          blog.description ||
          `مطالعه مقاله ${blog.title} در وبلاگ کافه قهوه فارسی`,
        type: "article",
        publishedTime: blog.date,
        images: blog.image
          ? [
              {
                url: blog.image,
                width: 800,
                height: 600,
                alt: blog.title,
              },
            ]
          : [],
      },
      twitter: {
        card: "summary_large_image",
        title: `${blog.title} - کافه قهوه فارسی`,
        description:
          blog.description ||
          `مطالعه مقاله ${blog.title} در وبلاگ کافه قهوه فارسی`,
        images: blog.image ? [blog.image] : [],
      },
    };
  } catch {
    return {
      title: "مقاله پیدا نشد - کافه قهوه فارسی",
      description: "مقاله مورد نظر پیدا نشد.",
    };
  }
}

export default async function BlogDetailPage({ params }: Props) {
  const resolvedParams = await params;
  const blogId = resolvedParams.id;

  try {
    const [blog, relatedBlogs] = await Promise.all([
      getBlogById(blogId),
      getRelatedBlogs(blogId),
    ]);

    if (!blog) {
      notFound();
    }
    return (
      <main className="bg-[#151515] min-h-screen font-yekan">
        <Header />
        {/* Breadcrumb */}
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-4 pt-24 lg:pt-28">
          <nav className="text-xs sm:text-sm text-gray-400">
            <Link href="/" className="hover:text-[#00C16A] transition-colors">
              خانه
            </Link>
            <span className="mx-2">/</span>
            <Link
              href="/blog"
              className="hover:text-[#00C16A] transition-colors"
            >
              بلاگ
            </Link>
            <span className="mx-2">/</span>
            <span className="text-white truncate">{blog.title}</span>
          </nav>
        </div>
        {/* Blog Hero */}
        <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-6 lg:py-8">
          <div className="max-w-4xl mx-auto">
            <div className="mb-4 sm:mb-6">
              <Image
                src={blog.image}
                alt={blog.title}
                width={800}
                height={400}
                className="w-full h-48 sm:h-64 md:h-80 lg:h-96 object-cover rounded-lg"
              />
            </div>

            <div className="text-right">
              <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 mb-4 text-gray-400 text-xs sm:text-sm">
                <span>{blog.date}</span>
                <span className="hidden sm:inline">•</span>
                <span>{blog.category}</span>
              </div>

              <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-4 sm:mb-6 font-morabba leading-tight sm:leading-relaxed">
                {blog.title}
              </h1>

              <p className="text-base sm:text-lg lg:text-xl text-gray-300 mb-6 sm:mb-8 leading-relaxed">
                {blog.description}
              </p>
            </div>
          </div>
        </section>{" "}
        {/* Blog Content */}
        <section className="container mx-auto px-4 sm:px-6 lg:px-8 pb-8 sm:pb-12">
          <div className="max-w-4xl mx-auto">
            <article className="prose prose-base sm:prose-lg prose-invert max-w-none text-right">
              <div className="text-gray-300 leading-relaxed sm:leading-loose space-y-4 sm:space-y-6 text-sm sm:text-base">
                <p>{blog.description}</p>
                <p>
                  برای اطلاعات بیشتر در مورد این موضوع، لطفاً با ما در تماس
                  باشید یا دیگر مقالات وبلاگ ما را مطالعه کنید.
                </p>
              </div>
            </article>
          </div>
        </section>
        {/* Related Blogs */}
        {relatedBlogs.length > 0 && (
          <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 border-t border-gray-700">
            <h2 className="text-xl sm:text-2xl font-bold text-white mb-6 sm:mb-8 text-center font-morabba">
              مقالات مرتبط
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 max-w-6xl mx-auto">
              {relatedBlogs.map((relatedBlog) => (
                <Link key={relatedBlog.id} href={`/blog/${relatedBlog.id}`}>
                  <article className="bg-[#1a1a1a] rounded-lg overflow-hidden hover:bg-[#252525] transition-colors group touch-manipulation">
                    <div className="relative overflow-hidden">
                      <Image
                        src={relatedBlog.image}
                        alt={relatedBlog.title}
                        width={400}
                        height={250}
                        className="w-full h-40 sm:h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <div className="p-4 sm:p-6 text-right">
                      <div className="text-xs sm:text-sm text-gray-400 mb-2">
                        {relatedBlog.date} • {relatedBlog.category}
                      </div>
                      <h3 className="text-base sm:text-lg font-semibold text-white mb-2 sm:mb-3 line-clamp-2">
                        {relatedBlog.title}
                      </h3>
                      <p className="text-gray-300 text-xs sm:text-sm line-clamp-2">
                        {relatedBlog.description}
                      </p>
                    </div>
                  </article>
                </Link>
              ))}
            </div>
          </section>
        )}
        <Footer />
      </main>
    );
  } catch {
    console.error("Error fetching blog:");
    notFound();
  }
}
