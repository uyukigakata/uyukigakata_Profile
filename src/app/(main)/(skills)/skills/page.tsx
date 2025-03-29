import skillsData from "@/data/skill.json";

// スキルページコンポーネント
export default function SkillsPage() {
  return (
    <div className="max-w-3xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-4 text-white">スキル一覧</h1>
      {/* 各カテゴリごとに表示 */}
      {Object.entries(skillsData).map(([category, skillList]) => (
        skillList.length > 0 && (
          <div key={category} className="mb-6">
            <h2 className="text-lg font-semibold text-gray-300">{category}</h2>
            <div className="flex flex-wrap gap-2 mt-2">
              {skillList.map((skill) => (
                <span 
                  key={skill} 
                  className="px-3 py-1 bg-gray-800 text-white rounded-full shadow-md text-sm"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        )
      ))}
    </div>
  );
}
