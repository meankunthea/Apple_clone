const footerSections = [
  {
    title: "Shop and Learn",
    links: [
      "Store",
      "Mac",
      "iPad",
      "iPhone",
      "Watch",
      "Vision",
      "AirPods",
      "TV & Home",
      "AirTag",
      "Accessories",
      "Gift Cards",
    ],
    subSections: [
      {
        title: "Apple Wallet",
        links: ["Wallet", "Apple Pay", "Apple Card", "Apple Cash"],
      },
    ],
  },
  {
    title: "Account",
    links: ["Manage Your Apple ID", "Apple Store Account", "iCloud.com"],
    subSections: [
      {
        title: "Entertainment",
        links: [
          "Apple One",
          "Apple TV+",
          "Apple Music",
          "Apple Arcade",
          "Apple Podcasts",
          "Apple Books",
          "App Store",
        ],
      },
    ],
  },
  {
    title: "Apple Store",
    links: [
      "Find a Store",
      "Genius Bar",
      "Today at Apple",
      "Group Reservations",
      "Apple Camp",
      "Apple Store App",
      "Certified Refurbished",
      "Apple Trade In",
      "Financing",
      "Carrier Deals at Apple",
      "Order Status",
      "Shopping Help",
    ],
  },
  {
    title: "For Business",
    links: ["Apple and Business", "Shop for Business"],
    subSections: [
      {
        title: "For Education",
        links: ["Apple and Education", "Shop for K-12", "Shop for College"],
      },
      {
        title: "For Healthcare",
        links: ["Apple and Healthcare"],
      },
      {
        title: "For Government",
        links: [
          "Apple and Government",
          "Shop for Veterans and Military",
          "Shop for State and Local Employees",
          "Shop for Federal Employees",
        ],
      },
    ],
  },
  {
    title: "Apple Values",
    links: [
      "Accessibility",
      "Education",
      "Environment",
      "Inclusion and Diversity",
      "Privacy",
      "Racial Equity and Justice",
      "Supply Chain Innovation",
    ],
    subSections: [
      {
        title: "About Apple",
        links: [
          "Newsroom",
          "Apple Leadership",
          "Career Opportunities",
          "Investors",
          "Ethics & Compliance",
          "Events",
          "Contact Apple",
        ],
      },
    ],
  },
];

const Footer = () => {
  return (
    <footer className=" bg-[#f5f5f7] text-[#6e6e73]">
      <div className="mx-auto max-w-6xl px-3 sm:px-4 lg:px-6">
        <div className="mb-6 text-[12px]  text-[#6e6e73]">
          <p className="mb-4">
            1. Trade‑in values will vary based on the condition, year, and
            configuration of your eligible trade‑in device. Not all devices are
            eligible for credit. You must be at least the age of majority to be
            eligible to trade in for credit or for an Apple Gift Card. Trade‑in
            value may be applied toward qualifying new device purchase, or added
            to an Apple Gift Card. Actual value awarded is based on receipt of a
            qualifying device matching the description provided when estimate
            was made. Sales tax may be assessed on full value of a new device
            purchase. In‑store trade‑in requires presentation of a valid photo
            ID (local law may require saving this information). Offer may not be
            available in all stores and may vary between in‑store and online
            trade‑in. Some stores may have additional requirements. Apple or its
            trade‑in partners reserve the right to refuse, cancel, or limit
            quantity of any trade‑in transaction for any reason. More details
            are available from Apple’s trade-in partner for trade‑in and
            recycling of eligible devices. Restrictions and limitations may
            apply.{" "}
          </p>
          <p>
            To access and use all Apple Card features and products available
            only to Apple Card users, you must add Apple Card to Wallet on an
            iPhone or iPad that supports and has the latest version of iOS or
            iPadOS. Apple Card is subject to credit approval, available only for
            qualifying applicants in the United States, and issued by Goldman
            Sachs Bank USA, Salt Lake City Branch.{" "}
          </p>
          <p>
            Apple Payments Services LLC, a subsidiary of Apple Inc., is a
            service provider of Goldman Sachs Bank USA for Apple Card and
            Savings accounts. Neither Apple Inc. nor Apple Payments Services LLC
            is a bank.{" "}
          </p>
          <p>
            All communications from Apple and Goldman Sachs Bank USA about Apple
            Card (including transactional and marketing communications) and
            customer service support are available in English. Certain
            communications about Apple Card can be viewed in another language
            depending on your device language settings. If you reside in the
            U.S. Virgin Islands, American Samoa, Guam, Northern Mariana Islands,
            or U.S. Minor Outlying Islands, please call Goldman Sachs at
            877-255-5923 with questions about Apple Card.{" "}
          </p>{" "}
          <br></br>
          <p>
            Learn more about how Apple Card applications are evaluated at
            support.apple.com/kb/HT209218.
          </p>
          <br></br>
          <p>
            A subscription is required for Apple Arcade, Apple Fitness+, Apple
            Music, and Apple TV.
          </p>
        </div>

        <div className="grid gap-6 border-t border-gray-300 pt-6 md:grid-cols-2 lg:grid-cols-5">
          {footerSections.map((section) => (
            <div key={section.title}>
              <h3 className="mb-3 text-[12px] font-semibold tracking-[0.02em] text-[#1d1d1f]">
                {section.title}
              </h3>
              <ul className="space-y-2 text-[12px] leading-6">
                {section.links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="whitespace-nowrap transition hover:text-[#1d1d1f] hover:underline"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
              {section.subSections?.map((subSection) => (
                <div key={subSection.title} className="mt-4">
                  <h4 className="mb-3 text-[12px] font-semibold tracking-[0.02em] text-[#1d1d1f]">
                    {subSection.title}
                  </h4>
                  <ul className="space-y-2 text-[12px] leading-6">
                    {subSection.links.map((link) => (
                      <li key={link}>
                        <a
                          href="#"
                          className="whitespace-nowrap transition hover:text-[#1d1d1f] hover:underline"
                        >
                          {link}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          ))}
        </div>
        <div className="mt-6 text-[12px] leading-6">
          <p className="mb-4 text-[12px] leading-6">
            More ways to shop:{" "}
            <a href="#" className="text-[#0066cc] hover:underline">
              Find an Apple Store
            </a>{" "}
            or{" "}
            <a href="#" className="text-[#0066cc] hover:underline">
              other retailer
            </a>{" "}
            near you. Or call 1-800-MY-APPLE.
          </p>
        </div>
        <div className="mt-8 border-t border-gray-300 pt-4 text-[12px] leading-6">
          <div className="mt-3 flex flex-wrap items-center gap-3">
            <p>Copyright © 2026 Apple Inc. All rights reserved.</p>
            <a
              href="#"
              className="transition hover:text-[#1d1d1f] hover:underline"
            >
              Privacy Policy |
            </a>
            <a
              href="#"
              className="transition hover:text-[#1d1d1f] hover:underline"
            >
              Terms of Use  |
            </a>
            <a
              href="#"
              className="transition hover:text-[#1d1d1f] hover:underline"
            >
              Sales and Refunds |
            </a>
            <a
              href="#"
              className="transition hover:text-[#1d1d1f] hover:underline"
            >
              Legal |
            </a>
            <a
              href="#"
              className="transition hover:text-[#1d1d1f] hover:underline"
            >
              Site Map
            </a>
            <a
              href="#"
              className="ml-auto transition hover:text-[#1d1d1f] hover:underline"
            >
              United States
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
