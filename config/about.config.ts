import {
  Award,
  Clock,
  Cog,
  Eye,
  Globe,
  Package,
  Shield,
  Target,
  TrendingUp,
  Truck,
  Users,
  Zap,
} from "lucide-react";
import { companyInfo } from "./site.config";

export const heroFeatures = [
  { icon: Zap, text: "High Conductivity" },
  { icon: Shield, text: "Corrosion Resistant" },
  { icon: Award, text: "Quality Certified" },
];

export const features = [
  { icon: Zap, title: "Premium Brass Terminals", description: "Precision-engineered using high-quality brass for excellent conductivity and long-lasting performance.", highlight: "High Conductivity" },
  { icon: Shield, title: "Corrosion Resistant", description: "Advanced surface treatment ensures protection against environmental factors and extended product life.", highlight: "Durable Design" },
  { icon: Award, title: "Quality Certified", description: "ISO 9001:2015 certified manufacturing processes guarantee consistent quality in every product.", highlight: "ISO Certified" },
  { icon: Cog, title: "Custom Solutions", description: "Tailored automotive components designed to meet your specific requirements and applications.", highlight: "Made to Order" },
  { icon: Globe, title: "Global Reach", description: "Serving customers across 50+ countries with reliable international shipping and support.", highlight: "50+ Countries" },
  { icon: Truck, title: "Fast Delivery", description: "Efficient logistics and inventory management ensure timely delivery of all orders.", highlight: "Quick Turnaround" },
];

export const aboutValues = [
  { icon: Target, title: "Our Mission", description: companyInfo.mission },
  { icon: Eye, title: "Our Vision", description: companyInfo.vision },
  {
    icon: Award,
    title: "Quality First",
    description: "We maintain the highest quality standards in all our products, ensuring customer satisfaction and reliability.",
  },
  { icon: TrendingUp, title: "Innovation", description: "Continuously innovating to bring the best solutions for the automotive industry." },
];

export const certifications = [
  { name: "ISO 9001:2015", description: "Quality Management", logoSrc: "/about/certs/iso-9001.svg", certificateSrc: "/gallery/certificates/certificate-01.jpg" },
  { name: "ISO 14001:2015", description: "Environmental Management", logoSrc: "/about/certs/iso-14001.svg", certificateSrc: "/gallery/certificates/certificate-02.jpg" },
  { name: "ISO 45001:2018", description: "Health & Safety Management", logoSrc: "/about/certs/iso-45001.svg", certificateSrc: "/gallery/certificates/certificate-03.jpg" },
  { name: "IATF 16949:2016", description: "Automotive Quality", logoSrc: "/about/certs/iatf-16949.svg", certificateSrc: "/gallery/certificates/certificate-04.jpg" },
  { name: "CE", description: "European Conformity", logoSrc: "/about/certs/ce.svg", certificateSrc: "/gallery/certificates/certificate-05.jpg" },
  { name: "RoHS", description: "Hazardous Substances", logoSrc: "/about/certs/rohs.svg", certificateSrc: "/gallery/certificates/certificate-06.jpg" },
  { name: "UL", description: "Safety Certification", logoSrc: "/about/certs/ul.svg", certificateSrc: "/gallery/certificates/certificate-08.jpg" },
  { name: "CSA", description: "Canadian Standards", logoSrc: "/about/certs/csa.svg", certificateSrc: "/gallery/certificates/certificate-09.jpg" },
  { name: "WHO GMP", description: "Good Manufacturing Practice", logoSrc: "/about/certs/who-gmp.svg", certificateSrc: "/gallery/certificates/certificate-07.jpg" },
];

export const timeline = [
  { year: "2015", title: "Company Founded", description: "Saroop Industries launched with a vision to transform automotive manufacturing", icon: Users },
  { year: "2017", title: "ISO Certified", description: "Achieved ISO 9001:2015, ISO 14001:2015, and ISO 45001:2018 certifications", icon: Shield },
  { year: "2020", title: "Global Expansion", description: "Opened branch office in Canada, serving 50+ countries worldwide", icon: Globe },
  { year: "2025", title: "Industry Leader", description: "500+ products serving 3000+ happy customers with cutting-edge technology", icon: Award },
];

export const stats = [
  { icon: Clock, value: parseInt(companyInfo.experience), suffix: "+", label: "Years of Excellence", description: "Industry experience", color: "#93c967" },
  { icon: Package, value: 500, suffix: "+", label: "Products", description: "In our catalog", color: "#3b82f6" },
  { icon: Users, value: 3000, suffix: "+", label: "Happy Customers", description: "Worldwide", color: "#10b981" },
  { icon: Globe, value: 50, suffix: "+", label: "Countries", description: "Global reach", color: "#8b5cf6" },
];

export const mapMarkers = [
  { lat: 28.6139, lng: 77.209, size: 0.5 },
  { lat: 43.6532, lng: -79.3832, size: 0.4 },
  { lat: 40.7128, lng: -74.006, size: 0.3 },
  { lat: 51.5074, lng: -0.1278, size: 0.3 },
  { lat: 35.6762, lng: 139.6503, size: 0.3 },
  { lat: -33.8688, lng: 151.2093, size: 0.3 },
  { lat: 25.2048, lng: 55.2708, size: 0.3 },
  { lat: 1.3521, lng: 103.8198, size: 0.3 },
];
