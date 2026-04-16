"use client";

type TravelWidgetProps = {
  title: string;
  src: string;
};

export function TravelpayoutsWidget({ title, src }: TravelWidgetProps) {
  return (
    <section className="rounded-2xl border bg-white p-4 shadow-soft">
      <h3 className="mb-4 text-lg font-semibold text-brand.blue">{title}</h3>
      <iframe src={src} title={title} className="h-[350px] w-full rounded-xl border" loading="lazy" />
    </section>
  );
}
