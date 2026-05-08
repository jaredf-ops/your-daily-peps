import { redirect } from 'next/navigation';

export default function CatalogPage({ searchParams }) {
  const category = searchParams?.category;
  const destination = category ? `/?category=${encodeURIComponent(category)}` : '/';
  redirect(destination);
}
