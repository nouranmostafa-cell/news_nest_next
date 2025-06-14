// app/categories/[slug]/page.tsx

import { notFound, redirect } from 'next/navigation';

export async function generateStaticParams() {
  return []; 
}

export const dynamic = 'force-dynamic';

export default async function CategoryPage({ params }: { params: { slug: string } }) {
  const { slug } = params;

  if (slug === 'climate') {
    redirect('/categories/weather');
  }

  const res = await fetch('http://localhost:3001/categories', { cache: 'no-store' });
  const categories = await res.json();

  const category = categories.find((cat: any) => cat.slug === slug);

  if (!category) {
    notFound();
  }

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold">Category: {category.name}</h1>
      <p>This is the {category.name} category page.</p>
    </div>
  );
}
