import Link from "next/link";

type Article = {
  id: string;
  title: string;
  url: string;
  platform: "Qiita" | "Zenn" | "Note";
};

async function fetchArticles(): Promise<Article[]> {
  try {
    // API呼び出し処理は元のまま
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

export default async function BlogPage() {
  const articles = await fetchArticles();

  const platformColors = {
    Qiita: "from-green-500 to-emerald-500",
    Zenn: "from-blue-500 to-teal-500", 
    Note: "from-purple-500 to-emerald-500"
  };

  return (
    <div className="max-w-6xl mx-auto px-6 py-12">
      {/* プラットフォーム紹介 */}
      <div className="grid md:grid-cols-3 gap-8 mb-12">
        <div className="glass-card rounded-2xl p-6 text-center shadow-lg animate-card-appear">
          <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center">
            <span className="text-white font-bold text-xl">Q</span>
          </div>
          <h3 className="text-xl font-bold text-emerald-800 mb-2">Qiita</h3>
          <p className="text-emerald-600">技術記事を投稿</p>
        </div>

        <div className="glass-card rounded-2xl p-6 text-center shadow-lg animate-card-appear" style={{animationDelay: '200ms'}}>
          <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-blue-500 to-teal-500 rounded-full flex items-center justify-center">
            <span className="text-white font-bold text-xl">Z</span>
          </div>
          <h3 className="text-xl font-bold text-emerald-800 mb-2">Zenn</h3>
          <p className="text-emerald-600">知見をシェア</p>
        </div>

        <div className="glass-card rounded-2xl p-6 text-center shadow-lg animate-card-appear" style={{animationDelay: '400ms'}}>
          <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-purple-500 to-emerald-500 rounded-full flex items-center justify-center">
            <span className="text-white font-bold text-xl">N</span>
          </div>
          <h3 className="text-xl font-bold text-emerald-800 mb-2">Note</h3>
          <p className="text-emerald-600">日々の思考を記録</p>
        </div>
      </div>

      {/* 記事一覧 */}
      <h2 className="text-3xl font-bold mb-8 gradient-text text-center animate-fade-in-up">
        最新の記事
      </h2>

      <div className="grid gap-4">
        {articles.map((article, index) => (
          <Link
            key={article.id}
            href={article.url}
            target="_blank"
            rel="noopener noreferrer"
            className="glass-card rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-102 animate-card-appear group"
            style={{ animationDelay: `${index * 100}ms` }}
          >
            <div className="flex items-center justify-between">
              <div className="flex-1">
                <h3 className="text-lg font-semibold text-emerald-800 group-hover:text-emerald-600 transition-colors">
                  {article.title}
                </h3>
              </div>
              <div className={`px-3 py-1 rounded-full text-white text-sm font-medium bg-gradient-to-r ${platformColors[article.platform]} ml-4`}>
                {article.platform}
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}