import React, { useState } from "react";
import Header from "@/components/layout/Header";
import PostModal from "@/components/common/PostModal";
import Card from "@/components/common/Card";

export default function PostsPage() {
  const [posts, setPosts] = useState<{ title: string; content: string }[]>([]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleAddPost = (newPost: { title: string; content: string }) => {
    setPosts([...posts, newPost]);
    setIsModalOpen(false);
  };

  return (
    <div>
      <Header />
      <main className="flex flex-col items-center justify-center min-h-screen bg-purple-100 p-4">
        <h1 className="text-4xl font-bold text-purple-800 mb-8">Posts Page 📝</h1>

        <button
          onClick={() => setIsModalOpen(true)}
          className="bg-purple-600 text-white px-4 py-2 rounded hover:bg-purple-700 transition"
        >
          Add New Post
        </button>

        <div className="mt-8 flex flex-wrap justify-center">
          {posts.map((post, index) => (
            <Card key={index} title={post.title} content={post.content} />
          ))}
        </div>
      </main>

      <PostModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSave={handleAddPost}
      />
    </div>
  );
}