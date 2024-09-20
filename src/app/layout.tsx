import Link from 'next/link';
import './globals.css'; // Tailwind CSSの設定

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ja">
      <head>
        <title>デジタル手紙</title>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>
      <body>
        <div>
          <main>{children}</main>
          <nav className="fixed bottom-0 w-full bg-gray-800 text-white flex justify-around p-3">
            <Link href="/">ホーム</Link>
            <Link href="/write">書く</Link>
            <Link href="/read">読む</Link>
            <Link href="/deliver">届ける</Link>
            <Link href="/friends">友達情報</Link>
          </nav>
        </div>
      </body>
    </html>
  );
}
