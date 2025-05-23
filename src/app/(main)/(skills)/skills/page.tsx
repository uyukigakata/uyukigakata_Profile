import skillsData from "@/data/skill.json";

export default function SkillsPage() {
  return (
    <div className="max-w-6xl mx-auto px-6 py-12">
      <h1 className="text-4xl font-bold mb-12 text-center gradient-text animate-fade-in-up">
        スキル一覧
      </h1>

      <div className="grid gap-8">
        {Object.entries(skillsData).map(([category, skillList], index) => (
          skillList.length > 0 && (
            <div 
              key={category} 
              className="glass-card rounded-2xl p-8 shadow-lg animate-card-appear"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <h2 className="text-2xl font-bold mb-6 text-emerald-800 border-l-4 border-emerald-500 pl-4">
                {category}
              </h2>
              
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3">
                {skillList.map((skill, skillIndex) => (
                  <div
                    key={skillIndex}
                    className="bg-gradient-to-r from-emerald-100 to-teal-100 hover:from-emerald-200 hover:to-teal-200 px-4 py-3 rounded-xl text-center font-medium text-emerald-800 transition-all duration-200 hover:scale-105 hover:shadow-md cursor-default"
                  >
                    {skill}
                  </div>
                ))}
              </div>
            </div>
          )
        ))}
      </div>
    </div>
  );
}