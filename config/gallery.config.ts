export interface GalleryImage {
  id: number;
  title: string;
  category: "Events" | "Products" | "Certificates";
  imageUrl: string;
  description?: string;
}

export const galleryImages: GalleryImage[] = [
  {
    id: 1,
    title: "Dubai Exhibition 2019",
    category: "Events",
    imageUrl: "/gallery/events/dubai-2019-01.jpeg",
    description: "Saroop Industries at Dubai Auto Expo 2019"
  },
  {
    id: 2,
    title: "Product Display",
    category: "Events",
    imageUrl: "/gallery/events/dubai-2019-04.jpeg",
    description: "High-quality automotive terminals and connectors"
  },
  {
    id: 3,
    title: "Industry Networking",
    category: "Events",
    imageUrl: "/gallery/events/dubai-2019-05.jpeg",
    description: "Meeting with industry partners and clients"
  },
  {
    id: 4,
    title: "Exhibition Hall",
    category: "Events",
    imageUrl: "/gallery/events/dubai-2019-06.jpeg",
    description: "International automotive exhibition venue"
  },
  {
    id: 5,
    title: "Product Demonstration",
    category: "Events",
    imageUrl: "/gallery/events/dubai-2019-07.jpeg",
    description: "Demonstrating product features to visitors"
  },
  {
    id: 6,
    title: "Client Meetings",
    category: "Events",
    imageUrl: "/gallery/events/dubai-2019-08.jpeg",
    description: "Engaging with potential clients and partners"
  },
  {
    id: 7,
    title: "Exhibition Stand",
    category: "Events",
    imageUrl: "/gallery/events/dubai-2019-09.jpeg",
    description: "Professional booth setup at Dubai exhibition"
  },
  {
    id: 8,
    title: "Product Range Display",
    category: "Events",
    imageUrl: "/gallery/events/dubai-2019-10.jpeg",
    description: "Showcasing our complete product portfolio"
  },
  {
    id: 9,
    title: "Exhibition Highlights",
    category: "Events",
    imageUrl: "/gallery/events/dubai-2019-13.jpeg",
    description: "Key moments from Dubai exhibition"
  },
  {
    id: 10,
    title: "Global Exposure",
    category: "Events",
    imageUrl: "/gallery/events/dubai-2019-15.jpeg",
    description: "International automotive industry event"
  },
  {
    id: 11,
    title: "Exhibition Success",
    category: "Events",
    imageUrl: "/gallery/events/dubai-2019-16.jpeg",
    description: "Successful participation at Dubai 2019"
  },
  {
    id: 12,
    title: "Product Catalogue",
    category: "Events",
    imageUrl: "/gallery/events/dubai-2019-18.jpeg",
    description: "Comprehensive product catalogue presentation"
  },
  {
    id: 13,
    title: "Exhibition Team",
    category: "Events",
    imageUrl: "/gallery/events/dubai-2019-19.jpeg",
    description: "Our dedicated team at the exhibition"
  },
  {
    id: 14,
    title: "Business Opportunities",
    category: "Events",
    imageUrl: "/gallery/events/dubai-2019-20.jpeg",
    description: "Exploring new business partnerships"
  },
  {
    id: 15,
    title: "Trade Exhibition",
    category: "Events",
    imageUrl: "/gallery/events/dubai-2019-23.jpeg",
    description: "International automotive trade exhibition"
  },
  {
    id: 16,
    title: "Industry Recognition",
    category: "Events",
    imageUrl: "/gallery/events/dubai-2019-24.jpeg",
    description: "Recognition in the automotive industry"
  },

  // Product Images
  {
    id: 18,
    title: "Jumper Cable Set",
    category: "Products",
    imageUrl: "/gallery/products/jumper-cable-set.jpg",
    description: "Heavy-duty jumper cable set"
  },

  // Certificate Images
  {
    id: 31,
    title: "ISO 9001:2015 Certificate",
    category: "Certificates",
    imageUrl: "/gallery/certificates/certificate-07.jpg",
    description: "Quality Management System Certification"
  },
  {
    id: 32,
    title: "ISO 14001:2015 Certificate",
    category: "Certificates",
    imageUrl: "/gallery/certificates/certificate-04.jpg",
    description: "Environmental Management System Certification"
  },
  {
    id: 33,
    title: "ISO 45001:2018 Certificate",
    category: "Certificates",
    imageUrl: "/gallery/certificates/certificate-06.jpg",
    description: "Occupational Health & Safety Management Certification"
  },
  {
    id: 34,
    title: "IATF 16949:2016 Certificate",
    category: "Certificates",
    imageUrl: "/gallery/certificates/certificate-05.jpg",
    description: "Automotive Quality Management System Certification"
  },
  {
    id: 35,
    title: "CE Certification",
    category: "Certificates",
    imageUrl: "/gallery/certificates/certificate-08.jpg",
    description: "European Conformity Certification"
  },
  {
    id: 36,
    title: "RoHS Compliance",
    category: "Certificates",
    imageUrl: "/gallery/certificates/certificate-09.jpg",
    description: "Restriction of Hazardous Substances Compliance"
  },
  {
    id: 37,
    title: "WHO-GMP Certificate",
    category: "Certificates",
    imageUrl: "/gallery/certificates/certificate-10.jpg",
    description: "Good Manufacturing Practice Certification"
  },
  {
    id: 38,
    title: "Company Logo",
    category: "Certificates",
    imageUrl: "/gallery/certificates/certificate-02.jpg",
    description: "Saroop Industries Official Logo"
  },
  {
    id: 39,
    title: "Quality Assurance",
    category: "Certificates",
    imageUrl: "/gallery/certificates/certificate-03.jpg",
    description: "MIQA Quality Certification"
  },
  {
    id: 40,
    title: "2027 Certification",
    category: "Certificates",
    imageUrl: "/gallery/certificates/certificate-01.jpg",
    description: "Latest certification credentials"
  },
];

export const galleryCategories = ["All", "Events", "Products", "Certificates"] as const;
export type GalleryCategory = typeof galleryCategories[number];