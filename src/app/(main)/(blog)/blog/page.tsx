import Link from "next/link";

// 記事の型定義
type Article = {
  id: string;
  title: string;
  url: string;
  platform: "Qiita" | "Zenn" | "Note";
};

// 記事を取得する関数
async function fetchArticles(): Promise<Article[]> {
  try {
    // Qiita API
    const qiitaRes = await fetch("https://qiita.com/api/v2/users/uyukigakata/items");
    const qiitaData = await qiitaRes.json();
    type QiitaItem = {
      id: string;
      title: string;
      url: string;
    };

    const qiitaArticles: Article[] = qiitaData.map((item: QiitaItem) => ({
      id: item.id,
      title: item.title,
      url: item.url,
      platform: "Qiita",
    }));

    // Zenn API
    const zennRes = await fetch("https://zenn.dev/api/articles?username=uyukigakata");
    const zennData = await zennRes.json();
    type ZennArticle = {
      id: number;
      title: string;
      slug: string;
    };

    const zennArticles: Article[] = zennData.articles.map((item: ZennArticle) => ({
      id: item.id.toString(),
      title: item.title,
      url: `https://zenn.dev/uyukigakata/articles/${item.slug}`,
      platform: "Zenn",
    }));

    // Note は API がないため、手動でURLを指定
    const noteArticles: Article[] = [
      {
        id: "note-1",
        title: "Note の記事はこちら",
        url: "https://note.com/yuu120739",
        platform: "Note",
      },
    ];

    return [...qiitaArticles.slice(0, 5), ...zennArticles.slice(0, 5), ...noteArticles];
  } catch (error) {
    console.error("記事の取得に失敗しました", error);
    return [];
  }
}

// `page.tsx` (Next.js App Router)
export default async function BlogPage() {
  const articles = await fetchArticles();

  return (
    <div className="max-w-3xl mx-auto p-4">
      {/* 🛠 上部に余白を追加（mt-6） */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6 mb-6">
        <Link href="https://qiita.com/uyukigakata" target="_blank">
          <div className="p-4 bg-gray-800 rounded-lg shadow-md text-center hover:bg-gray-700">
            <h2 className="text-lg font-semibold text-white">Qiita</h2>
            <p className="text-gray-400">技術記事を投稿</p>
          </div>
        </Link>

        <Link href="https://zenn.dev/uyukigakata" target="_blank">
          <div className="p-4 bg-gray-800 rounded-lg shadow-md text-center hover:bg-gray-700">
            <h2 className="text-lg font-semibold text-white">Zenn</h2>
            <p className="text-gray-400">知見をシェア</p>
          </div>
        </Link>

        <Link href="https://note.com/yuu120739" target="_blank">
          <div className="p-4 bg-gray-800 rounded-lg shadow-md text-center hover:bg-gray-700">
            <h2 className="text-lg font-semibold text-white">Note</h2>
            <p className="text-gray-400">日々の思考を記録</p>
          </div>
        </Link>
      </div>

      {/* 記事一覧 */}
      <h1 className="text-2xl font-bold mb-4 text-white">最新の記事</h1>
      <ul>
        {articles.map((article) => (
          <li key={article.id} className="mb-3">
            <Link href={article.url} target="_blank">
              <div className="p-3 bg-gray-800 rounded-lg shadow-md hover:bg-gray-700">
                <span className="text-lg font-semibold text-white">{article.title}</span>
                <span className="ml-2 text-sm text-gray-400">({article.platform})</span>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
