import React from "react";
import data from "@/data/awords.json";

type ListSectionProps = {
  title: string;
  items: string[];
};

const ListSection: React.FC<ListSectionProps> = ({ title, items }) => (
  <div className="glass-card rounded-2xl p-8 shadow-lg animate-card-appear">
    <h2 className="text-2xl font-bold mb-6 text-emerald-800 border-l-4 border-emerald-500 pl-4">
      {title}
    </h2>
    
    <div className="space-y-3">
      {items.map((item, index) => (
        <div
          key={index}
          className="bg-gradient-to-r from-emerald-50 to-teal-50 hover:from-emerald-100 hover:to-teal-100 p-4 rounded-xl border border-emerald-200 transition-all duration-200 hover:shadow-md"
        >
          <p className="text-emerald-800 font-medium">{item}</p>
        </div>
      ))}
    </div>
  </div>
);

const AwordsPage: React.FC = () => {
  const { 資格: certifications, "認定・賞": awards } = data;

  return (
    <div className="max-w-4xl mx-auto px-6 py-12">
      <h1 className="text-4xl font-bold mb-12 text-center gradient-text animate-fade-in-up">
        資格と賞状
      </h1>
      
      <div className="space-y-8">
        <div style={{ animationDelay: '200ms' }}>
          <ListSection title="資格" items={certifications} />
        </div>
        <div style={{ animationDelay: '400ms' }}>
          <ListSection title="認定・賞" items={awards} />
        </div>
      </div>
    </div>
  );
};

export default AwordsPage;