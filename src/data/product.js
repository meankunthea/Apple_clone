const products = {
  "iphone-17": {
    slug: "iphone-17",
    name: "iPhone 17",
    eyebrow: "New",
    tagline: "A stunningly thin design, a brighter display, and the most advanced camera system ever in an iPhone.",
    price: "From $799",
    heroImage: "/images/home/hero_iphone_17__ekga3xh1n5aq_mediumtall_2x.jpg",
    heroImageAlt: "iPhone 17 in a bright color",
    sectionLabel: "Designed to be seen",
    sectionTitle: "A titanium frame with a color-infused back glass.",
    sectionText:
      "iPhone 17 brings together a remarkable new display, improved battery life, and all-day performance in an elegant, lighter design.",
    detailTitle: "Built for the way you live",
    detailText:
      "From capturing your best shots to powering immersive video calls, iPhone 17 is engineered to feel effortless in every moment.",
    highlights: [
      {
        title: "A new dawn of display",
        text: "A brighter, more responsive Super Retina XDR display with ProMotion makes every interaction feel fluid.",
      },
      {
        title: "Camera that thinks ahead",
        text: "Advanced computational photography creates richer detail, better low-light images, and true cinematic video.",
      },
      {
        title: "Battery that keeps up",
        text: "A more efficient chip and optimized battery management help you power through the day with ease.",
      },
    ],
    specs: [
      { label: "Display", value: "6.1-inch Super Retina XDR" },
      { label: "Chip", value: "A19 Bionic" },
      { label: "Battery", value: "Up to 27 hours video playback" },
      { label: "Camera", value: "Dual 48MP system" },
    ],
  },
  "iphone-17-pro": {
    slug: "iphone-17-pro",
    name: "iPhone 17 Pro",
    eyebrow: "Pro",
    tagline: "The most advanced iPhone ever, built for creators, gamers, and professionals who demand the best.",
    price: "From $999",
    heroImage: "/images/home/hero_iphone_17_pro__dbaaq3mt8u2q_mediumtall_2x.jpg",
    heroImageAlt: "iPhone 17 Pro in black and silver",
    sectionLabel: "Pro performance",
    sectionTitle: "A camera system that transforms what a phone can capture.",
    sectionText:
      "Designed with a new Pro camera architecture and a faster neural engine, iPhone 17 Pro gives you remarkable flexibility in every shot.",
    detailTitle: "Made for power and precision",
    detailText:
      "Whether you are editing videos on the go or playing graphically intense games, iPhone 17 Pro delivers stunning speed and control.",
    highlights: [
      {
        title: "A14-class performance",
        text: "The fastest chip in any iPhone enables smooth multitasking, gaming, and advanced editing workflows.",
      },
      {
        title: "Pro camera system",
        text: "New telephoto and ultra-wide sensors open up professional-grade framing and richer detail.",
      },
      {
        title: "Titanium build",
        text: "A lighter, stronger chassis gives the Pro line a premium feel without sacrificing durability.",
      },
    ],
    specs: [
      { label: "Display", value: "6.3-inch ProMotion display" },
      { label: "Chip", value: "A19 Pro Bionic" },
      { label: "Battery", value: "Up to 33 hours video playback" },
      { label: "Camera", value: "Triple 48MP camera system" },
    ],
  },
  "macbook-air": {
    slug: "macbook-air",
    name: "MacBook Air",
    eyebrow: "Mac",
    tagline: "Supercharged by the M5 chip, the all-new MacBook Air is thin, fast, and unbelievably portable.",
    price: "From $1,099",
    heroImage: "/images/home/hero_macbook_air_m5__eb1idggd120y_mediumtall_2x.jpg",
    heroImageAlt: "MacBook Air in silver",
    sectionLabel: "Power in a light frame",
    sectionTitle: "Designed for work, school, and everything in between.",
    sectionText:
      "With an all-day battery, remarkable performance, and a brilliant display, MacBook Air continues to lead with elegance and efficiency.",
    detailTitle: "The perfect everyday Mac",
    detailText:
      "From writing and video calls to creative projects and travel, MacBook Air helps you stay focused and productive wherever you go.",
    highlights: [
      {
        title: "Whisper-quiet cooling",
        text: "The fanless design keeps everything silent while delivering a smooth, efficient experience.",
      },
      {
        title: "Brilliant display",
        text: "A larger, brighter Liquid Retina display makes every detail feel vivid and crisp.",
      },
      {
        title: "All-day battery life",
        text: "Work and create longer with battery performance that keeps pace with your routine.",
      },
    ],
    specs: [
      { label: "Display", value: "13.6-inch or 15.3-inch Liquid Retina" },
      { label: "Chip", value: "Apple M5" },
      { label: "Battery", value: "Up to 18 hours" },
      { label: "Memory", value: "16GB unified memory" },
    ],
  },
};

export const getProductBySlug = (slug) => products[slug] || null;

export default products;
