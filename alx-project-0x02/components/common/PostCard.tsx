import React from "react";
import { PostProps } from "@/interfaces";

const PostCard: React.FC<PostProps> = ({ title, content, userId }) => {
  return (
    <div className="border rounded-lg shadow p-4 bg-white w-80">
      <h2 className="text-lg font-semibold mb-2">{title}</h2>
      <p className="text-gray-600 mb-2">{content}</p>
      <span className="text-sm text-gray-500">👤 User ID: {userId}</span>
    </div>
  );
};

export default PostCard;