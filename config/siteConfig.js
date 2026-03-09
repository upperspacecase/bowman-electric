const siteConfig = {
  // ============================================================
  // BUSINESS INFO — Update these values for each client
  // ============================================================
  businessName: "Bowman Electric",
  tagline: "Licensed Electrician Serving Huntsville Since 2012",
  phone: "(256) 880-3061",
  phoneHref: "tel:+12568803061",
  smsHref: "sms:+12568803061",
  email: "info@bowman-electric.com",
  address: "14038 Camden Cir, Huntsville, AL 35803",
  licenseNumber: "Fully Licensed",
  yearEstablished: 2012,
  hoursOfOperation: "Mon-Fri: 7am - 6pm | Sat: 8am - 2pm",
  emergencyAvailable: true,

  // ============================================================
  // TRUST BAR
  // ============================================================
  trustBar: {
    credential: "Licensed Electrician",
  },

  // ============================================================
  // SERVICES
  // ============================================================
  services: [
    {
      title: "Residential Electrical",
      description:
        "Keep your Huntsville home safe and powered with expert wiring, rewiring, and electrical upgrades tailored to your needs.",
      icon: "House",
    },
    {
      title: "Commercial Electrical",
      description:
        "Reliable electrical installations, fit-outs, and maintenance for Huntsville offices, retail spaces, and commercial properties.",
      icon: "Building2",
    },
    {
      title: "Emergency 24/7 Service",
      description:
        "Power outages, sparking outlets, or tripped breakers — we respond fast across Huntsville, day or night.",
      icon: "Siren",
    },
    {
      title: "Switchboard & Panel Upgrades",
      description:
        "Upgrade your outdated electrical panel to a modern, code-compliant system that keeps your Huntsville home running safely.",
      icon: "PlugZap",
    },
    {
      title: "Lighting Installation",
      description:
        "Transform your Huntsville property with LED upgrades, recessed lighting, outdoor lighting, and smart lighting systems.",
      icon: "Lightbulb",
    },
    {
      title: "EV Charger Installation",
      description:
        "Certified installation of home and commercial electric vehicle charging stations for Huntsville drivers.",
      icon: "BatteryCharging",
    },
  ],

  // ============================================================
  // ABOUT
  // ============================================================
  about: {
    headline: "Trusted. Local. Licensed.",
    text: "With over a decade serving Huntsville and the surrounding areas, Bowman Electric is built on honest work, fair pricing, and a commitment to getting the job done right. Every project is handled by a licensed, insured electrician who treats your property with the care it deserves.",
    image: "/images/team.jpg",
  },

  // ============================================================
  // GOOGLE REVIEWS
  // ============================================================
  reviews: {
    rating: 5,
    totalReviews: 10,
    googleMapsUrl:
      "https://search.google.com/local/writereview?placeid=ChIJ36j5Lw8NYogRRU0I4zf-cXc",
    items: [
      {
        author: "michael chalk",
        rating: 5,
        date: "a month ago",
        text: "Use them only if you want it done right!",
        avatar: null,
      },
      {
        author: "Lee Weeks",
        rating: 5,
        date: "a year ago",
        text: "Prompt, professional, accurate, and considerate of your home. I have used them many times and highly recommend them",
        avatar: null,
      },
      {
        author: "Caroline Craig",
        rating: 5,
        date: "2 years ago",
        text: "Always excellent service and prompt! We have worked with this company many times, highly recommend.",
        avatar: null,
      },
      {
        author: "Judy Roper",
        rating: 5,
        date: "6 years ago",
        text: "I highly recommend this company for any electrical repair. They are highly professional, thorough, dependable and very friendly! They not only fixed the problem I called them to fix, but identified a different electrical issue that needed immediate attention.",
        avatar: null,
      },
    ],
  },

  // ============================================================
  // SERVICE AREA
  // ============================================================
  serviceArea: {
    mapEmbedUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d103689.53613498668!2d-86.65804645!3d34.7303882!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88626b67a0be8a97%3A0x64cc513e0ad1abf0!2sHuntsville%2C%20AL!5e0!3m2!1sen!2sus!4v1234567890",
    suburbs: [
      "Huntsville",
      "Madison",
      "Harvest",
      "Meridianville",
      "Hazel Green",
      "New Market",
      "Owens Cross Roads",
      "Hampton Cove",
      "Research Park",
      "Jones Valley",
      "Five Points",
      "Twickenham",
      "Monte Sano",
      "Big Cove",
      "Southeast Huntsville",
      "Northwest Huntsville",
    ],
  },

  // ============================================================
  // CONTACT FORM
  // ============================================================
  contactForm: {
    serviceOptions: [
      "Residential Electrical",
      "Commercial Electrical",
      "Emergency 24/7 Service",
      "Switchboard & Panel Upgrades",
      "Lighting Installation",
      "EV Charger Installation",
      "Emergency Call-Out",
      "Other",
    ],
    // recipientEmail derived from siteConfig.email
  },
};

export default siteConfig;
