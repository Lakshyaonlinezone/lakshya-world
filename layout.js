import "./globals.css";

export const metadata = {
  title: "Lakshya World",
  description: "Movies, Music and Entertainment"
};

export default function RootLayout({ children }) {
  return (
    <html lang="hi">
      <body>{children}</body>
    </html>
  );
}