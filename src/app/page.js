import { sql } from "@vercel/postgres";
import { Yesteryear } from "next/font/google";

export default async function Home() {
  "use client";
  const posts = await sql`
    SELECT * FROM posts;
  `;
  console.log(posts.rows);
  return (
    <main className="b">
      <h1 className="font-bold text-6xl">Dunno</h1>
      <h3>List of dunnos:</h3>
      <ul>
        {posts.rows.map((post) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    </main>
  );
}

