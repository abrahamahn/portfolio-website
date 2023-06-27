interface PortfolioItem {
  link: string;
  image: string;
  alt: string;
  title: string;
  description: string;
  postedDate: string;
  categories: string[];
  stacks: string[];
}

const PortfolioData: PortfolioItem[] = [
  {
    link: "https://abrahamahn.com/",
    image: "assets/portfolio/portfolio-website.jpg",
    alt: "Portfolio Website",
    title: "Full-Stack Development",
    postedDate: "2023-06-26",
    description:
      "Personal portfolio website for myself, showcasing portfolios, Medium blog posts, social media links, and contact forms with my brief information.",
    categories: ["Web Dev", "Frontend", "UX"],
    stacks: ["React JS", "Typescript", "SCSS", "Javascript", "Tailwind CSS"]
  },
  {
    link: "https://auto-connect.netlify.app/",
    image: "assets/portfolio/auto-connect.jpg",
    alt: "Auto Connect",
    title: "Front-end Development",
    postedDate: "2023-05-24",
    description:
      "Auto Connect is a mobile-first web application that presents a carousel view of used cars for sale, allowing users to browse and filter through various categories.",
    categories: ["Web Dev", "UX", "Frontend"],
    stacks: ["React JS", "Typescript", "CSS", "Javascript"]
  },
  {
    link: "https://transaction-approvals.netlify.app/",
    image: "assets/portfolio/transaction-approval.jpg",
    alt: "Transaction Approvals",
    title: "Full-Stack Development",
    postedDate: "2023-05-08",
    description:
      "Transaction Approval is a mobile-first web application prototype designed to facilitate the approval process for transactions within internal teams of companies. It offers a range of filter options and includes buttons for approving or disapproving transactions.",
    categories: ["Web Dev", "UX", "Frontend"],
    stacks: ["React JS", "Typescript", "CSS", "Javascript"]
  },
  {
    link: "https://blendtune.com/",
    image: "assets/portfolio/blendtune.jpg",
    alt: "Cashrollie",
    title: "Full-stack Development",
    postedDate: "2023-03-14",
    description:
      "Blendtune Music Player is an online music store that provides a diverse catalog of music instrumentals for artists to browse, purchase, and download. Additionally, it features a mini player that allows users to preview the catalogs before making a selection.",
    categories: ["Web Dev", "Frontend"],
    stacks: ["Next JS", "Typescript", "SCSS", "Javascript", "Tailwind CSS"]
  },
  {
    link: "https://cashrollie.com/",
    image: "assets/portfolio/cashrollie.jpg",
    alt: "Cashrollie",
    title: "Business Development",
    postedDate: "2017-06-15",
    description:
      "Cashrollie is a comprehensive music production and publishing company catering to commercial music artists and content creators. As the person in charge, I handle various aspects of the company, including design, marketing, operations, and business campaigns. My responsibilities encompass a wide range of tasks to ensure the success and growth of Cashrollie in the music industry.",
    categories: ["Web Dev", "Frontend", "UX"],
    stacks: ["CSS", "Javascript", "HTML", "Wordpress"]
  },
  {
    link: "https://nickhadim.com/",
    image: "assets/portfolio/nickhadim.jpg",
    alt: "Nick Hadim",
    title: "Front End Design",
    postedDate: "2016-06-15",
    description:
      "Nick Hadim is a prominent commercial real estate company based in Los Angeles, California. In my role, I assumed responsibility for the UI/UX design of the company's website, ensuring an optimal user experience. Additionally, I actively maintained and updated the listings of commercial properties available for rentals and sales, ensuring that the website consistently provided accurate and up-to-date information to clients and potential investors.",
    categories: ["Web Dev", "Frontend", "UX"],
    stacks: ["CSS", "Javascript", "HTML"]
  },
];

export default PortfolioData;