"use client";
import axios from "axios";
import Link from "next/link";
import { useEffect, useState } from "react";

const BlogPage = () => {
  const [blogs, setBlogs] = useState([]);

  const fetchBlogs = async () => {
    const res = await axios.get(
      `${process.env.NEXT_PUBLIC_API_BASE_URL}/blogs`
    );

    if (res) {
      setBlogs(res.data.data);
    }
  };

  function formatDate(dateString: any) {
    const options: any = { year: "numeric", month: "long", day: "numeric" };
    return new Date(dateString).toLocaleDateString(undefined, options);
  }

  useEffect(() => {
    fetchBlogs();
  }, []);
  return (
    <>
      <div className="p-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {blogs.map((blog: any, index) => (
            <Link key={index} href={`/blog/detail/${blog.id}`}>
              <article className="overflow-hidden rounded-lg shadow transition hover:shadow-lg dark:shadow-gray-700/25">
                <img
                  alt={blog.title}
                  src={blog.image}
                  className="h-56 w-full object-cover"
                />

                <div className="bg-white p-4 sm:p-6 dark:bg-gray-900">
                  <time className="block text-xs text-gray-500 dark:text-gray-400">
                    {formatDate(blog.createdAt)}
                  </time>

                  <a href="#">
                    <h3 className="mt-0.5 text-lg text-gray-900 dark:text-white">
                      {blog.title}
                    </h3>
                  </a>

                  <div className="flex items-center justify-between">
                    <p className="mt-2 bg-blue-800 px-2 py-2 text-center line-clamp-3 text-sm/relaxed text-white rounded-md">
                      {blog.category.name}
                    </p>
                    <p className="mt-2 line-clamp-3 text-sm/relaxed text-gray-500 dark:text-gray-400">
                      HJ Codin Tech
                    </p>
                  </div>
                </div>
              </article>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
};

export default BlogPage;
