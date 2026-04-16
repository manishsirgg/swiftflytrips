"use client";

import { motion } from "framer-motion";
import * as Tabs from "@radix-ui/react-tabs";
import { TravelpayoutsWidget } from "@/components/widgets/travelpayouts-widget";

const tabs = ["Flights", "Hotels", "Holiday Packages", "Visa Services", "Activities", "Airport Transfers", "Insurance"];

export function HeroBookingWidget() {
  return (
    <motion.section initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} className="rounded-3xl bg-white p-6 shadow-soft">
      <Tabs.Root defaultValue="Flights">
        <Tabs.List className="grid grid-cols-2 gap-2 md:grid-cols-7">
          {tabs.map((tab) => (
            <Tabs.Trigger key={tab} value={tab} className="rounded-lg border px-3 py-2 text-xs data-[state=active]:bg-brand.blue data-[state=active]:text-white">{tab}</Tabs.Trigger>
          ))}
        </Tabs.List>
        <Tabs.Content value="Flights" className="mt-4">
          <TravelpayoutsWidget title="Search Flights" src={process.env.NEXT_PUBLIC_TRAVELPAYOUTS_FLIGHTS_WIDGET_URL || "https://www.travelpayouts.com/widgets/flight"} />
        </Tabs.Content>
        <Tabs.Content value="Hotels" className="mt-4">
          <TravelpayoutsWidget title="Search Hotels" src={process.env.NEXT_PUBLIC_TRAVELPAYOUTS_HOTELS_WIDGET_URL || "https://www.travelpayouts.com/widgets/hotels"} />
        </Tabs.Content>
      </Tabs.Root>
    </motion.section>
  );
}
