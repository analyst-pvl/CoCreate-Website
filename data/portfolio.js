// Note: Add Image in public folder then add url as "/ImageName.extn"
// When you are adding a new color, add it in safelist in tailwind.config

const data = [
  // {
  //   name: "Just Books",
  //   description:
  //     "An online book rental & knowledge sharing service with presence across multiple Indian cities",
  //   url: "/JustBooks.png",
  //   ImgHeight: 46,
  //   ImgWidth: 275,
  //   color: "bg-yellow-100",
  // },
  // {
  //   name: "Bonhomia",
  //   description:
  //     "A gourmet coffee products business that gives you the pleasures of being your own Barista",
  //   url: "/Bonhomia.png",
  //   ImgHeight: 106,
  //   ImgWidth: 267,
  //   color: "bg-blue-100",
  // },
  // {
  //   name: "Culture Place",
  //   description:
  //     "A framework for building online educational businesses. Apart from running cultureplace.in we also power several online educational portals",
  //   url: "/CulturePlace.png",
  //   ImgHeight: 107,
  //   ImgWidth: 264,
  //   color: "bg-red-200",
  // },
   {
     name: "Treasure",
     description:
       "A framework for building online educational businesses. Apart from running cultureplace.in we also power several online educational portals",
     url: "/Treasure.png",
     ImgHeight: 139,
     ImgWidth: 254,
     color: "bg-yellow-100",
     link: "https://thetreasure.in",
   },

  // {
  //   name: "TeaminUp",
  //   description:
  //     "A framework for building online educational businesses. Apart from running cultureplace.in we also power several online educational portals",
  //   url: "/teaminup.png",
  //   ImgHeight: 57,
  //   ImgWidth: 258,
  //   color: "bg-yellow-100",
  // },
  // {
  //   name: "Punarva",
  //   description:
  //     "A framework for building online educational businesses. Apart from running cultureplace.in we also power several online educational portals",
  //   url: "/Punarva.png",
  //   ImgHeight: 91,
  //   ImgWidth: 246,
  //   color: "bg-yellow-100",
  // },
  {
    name: "Fond",
    description:
      "Extending the health and lifespan of your pets with smart wearables",
    url: "/Fond.png",
    ImgHeight: 223,
    ImgWidth: 214,
    color: "bg-green-100",
    link: "https://thefond.co/",
  },
  {
    name: "Assert",
    description:
      "Delivering objectively Evidenced Expertise & transforming companies' career page into a 24/7 hiring machine",
    url: "/assert.png",
    ImgHeight: 65,
    ImgWidth: 236,
    color: "bg-green-100",
    link: "https://assertify.me/",
  },
  {
    name: "Consuma",
    description:
      "Al-Powered Market Intelligence platform that generates trends and insights for your business from data across the web",
    url: "/Consuma.png",
    ImgHeight: 50,
    ImgWidth: 250,
    color: "bg-purple-100",
    link: "https://consuma.ai/",
  },
  // {
  //   name: "Frizzle",
  //   description:
  //     "A framework for building online educational businesses. Apart from running cultureplace.in we also power several online educational portals",
  //   url: "/Frizzle.png",
  //   ImgHeight: 60,
  //   ImgWidth: 224,
  //   color: "bg-yellow-100",
  // },
  {
    name: "Abhaya",
    description:
      "Making SMBs around the world secure by reducing vulnerabilities",
    url: "/Abhaya.png",
    ImgHeight: 43,
    ImgWidth: 215,
    color: "bg-blue-100",
    link: "https://www.abhayasecure.com/",
  },
  {
    name: "Smart Chakra",
    description:
      "Smart and effective tyre management system, to make transportation more secure & efficient",
    url: "/SmartChakra.png",
    ImgHeight: 600,
    ImgWidth: 800,
    color: "bg-green-100",
    link: "https://www.smartchakra.co/",
  },
  {
    name: "Zeru",
    description:
      "A Decentralized non-custodial zero collateral crypto lending and borrowing protocol",
    url: "/Zeru.png",
    ImgHeight: 136,
    ImgWidth: 188,
    color: "bg-purple-100",
    link: "https://www.zeru.finance/",
  },
  {
    name: "PhysiFit",
    description:
      "Computer vision enabled digital therapeutics platform accelerating patient rehabilitation",
    url: "/Physifit.png",
    ImgHeight: 50,
    ImgWidth: 205,
    color: "bg-green-100",
    link: "https://www.physi.fit/",
  },
  {
    name: "Scholarit",
    description:
      "Improving the quality & quantity of publications with Artificial Intelligence",
    url: "/Scholarit.png",
    ImgHeight: 38,
    ImgWidth: 212,
    color: "bg-purple-100",
  },
  {
    name: "Placify",
    description:
      "Making campus placements more efficient & intelligent by automating the process and integrating intelligence that the applicants, colleges & companies require",
    url: "/Placify.png",
    ImgHeight: 38,
    ImgWidth: 212,
    color: "bg-green-100",
    link: "https://placify.io/",
  },
  {
    name: "Greenifly",
    description:
      "Helping farmers with reduced effort and higher yield using automated intelligent drones",
    url: "/Greenify.png",
    ImgHeight: 63,
    ImgWidth: 228,
    color: "bg-green-100",
    link: "https://www.greenifly.co/",
  },
  {
    name: "Language Station",
    description:
      "World’s first platform for Social & Cultural Integration of immigrants",
    url: "/LanguageStation.png",
    ImgHeight: 73,
    ImgWidth: 228,
    color: "bg-blue-100",
    link: "https://www.languagestation.co/",
  },
  {
    name: "Greentick",
    description:
      "Low-code, no-code SaaS solution to ensure CXOs have a handle on the quality of the products their organizations are building",
    url: "/Greentick.png",
    ImgHeight: 35,
    ImgWidth: 254,
    color: "bg-green-100",
    link: "https://www.greentick.me/",
  },
  {
    name: "Data Nominee",
    description:
      "An end to end digital assets nominee management platform using Web3.O",
    url: "/Data_Nominee.png",
    ImgHeight: 80,
    ImgWidth: 138,
    color: "bg-purple-100",
    link: "https://datanominee.com/",
  },
  {
    name: "6inc",
    description:
      "An entrepreneur-first virtual incubation platform for startups",
    url: "/6inc.png",
    ImgHeight: 63,
    ImgWidth: 228,
    color: "bg-yellow-100",
    link: "https://6inc.co/",
  },
  {
    name: "Nextinnings",
    description:
      "Helping build self-managed communities for senior citizens where they can learn, explore and have fun",
    url: "/Nextinnings.png",
    ImgHeight: 488,
    ImgWidth: 744,
    color: "bg-purple-100",
  },
  {
    name: "Sharanga",
    description: "Precision Healthcare without compromising patient privacy",
    url: "/Sharanga.png",
    ImgHeight: 71,
    ImgWidth: 256,
    color: "bg-green-100",
    link: "https://sharanga.co/",
  },
  {
    name: "Sustify",
    description:
      "An Al driven SaaS platform for enabling sustainable companies & products",
    url: "/Sustify.png",
    ImgHeight: 71,
    ImgWidth: 256,
    color: "bg-purple-100",
  },
  {
    name: "Bae",
    description:
      "A P2P short-term renting marketplace for creating more sustainable communities that group together to learn and share together",
    url: "/Bae.png",
    ImgHeight: 117,
    ImgWidth: 172,
    color: "bg-green-100",
    link: "https://www.mybae.me/",
  },
  {
    name: "GoLocal",
    description: "Community appliances for authentic & sustainable lifestyle",
    url: "/golocal.png",
    ImgHeight: 116,
    ImgWidth: 76,
    color: "bg-yellow-100",
  },
  {
    name: "Seminar Room",
    description:
      "Bringing purpose to classroom learning - creating a future based on research, passionate employees & innovation",
    url: "/SeminarRoom.png",
    ImgHeight: 214,
    ImgWidth: 156,
    color: "bg-purple-100",
    link: "https://www.seminarroom.in/",
  },
  {
    name: "Wellverse",
    description:
      "A platform to build interesting use cases leveraging wearable & AI",
    url: "/Wellverse.png",
    ImgHeight: 124,
    ImgWidth: 197,
    color: "bg-purple-100",
  },
];

export default data;
