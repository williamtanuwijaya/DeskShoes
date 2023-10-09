import React from 'react';
import { useRouter } from 'next/router';
import dataBlog from '../dataBlog';

const BlogPost = () => {
  const router = useRouter();
  const { id } = router.query;

  const post = dataBlog.find((post) => String(post.id) === String(id));

  if (!post) {
    return <p>Loading...</p>;
  }

  return (
    <div className="container mx-auto mt-8">
      <div className="bg-white rounded-md shadow-md p-6">
        <h1 className="text-2xl font-bold mb-4">{post.title}</h1>
        <p className="text-gray-700">{post.content}</p>
      </div>
    </div>
  );
};

export default BlogPost;
