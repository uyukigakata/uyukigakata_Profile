import ActivityTimeline from "@/components/ActivityTimeline";
import activities from "@/data/activities.json";


type Activity = {
  date: string;
  title: string;
  description?: string;
  side: "left" | "right";
};

export default function ActivitiesPage() {
  const typedActivities = activities as Activity[];

  return (
    <main className="min-h-screen bg-gray-100 py-10">
      <ActivityTimeline items={typedActivities} />
    </main>
  );
}