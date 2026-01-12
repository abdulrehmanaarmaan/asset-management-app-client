import { motion } from 'framer-motion';
import { Calendar } from 'lucide-react';

const Blog = () => {
    const blogs = [
        {
            id: 1,
            title: 'Why Asset Management Matters for Growing Companies',
            excerpt:
                'Learn how proper asset management reduces cost, improves accountability, and supports scalable growth.',
            date: 'Jan 5, 2026',
        },
        {
            id: 2,
            title: 'HR Best Practices for Managing Company Assets',
            excerpt:
                'Discover how HR teams can streamline asset allocation, tracking, and employee responsibility.',
            date: 'Dec 22, 2025',
        },
        {
            id: 3,
            title: 'Digital Asset Tracking: A Smarter Way Forward',
            excerpt:
                'Manual tracking is outdated. See how digital solutions modernize asset workflows.',
            date: 'Dec 10, 2025',
        },
    ];

    return (
        <div className="w-full overflow-hidden">

            {/* Hero Section */}
            <section className="min-h-[50vh] flex flex-col items-center justify-center text-center px-6 bg-gray-50">
                <motion.h1
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-4xl md:text-6xl font-bold text-gray-900"
                >
                    AssetVerse Blog
                </motion.h1>
                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.3, duration: 0.5 }}
                    className="mt-4 max-w-3xl text-lg text-gray-600"
                >
                    Insights, best practices, and guides on asset management,
                    HR workflows, and modern workplace operations.
                </motion.p>
            </section>

            {/* Blog List Section */}
            <section className="py-20 px-6">
                <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">
                    {blogs.map((blog, index) => (
                        <motion.div
                            key={blog.id}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.15 }}
                            className="p-6 bg-white rounded-xl border border-gray-300 shadow-sm hover:shadow-md transition"
                        >
                            <div className="flex items-center gap-2 text-sm text-gray-500 mb-3">
                                <Calendar className="h-4 w-4" />
                                <span>{blog.date}</span>
                            </div>

                            <h3 className="text-lg font-semibold text-gray-800 mb-2">
                                {blog.title}
                            </h3>

                            <p className="text-gray-600 text-sm">
                                {blog.excerpt}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 px-6 bg-blue-600 text-white text-center">
                <h2 className="text-3xl font-semibold tracking-tight mb-6">
                    Want More Insights?
                </h2>
                <p className="mb-6 max-w-2xl mx-auto">
                    Stay updated with the latest asset management trends and best practices.
                </p>
            </section>

        </div>
    );
};

export default Blog;

