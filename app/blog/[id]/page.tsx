import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { getBlogById, getRelatedBlogs } from '../../lib/api';

type Props = {
  params: Promise<{ id: string }>
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  try {
    const resolvedParams = await params;
    const blog = await getBlogById(resolvedParams.id);
    
    if (!blog) {
      return {
        title: 'مقاله پیدا نشد - کافه قهوه فارسی',
        description: 'مقاله مورد نظر پیدا نشد.',
      };
    }
    
    return {
      title: `${blog.title} - کافه قهوه فارسی`,
      description: blog.description || `مطالعه مقاله ${blog.title} در وبلاگ کافه قهوه فارسی. آخرین مطالب و اخبار دنیای قهوه.`,
      keywords: [blog.title, "وبلاگ قهوه", "مقاله قهوه", "کافه قهوه فارسی", "اخبار قهوه"],
      openGraph: {
        title: `${blog.title} - کافه قهوه فارسی`,
        description: blog.description || `مطالعه مقاله ${blog.title} در وبلاگ کافه قهوه فارسی`,
        type: 'article',
        publishedTime: blog.date,
        images: blog.image ? [
          {
            url: blog.image,
            width: 800,
            height: 600,
            alt: blog.title,
          }
        ] : [],
      },
      twitter: {
        card: 'summary_large_image',
        title: `${blog.title} - کافه قهوه فارسی`,
        description: blog.description || `مطالعه مقاله ${blog.title} در وبلاگ کافه قهوه فارسی`,        images: blog.image ? [blog.image] : [],
      }
    };
  } catch {
    return {
      title: 'مقاله پیدا نشد - کافه قهوه فارسی',
      description: 'مقاله مورد نظر پیدا نشد.',
    };
  }
}

export default async function BlogDetailPage({ params }: Props) {
  const resolvedParams = await params;
  const blogId = resolvedParams.id;
  
  try {
    const [blog, relatedBlogs] = await Promise.all([
      getBlogById(blogId),
      getRelatedBlogs(blogId)
    ]);

    if (!blog) {
      notFound();
    }    return (
      <main className="bg-[#151515] min-h-screen font-yekan">
        <Header />
        
        {/* Breadcrumb */}
        <div className="container mx-auto px-4 py-4">
          <nav className="text-sm text-gray-400">
            <Link href="/" className="hover:text-[#00C16A]">خانه</Link>
            <span className="mx-2">/</span>
            <Link href="/blog" className="hover:text-[#00C16A]">بلاگ</Link>
            <span className="mx-2">/</span>
            <span className="text-white">{blog.title}</span>
          </nav>
        </div>

        {/* Blog Hero */}
        <section className="container mx-auto px-4 py-8">
          <div className="max-w-4xl mx-auto">
            <div className="mb-6">
              <Image
                src={blog.image}
                alt={blog.title}
                width={800}
                height={400}
                className="w-full h-96 object-cover rounded-lg"
              />
            </div>
            
            <div className="text-right">
              <div className="flex items-center gap-4 mb-4 text-gray-400 text-sm">
                <span>{blog.date}</span>
                <span>•</span>
                <span>{blog.category}</span>
              </div>
              
              <h1 className="text-4xl font-bold text-white mb-6 font-morabba leading-relaxed">
                {blog.title}
              </h1>
              
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                {blog.description}
              </p>
            </div>
          </div>
        </section>

        {/* Blog Content */}
        <section className="container mx-auto px-4 pb-12">
          <div className="max-w-4xl mx-auto">
            <article className="prose prose-lg prose-invert max-w-none text-right">
              <div className="text-gray-300 leading-loose space-y-6">
                <p>
                  {blog.description}
                </p>
                <p>
                  برای اطلاعات بیشتر در مورد این موضوع، لطفاً با ما در تماس باشید یا دیگر مقالات وبلاگ ما را مطالعه کنید.
                </p>
              </div>
            </article>
          </div>
        </section>

        {/* Related Blogs */}
        {relatedBlogs.length > 0 && (
          <section className="container mx-auto px-4 py-12 border-t border-gray-700">
            <h2 className="text-2xl font-bold text-white mb-8 text-center font-morabba">
              مقالات مرتبط
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {relatedBlogs.map((relatedBlog) => (
                <Link key={relatedBlog.id} href={`/blog/${relatedBlog.id}`}>
                  <article className="bg-[#1a1a1a] rounded-lg overflow-hidden hover:bg-[#252525] transition-colors group">
                    <div className="relative overflow-hidden">
                      <Image
                        src={relatedBlog.image}
                        alt={relatedBlog.title}
                        width={400}
                        height={250}
                        className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <div className="p-6 text-right">
                      <div className="text-sm text-gray-400 mb-2">
                        {relatedBlog.date} • {relatedBlog.category}
                      </div>
                      <h3 className="text-lg font-semibold text-white mb-3 line-clamp-2">
                        {relatedBlog.title}
                      </h3>
                      <p className="text-gray-300 text-sm line-clamp-2">
                        {relatedBlog.description}
                      </p>
                    </div>
                  </article>
                </Link>
              ))}
            </div>
          </section>
        )}        <Footer />
      </main>
    );
  } catch {
    console.error('Error fetching blog:');
    notFound();
  }
}
