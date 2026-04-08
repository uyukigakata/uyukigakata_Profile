import ActivityTimeline from "@/components/ActivityTimeline";
import activities from "@/data/activities.json";

export default function ActivitiesPage() {
  return (
    <main className="min-h-screen bg-gray-100 py-10">
      <ActivityTimeline items={activities} />
    </main>
  );
}