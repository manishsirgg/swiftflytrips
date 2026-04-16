import { TravelpayoutsWidget } from "@/components/widgets/travelpayouts-widget";

export default function ActivitiesPage() {
  return <div className="section-container"><h1 className="mb-6 text-3xl font-bold text-brand.blue">Activities</h1><TravelpayoutsWidget title="Activities" src={process.env.NEXT_PUBLIC_TRAVELPAYOUTS_ACTIVITIES_WIDGET_URL || "https://www.travelpayouts.com/widgets/activities"} /></div>;
}
