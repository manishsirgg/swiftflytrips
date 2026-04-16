"use client";

import { useEffect } from "react";

type TravelpayoutsWidgetProps = {
  title: string;
  iframeSrc?: string;
  scriptSrc?: string;
  containerId?: string;
  height?: string;
};

export default function TravelpayoutsWidget({
  title,
  iframeSrc,
  scriptSrc,
  containerId = "travel-widget-container",
  height = "h-[550px]",
}: TravelpayoutsWidgetProps) {
  useEffect(() => {
    if (!scriptSrc) return;

    const container = document.getElementById(containerId);

    if (!container || container.querySelector("script")) return;

    const script = document.createElement("script");
    script.src = scriptSrc;
    script.async = true;

    container.innerHTML = "";
    container.appendChild(script);
  }, [scriptSrc, containerId]);

  return (
    <section className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
      <h3 className="mb-4 text-xl font-semibold text-slate-900">{title}</h3>

      {iframeSrc ? (
        <iframe
          src={iframeSrc}
          title={title}
          className={`w-full rounded-xl border border-slate-200 ${height}`}
          loading="lazy"
        />
      ) : (
        <div id={containerId} className="min-h-[350px] w-full" />
      )}
    </section>
  );
}
