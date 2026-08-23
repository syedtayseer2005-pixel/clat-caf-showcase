export const site = {
  name: "ÉCLAT",
  fullName: "Éclat Café",
  suburb: "Ascot Vale",
  address: "234 Union Rd, Ascot Vale VIC 3032, Australia",
  addressLines: ["234 Union Rd", "Ascot Vale VIC 3032", "Australia"],
  phone: "+61 3 9578 0940",
  phoneHref: "tel:+61395780940",
  instagram: "https://www.instagram.com/eclat__cafe/?hl=en",
  mapsUrl:
    "https://www.google.com/maps/place/Eclat+Cafe/@-37.7725536,144.9134649,17z/data=!4m8!3m7!1s0x6ad65da58c2949cd:0x4d73c252e7264972!8m2!3d-37.772548!4d144.916288!9m1!1b1!16s%2Fg%2F11w_jv6wp4",
  directionsUrl:
    "https://www.google.com/maps/dir/?api=1&destination=Eclat+Cafe,+234+Union+Rd,+Ascot+Vale+VIC+3032",
  orderUrl: "https://www.ubereats.com/au/store/eclat-cafe-ascot-vale/ZYxKdKrQTKmgESETP0tKow",
  mapEmbed:
    "https://www.google.com/maps?q=Eclat+Cafe,+234+Union+Rd,+Ascot+Vale+VIC+3032&output=embed",
  hours: [
    { days: "Monday – Friday", time: "7:00am – 3:30pm" },
    { days: "Saturday", time: "8:00am – 3:30pm" },
    { days: "Sunday", time: "8:00am – 3:30pm" },
  ],
  hoursNote: "Hours as listed on our Google profile. Please call ahead on public holidays.",
  services: [
    { title: "Dine in", detail: "Light-filled room and street-side tables on Union Road." },
    { title: "Takeaway", detail: "Coffee and the full all-day menu, packed to go." },
    { title: "Group tables", detail: "Call ahead for larger tables and weekend brunch." },
    { title: "Delivery & pick-up", detail: "Order online for pick-up or delivery nearby." },
  ],
  rating: { score: "4.7", count: 73 },
} as const;
