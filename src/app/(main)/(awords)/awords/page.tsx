import React from "react";
import data from "@/data/awords.json";

type ListSectionProps = {
  title: string;
  items: string[];
};

const ListSection: React.FC<ListSectionProps> = ({ title, items }) => (
  <section className="mb-6">
    <h2 className="text-lg font-bold mb-2">{title}</h2>
    <div className="flex flex-wrap gap-2">
      {items.map((item, index) => (
        <span
          key={index}
          className="bg-gray-800 text-white px-3 py-1 rounded-full text-sm"
        >
          {item}
        </span>
      ))}
    </div>
  </section>
);

const AwordsPage: React.FC = () => {
  const { 資格: certifications, "認定・賞": awards } = data;

  return (
    <div className="bg-gray-900 text-white p-6 rounded-lg w-full max-w-md mx-auto">
      <h1 className="text-xl font-bold mb-4">資格と賞状</h1>
      <ListSection title="資格" items={certifications} />
      <ListSection title="賞状" items={awards} />
    </div>
  );
};

export default AwordsPage;
