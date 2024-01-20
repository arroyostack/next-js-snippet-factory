import { db } from "@/db";

export default async function Home() {
  // Arrays of objects
  const snippets = await db.snippet.findMany();

  const renderedSnippets = snippets.map( snippet => {
    return (
      <div key={ snippet.id }>
        { snippet.title }
      </div>
    );
  } );

  return (
    <div>
      <h2>HomePage</h2>
      <div>{ renderedSnippets }</div>
    </div>
  );
}
