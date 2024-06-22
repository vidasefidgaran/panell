// app/page.jsx
"use client"
import Layout from './dashboard/layout';

export default function Page() {
  return (
    <Layout>
      <div className="p-4">
        <h1 className="text-3xl font-bold">Main Content</h1>
      </div>
    </Layout>
  );
}

