import React from "react";
import Header from "../components/layout/Header";

export default function Home() {
  return (
    <div>
      <Header />
      <main className="flex items-center justify-center h-screen bg-gray-100">
        <h1 className="text-4xl font-bold text-gray-800">
          Welcome to the Index Page 🎉
        </h1>
      </main>
    </div>
  );
}