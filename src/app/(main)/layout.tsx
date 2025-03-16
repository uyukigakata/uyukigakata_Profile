import NavList from "../../components/SideMenu/NavList/NavList"; // ナビゲーションリストをインポート
import NavFooter from "../../components/SideMenu/NavFooter/NavFooter"; // フッターを分離して管理
import Image from "next/image";

const MainLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <div className="flex flex-col min-h-screen bg-gray-900 text-white">
      {/* ヘッダー (ナビゲーションバー) */}
      <header className="fixed top-0 left-0 w-full bg-gray-800 shadow-md z-50 p-4">
        <NavList />
      </header>

      {/* メインコンテンツエリア */}
      <main className="flex-1 pt-16">
        {children}
      </main>

      {/* フッター */}
      <NavFooter />
    </div>
  );
};

export default MainLayout;
