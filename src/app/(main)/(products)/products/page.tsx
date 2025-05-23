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
  const [selectedYear, setSelectedYear] = useState<string>("all");

  const closePopup = () => setSelectedProduct(null);

  const filteredProducts =
    selectedYear === "all"
      ? Object.entries(productData)
      : Object.entries(productData).filter(([year]) => year === selectedYear);

  return (
    <div className="pt-20 px-4 pb-8 min-h-screen bg-gradient-to-br from-emerald-50 via-teal-50 to-emerald-100">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold mb-8 text-transparent bg-clip-text bg-gradient-to-r from-emerald-700 to-teal-600">
          制作物一覧
        </h1>

        <div className="mb-8 bg-white/80 backdrop-blur-sm p-6 rounded-2xl shadow-lg border border-emerald-100">
          <label className="mr-4 text-lg font-semibold text-emerald-800">年度で検索:</label>
          <select
            className="border-2 border-emerald-200 p-3 rounded-xl text-sm bg-white/90 hover:border-emerald-400 focus:border-emerald-500 focus:ring-4 focus:ring-emerald-200 transition-all duration-200 shadow-sm"
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

        {filteredProducts.map(([year, projects]) => (
          <div key={year} className="mb-10">
            <h2 className="text-2xl font-bold mb-6 text-emerald-800 relative">
              <span className="relative z-10 bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
                {year}年
              </span>
              <div className="absolute bottom-0 left-0 w-16 h-1 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full"></div>
            </h2>
            
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-5">
              {(projects as Product[]).map((product: Product) => (
                <div
                  key={product.id}
                  className="bg-white/90 backdrop-blur-sm shadow-lg rounded-2xl overflow-hidden cursor-pointer transition-all duration-300 transform hover:scale-105 hover:shadow-2xl border border-emerald-100 hover:border-emerald-300 group"
                  onClick={() => setSelectedProduct(product)}
                >
                  <div className="relative w-full aspect-square bg-gradient-to-br from-emerald-50 to-teal-50 group-hover:from-emerald-100 group-hover:to-teal-100 transition-all duration-300">
                    <Image
                      src={product.image}
                      alt={product.title}
                      fill
                      className="object-contain p-3 transition-transform duration-300 group-hover:scale-110"
                      priority={false}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-emerald-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                  <div className="p-4">
                    <h3 className="text-sm font-bold leading-tight mb-2 line-clamp-2 text-emerald-900 group-hover:text-emerald-700 transition-colors duration-200">
                      {product.title}
                    </h3>
                    <p className="text-emerald-700 text-xs leading-tight line-clamp-2 opacity-80">
                      {product.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}

        {selectedProduct && (
          <div
            className="fixed inset-0 flex items-center justify-center bg-black/70 backdrop-blur-sm z-50 p-4"
            onClick={closePopup}
          >
            <div
              className="bg-white/95 backdrop-blur-md p-6 rounded-3xl shadow-2xl max-w-md w-full relative flex flex-col border border-emerald-200"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                className="absolute top-4 right-4 text-emerald-600 hover:text-emerald-800 text-2xl z-10 w-8 h-8 flex items-center justify-center rounded-full hover:bg-emerald-100 transition-all duration-200"
                onClick={closePopup}
              >
                ✕
              </button>
              
              <div className="w-full max-h-80 mb-4 flex justify-center items-center rounded-2xl overflow-hidden bg-gradient-to-br from-emerald-50 to-teal-50">
                <Image
                  src={selectedProduct.image}
                  alt={selectedProduct.title}
                  width={320}
                  height={320}
                  className="max-w-full max-h-full object-contain p-4"
                />
              </div>
              
              <div className="flex-grow overflow-y-auto">
                <h2 className="text-xl font-bold mb-3 text-emerald-800">{selectedProduct.title}</h2>
                <p className="text-emerald-700 text-sm mb-4 leading-relaxed">{selectedProduct.description}</p>
                <div className="space-y-2">
                  <a
                    href={selectedProduct.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-emerald-500 to-teal-500 text-white text-sm font-medium rounded-lg hover:from-emerald-600 hover:to-teal-600 transition-all duration-200 shadow-md hover:shadow-lg"
                  >
                    GitHub で見る
                  </a>
                  <a
                    href={selectedProduct.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-teal-500 to-emerald-500 text-white text-sm font-medium rounded-lg hover:from-teal-600 hover:to-emerald-600 transition-all duration-200 shadow-md hover:shadow-lg ml-2"
                  >
                    ライブ デモ
                  </a>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductsPage;