"use client";

import { useState } from "react";
import productData from "@/data/product.json";
import Image from "next/image";

interface Product {
  id: string;
  title: string;
  description: string;
  image: string;
  github: string;
  url: string;
}

const ProductsPage = () => {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [selectedYear, setSelectedYear] = useState<string>("all"); // 年度フィルタ用

  const closePopup = () => setSelectedProduct(null);

  // 年度ごとにフィルタリング
  const filteredProducts =
    selectedYear === "all"
      ? Object.entries(productData)
      : Object.entries(productData).filter(([year]) => year === selectedYear);

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6">制作物一覧</h1>

      {/* 年度フィルター */}
      <div className="mb-6">
        <label className="mr-4 text-lg font-medium">年度で検索:</label>
        <select
          className="border p-2 rounded"
          value={selectedYear}
          onChange={(e) => setSelectedYear(e.target.value)}
        >
          <option value="all">すべて</option>
          {Object.keys(productData).map((year) => (
            <option key={year} value={year}>
              {year}
            </option>
          ))}
        </select>
      </div>

      {/* 制作物一覧 */}
      {filteredProducts.map(([year, projects]) => (
        <div key={year} className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">{year}年</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {projects.map((product: Product) => (
              <div
                key={product.id}
                className="bg-white shadow-md rounded-lg overflow-hidden cursor-pointer transition-transform transform hover:scale-105"
                onClick={() => setSelectedProduct(product)}
              >
                <Image
                  src={product.image}
                  alt={product.title}
                  width={1000}
                  height={250}
                  className="w-full h-48 object-cover"
                  priority
                />
                <div className="p-4">
                  <h3 className="text-xl font-semibold">{product.title}</h3>
                  <p className="text-gray-600 mt-2">{product.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}

      {/* ポップアップ */}
      {selectedProduct && (
        <div
          className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50"
          onClick={closePopup}
        >
          <div
            className="bg-white p-6 rounded-lg shadow-lg max-w-lg w-full relative"
            onClick={(e) => e.stopPropagation()} // モーダル内クリックで閉じない
          >
            <button
              className="absolute top-2 right-2 text-gray-600 text-lg"
              onClick={closePopup}
            >
              ✕
            </button>
            <Image
              src={selectedProduct.image}
              alt={selectedProduct.title}
              width={1000}
              height={250}
              className="w-full max-h-[80vh] object-contain rounded"
            />
            <h2 className="text-2xl font-bold mt-4">{selectedProduct.title}</h2>
            <p className="text-gray-700 mt-2">{selectedProduct.description}</p>
            <div className="mt-4">
              <a
                href={selectedProduct.github}
                target="_blank"
                className="text-blue-500 hover:underline block"
              >
                GitHubページ
              </a>
              <a
                href={selectedProduct.url}
                target="_blank"
                className="text-green-500 hover:underline block mt-2"
              >
                公開URL
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductsPage;
