import Link from "next/link";

export default function Home() {
  return (
    <main style={{ padding: "2rem", fontFamily: "sans-serif" }}>
      <h1>Next.js + digital-crm</h1>
      <p>
        <Link href="/crm-demo">View the CRM component demo &rarr;</Link>
      </p>
    </main>
  );
}
