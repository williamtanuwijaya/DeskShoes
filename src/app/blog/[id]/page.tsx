'use client';
import React, { useState, useEffect } from 'react';
import dataBlog from '../../dataBlog';

interface Comment {
  id: number;
  text: string;
  timestamp: string;
}
const BlogPost = ({ params }) => {
  const post = dataBlog.find((post) => String(post.id) === params.id);
  const [comment, setComment] = useState('');
  const [comments, setComments] = useState<Comment[]>([]);

  useEffect(() => {
    const storedComments = localStorage.getItem(`comments_${params.id}`);
    if (storedComments) {
      setComments(JSON.parse(storedComments));
    }
  }, [params.id]);

  const getCurrentDateTime = () => {
    const now = new Date();
    const dateTimeString = `${now.toLocaleDateString()} ${now.toLocaleTimeString()}`;
    return dateTimeString;
  };

  const handleCommentChange = (e) => {
    setComment(e.target.value);
  };

  const handleCommentSubmit = (e) => {
    e.preventDefault();
    if (comment.trim() === '') {
      return;
    }

    const newComment = {
      id: Date.now(),
      text: comment,
      timestamp: getCurrentDateTime(),
    };
    // Update comments state
    // setComments((prevComments) => [...prevComments, newComment]);
    setComments((prevComments) => [...prevComments, newComment]);

    // Save comments to local storage
    localStorage.setItem(`comments_${params.id}`, JSON.stringify([...comments, newComment]));

    // Clear comment input
    setComment('');
  };

  if (!post) {
    return <p>Loading...</p>;
  }

  return (
    <div className="container mx-auto mt-8">
      <div className="bg-white rounded-md shadow-md p-6">
        <h1 className="text-2xl font-bold mb-4">{post.title}</h1>
        <p className="text-gray-700">{post.content}</p>
      </div>
      <div className="container mx-auto mt-8">
        <form onSubmit={handleCommentSubmit}>
          <h1 className="text-xl font-bold mb-4">Komentar</h1>
          <textarea name="komentar" id="komentar" value={comment} onChange={handleCommentChange} className="border border-gray-300 p-2 mb-4 w-full h-24" />
          <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">
            Kirim
          </button>
        </form>
        <div className="mt-8">
          <h2 className="text-xl font-bold mb-4">Daftar Komentar</h2>
          {comments.map((comment) => (
            <div key={comment.id} className="bg-white rounded-md shadow-md p-4 mb-4">
              <p>{comment.text}</p>
              <p className="text-gray-500 text-sm">{comment.timestamp}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BlogPost;
