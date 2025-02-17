import project1 from "../assets/projects/portfolio-flutter.jpg";
import project2 from "../assets/projects/yahtzee.jpg";
import project3 from "../assets/projects/flashcards.jpg";
import project4 from "../assets/projects/battleship.jpg";
import project5 from "../assets/projects/todo-app.jpg";
import project6 from "../assets/projects/chicago-crime-app.jpg";
import project7 from "../assets/projects/stack-staging.jpg";
import project8 from "../assets/projects/portfolio-react.jpg";
import project9 from "../assets/projects/realestate.jpg";

export const HERO_CONTENT = `

I am a passionate software developer with expertise in building scalable and high-performance applications. With experience in backend development, API design, and system integration, I have worked extensively with technologies like Java, Spring Boot, MySQL, Redis, and AWS. My goal is to leverage my technical skills and problem-solving abilities to create impactful and efficient software solutions.`;

export const ABOUT_TEXT = `Hi! I am Divya, and I am currently pursuing my Master's in Computer Science at the Illinois Institute of Technology. I am a Software Developer with over three years of experience in designing and deploying scalable microservices architectures using Java and Spring Boot. My expertise includes API development, database management, and cloud technologies.

At Freshworks, I played a key role in integrating a Shopify CRM framework, significantly improving data synchronization and consistency. I also spearheaded the transition of legacy Profile Services to a microservices architecture, enhancing system performance and deployment efficiency.

Beyond backend development, I have experience in frontend technologies like React and Ember.js, as well as data-driven projects. I built a predictive machine learning model for Chicago crime data analysis and developed a real estate price prediction tool.

I am passionate about solving complex problems, optimizing performance, and contributing to impactful projects. While I am away from coding, I enjoy gardening, watching series, and gaming.

Currently, I am seeking full-time Software Developer roles. Feel free to connect with me via email at divyakampalli.cs@gmail.com.
`;

export const EXPERIENCES = [
  {
    year: "August 2020 - July 2023",
    role: "Software Developer",
    company: "Freshworks",
    description: `Developed a Shopify integration framework for Freshsales Suite CRM, enabling seamless integration of apps like Judge.me, Reviews.io, and Shiprocket with real-time synchronization of customer reviews and shipping data. Additionally, modernized the legacy Profile Services system with a microservices architecture, enhanced webform tracking and social media campaign modules, reduced L2 ticket volume by 80% through proactive issue resolution, and led Agile sprint meetings and Java code reviews to improve development quality and collaboration.`,
    technologies: [
      "Java",
      "Spring Boot",
      "MySql",
      "EmberJs",
      "Redis",
      "Kafka",
      "Git",
      "AWS",
    ],
  },
  {
    year: "March 2020 - June 2020",
    role: "Software Development Intern",
    company: "Hubstream",
    description: `Contributed to the development of a centralized investigation management system that enhances intelligence-led policing for law enforcement agencies. 
    Designed and implemented customizable workflows and automated alerts, which prioritized critical tasks and streamlined operational efficiencies across multiple investigative units.`,
    technologies: [".NET", "React.js", "Selenium"],
  },
  {
    year: "March 2019 - September 2019",
    role: "Data Science Intern",
    company: "IPSG Systems",
    description: `Worked with fashion retail data, focusing on data cleaning, trend analysis, and pattern identification using R programming. Conducted exploratory data analysis to uncover sales patterns and seasonal trends, enabling data-driven decision-making. Developed visualizations and statistical models to predict consumer demand and optimize inventory management. Collaborated with stakeholders to refine data pipelines, ensuring accurate and efficient data processing for business insights.`,
    technologies: ["R Programming", "MySQL", "Python"],
  },
];

export const EDUCATION = [
  {
    year: "August 2023 - Present",
    collegeName: "Illinois Institute of Technology",
    subjects: [
      "Computer Networks",
      "Machine Learning",
      "Science of Programming",
      "BigData",
      "Information Security",
      "Advanced Database Organization",
      "Mobile Applications Development",
      "Software Project Management",
      "Data Preparation and Analysis",
      "Software Quality Management",
    ],
  },
  {
    year: "September 2017 - August 2021",
    collegeName: "Anna University",
    subjects: [
      "Programming with C",
      "Java and Python",
      "Data Structures",
      "Database Management Systems",
      "Operating Systems",
      "Computer Architecture",
      "Cloud Computing",
      "Computer Networks",
      "Design and Analysis of Algorithms",
    ],
  },
];
export const PROJECTS = [
  {
    title: "Portfolio-Flutter",
    image: project1,
    description:
      "Developed a simple yet effective cross-platform portfolio application using Flutter, designed to run seamlessly on desktop, mobile, iPad, and web. The app consists of a single screen that presents my professional experience, skills, and projects in a clean and visually appealing manner. Focused on creating a responsive UI to ensure an optimal viewing experience across different devices.",
    technologies: ["Flutter", "Dart"],
  },
  {
    title: "Yahtzee Game",
    image: project2,
    description:
      "Developed a digital version of the classic dice game Yahtzee using Flutter, providing a seamless gaming experience across desktop, mobile, iPad, and web. The game includes dice rolling mechanics, score calculations, and an intuitive user interface for easy gameplay. Designed a responsive layout to ensure smooth interaction on different screen sizes. Implemented game logic to handle turn-based scoring and validation of different Yahtzee combinations.",
    technologies: ["Flutter", "Dart"],
  },
  {
    title: "Flashcards App",
    image: project3,
    description:
      "Developed a cross-platform flashcards application using Flutter, designed for mobile, desktop, and iPad. The app allows users to create, manage, and review flashcards for effective learning. Integrated a NoSQL database for efficient data storage and retrieval, ensuring a smooth user experience. Implemented a responsive UI to adapt seamlessly across different screen sizes, making learning accessible on any device.",
    technologies: ["Flutter", "Dart"],
  },
  {
    title: "Battleships Game",
    image: project4,
    description:
      "Developed a multiplayer Battleships game using Flutter, allowing users to play against AI or other players over a server. The app features a login and registration system for user authentication. Players can view available opponents in a dashboard and join open games hosted on a server. Implemented smooth game mechanics, including ship placement, turn-based attacks, and real-time updates. Designed a responsive UI to ensure a seamless experience across different devices.",
    technologies: ["Flutter", "Dart", "Firebase"],
  },
  {
    title: "TODO App",
    image: project5,
    description:
      "Developed a multiplayer Battleships game using Flutter, allowing users to play against AI or other players over a server. The app features a login and registration system for user authentication. Players can view available opponents in a dashboard and join open games hosted on a server. Implemented smooth game mechanics, including ship placement, turn-based attacks, and real-time updates. Designed a responsive UI to ensure a seamless experience across different devices.",
    technologies: ["Flutter", "Dart", "Hive"],
  },
  {
    title: "Chicago Crime Analysis",
    image: project6,
    description:
      "Developed a predictive model that forecasts crime hotspots in Chicago with 87% accuracy, aiding law enforcement in optimizing patrol routes and improving public safety. Leveraged time series analysis to identify crime patterns, reducing police response time by 20% through data-driven decision-making. Built an interactive ShinyApp dashboard for real-time crime trend visualization, integrating MySQL for efficient data storage and retrieval. Applied advanced machine learning techniques to enhance crime prediction capabilities.",
    technologies: [
      "R Programming",
      "ShinyApp",
      "MySQL",
      "Time Series Analysis",
      "ggplot2",
      "Machine Learning",
    ],
  },
  {
    title: "Stack Staging Management System",
    image: project7,
    description:
      "Designed and developed an internal Stack Staging Management System to track real-time stack availability using AWS login data. Automated the update process for deployed frontend and backend branches, enhancing workflow efficiency for internal teams. Integrated Spring Boot for backend services, Ember.js for a responsive UI, and MySQL for structured data storage. The system streamlined staging environment management, reducing manual intervention and improving development lifecycle efficiency.",
    technologies: ["Spring Boot", "Java", "Ember.js", "MySQL", "AWS"],
  },
  {
    title: "Portfolio-React",
    image: project8,
    description:
      "Developed and deployed a responsive portfolio website using React.js and Tailwind CSS, ensuring a sleek and modern UI. Implemented Framer Motion for smooth animations, enhancing user experience with dynamic transitions. Utilized JSON for structured data management, enabling easy content updates. Hosted on Vercel for fast and reliable performance. The portfolio showcases projects, skills, and experience, providing an engaging way to present my work.",
    technologies: [
      "React.js",
      "Tailwind CSS",
      "Framer Motion",
      "JSON",
      "Vercel",
    ],
  },

  {
    title: "Realestate House Price Prediction",
    image: project9,
    description:
      "Developed a machine learning model that predicts real estate prices with 91% accuracy, providing valuable market insights. Designed an interactive web UI using React.js, allowing users to input features like bedrooms, bathrooms, and area to estimate property prices. Leveraged MySQL for efficient data storage and ggplot for visualizing price trends. This project helps homebuyers and investors make data-driven decisions in the housing market.",
    technologies: ["Python", "ggplot", "MySQL", "React.js"],
  },
];

export const CONTACT = {
  address: "Chicago, Illinois ",
  phoneNo: "+1 312 885 9732",
  email: "divyakampalli.cs@gmail.com",
};
