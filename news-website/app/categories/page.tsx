// app/categories/page.tsx

// app/categories/page.tsx
export default async function CategoriesPage() {
  const res = await fetch('http://localhost:3001/categories', {
    cache: 'force-cache', // ✅ Ensures static generation at build time
  });

  const categories = await res.json();

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Categories</h1>
      <ul className="space-y-2">
        {categories.map((cat: { slug: string; name: string }) => (
          <li key={cat.slug} className="text-lg text-blue-700">
            {cat.name}
          </li>
        ))}
      </ul>
    </div>
  );
}