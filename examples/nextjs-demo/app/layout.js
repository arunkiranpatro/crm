import "digital-crm/styles.css";

export const metadata = {
  title: "Digital CRM – Next.js Demo",
  description: "digital-crm library wired into a Next.js App Router project",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
