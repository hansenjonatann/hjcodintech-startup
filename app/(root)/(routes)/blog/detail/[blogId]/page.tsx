"use client";
import axios from "axios";
import Image from "next/image";
import { useEffect, useState } from "react";

const BlogDetailPage = ({ params }: { params: { blogId: string } }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [image, setImage] = useState("");
  const [createdAt, setCreatedAt] = useState("");
  const fetchDetailBlog = async () => {
    const res = await axios.get(
      `${process.env.NEXT_PUBLIC_API_BASE_URL}/blog/${params.blogId}`
    );

    if (res) {
      setImage(res.data.data.image);
      setTitle(res.data.data.title);
      setDescription(res.data.data.description);
      setCreatedAt(res.data.data.createdAt);
      setCategory(res.data.data.category.name);
    }
  };

  function formatDate(dateString: any) {
    const options: any = { year: "numeric", month: "long", day: "numeric" };
    return new Date(dateString).toLocaleDateString(undefined, options);
  }

  useEffect(() => {
    fetchDetailBlog();
  }, [params.blogId]);

  return (
    <>
      <div className="m-4">
        <div className="w-full">
          <div className="flex-col">
            <Image src={image} alt={title} width={2000} height={600} />

            <div className="flex-col mt-5">
              <div className="flex items-center  justify-between">
                <h1 className=" text-3xl font-bold">{title}</h1>
                <div className="bg-blue-600 text-white py-2 px-2 text-center">
                  {category}
                </div>
              </div>
              <div className="mt-2 ">
                Ditulis Oleh : <span className="font-bold">HJ Codin Tech</span>
              </div>
              <small>{formatDate(createdAt)}</small>
            </div>

            <div
              className="mt-8  border border-white  p-4"
              dangerouslySetInnerHTML={{ __html: description }}
            ></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BlogDetailPage;
