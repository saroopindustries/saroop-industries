export interface Testimonial {
  id: string;
  name: string;
  location: string;
  rating: number;
  comment: string;
  image?: string;
}

export const testimonials: Testimonial[] = [
  {
    id: "1",
    name: "Karunanithee M",
    location: "United States of America",
    rating: 5,
    comment:
      "Quick response and smooth buying experience. Quality matched expectations.",
  },
  {
    id: "2",
    name: "A A IPSDT",
    location: "Thiruvananthapuram, Kerala",
    rating: 5,
    comment:
      "I’m proud that an Indian company delivers 5-star quality in delivery and communication. Packing was top-notch. Special thanks to Gaurav for quick support. Highly recommended!",
  },
  {
    id: "3",
    name: "Raghavan",
    location: "Ernakulam, Kerala",
    rating: 5,
    comment:
      "Good response and reliable quality. The overall experience was hassle-free.",
  },
  {
    id: "4",
    name: "Gurkan Balci",
    location: "Turkey",
    rating: 5,
    comment:
      "Great connector quality and professional service. Delivery was well handled.",
  },
  {
    id: "5",
    name: "Priya Ranjan Nayak",
    location: "Cuttack, Odisha",
    rating: 5,
    comment:
      "Gaurav is very professional and resolved queries quickly. In just two conversations we finalized exactly what we needed. Recommended for connectors and pins.",
  },
  {
    id: "6",
    name: "K Raman",
    location: "Erode, Tamil Nadu",
    rating: 5,
    comment:
      "Very good communication, excellent quality, and fast delivery. Totally satisfied.",
  },
  {
    id: "7",
    name: "Michael Elliott",
    location: "United States of America",
    rating: 5,
    comment:
      "Responsive team and solid product quality. Would definitely order again.",
  },
  {
    id: "8",
    name: "Ravinda",
    location: "Sri Lanka",
    rating: 5,
    comment:
      "Good quality headlight holders with timely delivery. Support was helpful.",
  },
];