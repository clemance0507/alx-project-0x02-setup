import React from "react";
import Card from "../components/common/Card";
import Header from "../components/layout/Header";

export default function HomePage() {
  return (
    <div>
      <Header />
      <main className="flex flex-col items-center justify-center min-h-screen bg-green-100 p-4">
        <h1 className="text-4xl font-bold text-green-800 mb-8">Home Page 🏠</h1>

        <div className="flex flex-wrap justify-center">
          <Card title="Card 1" content="This is the content for Card 1." />
          <Card title="Card 2" content="This is the content for Card 2." />
          <Card title="Card 3" content="This is the content for Card 3." />
        </div>
      </main>
    </div>
  );
}