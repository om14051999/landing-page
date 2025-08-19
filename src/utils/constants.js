import { Code, PhoneIphone, DesignServices } from "@mui/icons-material";

export const NAV_LINKS = [
  { label: "Home", href: "#hero" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Contact", href: "#contact" },
];

export const SERVICES = [
  {
    icon: <Code />,
    title: "Web Development",
    description: "Responsive React apps with Material UI.",
  },
  {
    icon: <PhoneIphone />,
    title: "Mobile Friendly",
    description: "Seamless designs for all devices.",
  },
  {
    icon: <DesignServices />,
    title: "UI/UX Design",
    description: "Modern, clean, user-friendly interfaces.",
  },
];
