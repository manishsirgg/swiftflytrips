export function Footer() {
  return (
    <footer className="bg-slate-950 text-slate-200">
      <div className="section-container grid gap-8 md:grid-cols-4">
        <div><h4 className="font-semibold">Swift Fly Trips</h4><p className="mt-2 text-sm">Conversion-first OTA platform for flights, hotels, holidays, visa, and custom trips.</p></div>
        <div><h4 className="font-semibold">Services</h4><ul className="mt-2 space-y-2 text-sm"><li>Flights</li><li>Hotels</li><li>Holiday Packages</li><li>Visa Services</li></ul></div>
        <div><h4 className="font-semibold">Company</h4><ul className="mt-2 space-y-2 text-sm"><li>About</li><li>Contact</li><li>Blog</li><li>B2B Login</li></ul></div>
        <div><h4 className="font-semibold">Contact</h4><ul className="mt-2 space-y-2 text-sm"><li>support@swiftflytrips.com</li><li>+91 99999 99999</li><li>Mon-Sat 9AM-9PM</li></ul></div>
      </div>
    </footer>
  );
}
