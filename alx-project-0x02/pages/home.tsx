import React, { useState } from "react";
import Card from "@/components/common/Card";
import Header from "../components/layout/Header";
import PostModal from "@/components/common/PostModal"; 

interface Post {
  title: string;
  content: string;
}

export default function HomePage() {
  const [posts, setPosts] = useState<Post[]>([]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleAddPost = (title: string, content: string) => {
    setPosts((prev) => [...prev, { title, content }]);
  };

  return (
    <div>
      <Header />
      <main className="flex flex-col items-center justify-center min-h-screen bg-green-100 p-4">
        <h1 className="text-4xl font-bold text-green-800 mb-8">Home Page 🏠</h1>

        {/* Button to open modal */}
        <button
          onClick={() => setIsModalOpen(true)}
          className="mb-6 px-4 py-2 bg-green-600 text-white rounded"
        >
          ➕ Add Post
        </button>

        <div className="flex flex-wrap justify-center gap-4">
          {/* Existing static cards */}
          <Card title="Card 1" content="This is the content for Card 1." />
          <Card title="Card 2" content="This is the content for Card 2." />
          <Card title="Card 3" content="This is the content for Card 3." />

          {/* Dynamically added posts */}
          {posts.map((post, index) => (
            <Card key={index} title={post.title} content={post.content} />
          ))}
        </div>
      </main>

      {/* Modal Component */}
      <PostModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSubmit={handleAddPost}
      />
    </div>
  );
}


