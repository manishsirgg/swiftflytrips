export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "TravelAgency",
  name: "Swift Fly Trips",
  url: process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000",
  sameAs: ["https://wa.me/919999999999"]
};
