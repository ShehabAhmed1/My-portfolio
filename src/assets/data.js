/**** img ****/
import organica from "../assets/images/organica/organica1.png";
import onlineCourse from "../assets/images/online-course/online-courses1.png";
import realestates from "../assets/images/realestates/realestate1.png";
import fanta from "../assets/images/fanta/fanta1.png";
import resturant from "../assets/images/resturant/resturant1.png";
import cryptex from "../assets/images/cryptex/cryptix1.png";
import note from "../assets/images/note/note1.png";
import kasper from "../assets/images/kasper/kasper.png";
import DarAlquran from "../assets/images/DarAlQuran/DarAlQuran.png";
import typing from "../assets/images/typing/typing.png";
import NoteSystem from "../assets/images/NoteSystem/NoteSystem.png";
import mostafa_001 from "../assets/images/Mostafa_001/mostafa_001.png";
import City_library from "../assets/images/City-Library/city_library.png";
import Educational_platform from "../assets/images/Educational_platform/Educational_platform.png";
import css from "../assets/images/css3.svg";
import js from "../assets/images/javascript.svg";
import react from "../assets/images/react.svg";
import framer from "../assets/images/framer-motion.svg";
import html from "../assets/images/html-5.svg";
import reactQuery from "../assets/images/react-query.svg";
import reactRouter from "../assets/images/react-router.svg";
import tailwindcss from "../assets/images/tailwindcss.svg";
const works = [
  {
    img: Educational_platform,
    title: "Educational Platform",
    description:
      "The Educational Platform is an interactive learning website designed to connect students with educational resources, instructors, and courses in an engaging and modern way. It features a responsive design, smooth animations, and a clean interface that ensures an enjoyable learning experience. Built with React, it provides fast navigation, dynamic content loading, and scalability for future updates.",
    projectLink: "https://educational-platform-alpha.vercel.app/",
    technology: ["Reactjs", "Animation", "All", 2025],
    technologysvg: [
      { name: "html", logo: html },
      { name: "css", logo: css },
      { name: "js", logo: js },
      { name: "react", logo: react },
      { name: "framer", logo: framer },
      { name: "reactRouter", logo: reactRouter },
      { name: "tailwindcss", logo: tailwindcss },
    ],
    startDate: "2025-10-15",
    endDate: "2025-10-21",
    features: [
      "Responsive and visually appealing interface with smooth transitions.",
      "Dynamic navigation and routing using React Router.",
      "Scroll-triggered animations that enhance the user experience.",
      "Clean and modular component structure for scalability.",
      "Modern educational layout with clear course and category sections.",
    ],
    challengesAndSolutions: [
      {
        challenge:
          "Creating scroll-triggered animations that sync with the page movement.",
        solution:
          "Used Framer Motion with React Intersection Observer to achieve precise scroll-based effects.",
      },
      {
        challenge: "Maintaining responsiveness across multiple screen sizes.",
        solution:
          "Utilized flexible CSS Grid and media queries to ensure consistent design on all devices.",
      },
    ],
  },
  {
    img: mostafa_001,
    title: "Mostafa Kamal Portfolio",
    description:
      "A personal portfolio website showcasing Mostafa Kamal's work, skills, and experience. Built using modern React components with smooth animations and clean design. The site highlights different sections including About, Projects, Skills, and Contact, making it easy for recruiters and clients to explore.",
    projectLink: "https://shehabahmed1.github.io/portfolio-mostafa-001/",
    technology: ["Reactjs", "Animation", "All", 2025],
    technologysvg: [
      { name: "html", logo: html },
      { name: "css", logo: css },
      { name: "js", logo: js },
      { name: "react", logo: react },
      { name: "framer", logo: framer },
      { name: "tailwindcss", logo: tailwindcss },
    ],
    startDate: "2025-04-10",
    endDate: "2025-04-13",
    features: [
      "Clean and professional design.",
      "Smooth scrolling and animations using Framer Motion.",
      "Fully responsive layout for all devices.",
      "Organized sections for About, Projects, Skills, and Contact.",
    ],
    challengesAndSolutions: [
      {
        challenge: "Creating a unique portfolio layout without clutter.",
        solution:
          "Used grid-based design and consistent spacing with Tailwind CSS.",
      },
      {
        challenge: "Ensuring fast load time despite animations.",
        solution: "Optimized images and used lazy loading where possible.",
      },
    ],
  },
  {
    img: onlineCourse,
    title: "Online Course Website",
    description:
      "An educational platform offering online courses with categorized lessons and responsive UI. Built with React, it includes course filtering, detailed course pages, and modern interactive components to enhance learning experience for students.",
    projectLink: "https://shehabahmed1.github.io/onlineCourses-Reactjs/",
    technology: ["Reactjs", "Animation", "All", 2025],
    technologysvg: [
      { name: "html", logo: html },
      { name: "css", logo: css },
      { name: "js", logo: js },
      { name: "react", logo: react },
    ],
    startDate: "2025-02-20",
    endDate: "2025-02-24",
    features: [
      "Dynamic course listing with category filters.",
      "Detailed course view with responsive layout.",
      "User-friendly navigation between lessons.",
      "Clean, interactive design.",
    ],
    challengesAndSolutions: [
      {
        challenge: "Organizing dynamic course data.",
        solution: "Created reusable components for course cards and pages.",
      },
      {
        challenge: "Keeping performance smooth across many courses.",
        solution:
          "Used React state efficiently and avoided unnecessary re-renders.",
      },
    ],
  },
  {
    img: organica,
    title: "Organica E-commerce",
    description:
      "A modern e-commerce website for organic products featuring product listing, filtering, cart functionality, and responsive UI. It demonstrates frontend skills in building real-world shopping platforms using clean HTML, CSS, and JavaScript.",
    projectLink: "https://shehabahmed1.github.io/Organica/",
    technology: ["Native", "Static", "All", 2025],
    technologysvg: [
      { name: "html", logo: html },
      { name: "css", logo: css },
      { name: "js", logo: js },
    ],
    startDate: "2025-1-22",
    endDate: "2025-1-25",
    features: [
      "Product listing with filter and sorting options.",
      "Shopping cart and checkout flow.",
      "Fully responsive design.",
      "Attractive product presentation.",
    ],
    challengesAndSolutions: [
      {
        challenge: "Managing dynamic cart updates without a framework.",
        solution: "Used modular JavaScript and DOM manipulation efficiently.",
      },
      {
        challenge: "Designing responsive product cards.",
        solution: "Used CSS Grid and Flexbox with media queries.",
      },
    ],
  },
  {
    img: City_library,
    title: "City_library",
    description:
      "The City Library website is a modern, user-friendly platform designed to help users easily explore books, authors, and categories. It features responsive design, real-time search functionality, animations for a smooth user experience, and utilizes React Query for efficient state management and data fetching.",
    projectLink: "https://shehabahmed1.github.io/City_Library/",
    technology: ["Reactjs", "Animation", "All", 2025],
    technologysvg: [
      { name: "html", logo: html },
      { name: "css", logo: css },
      { name: "js", logo: js },
      { name: "react", logo: react },
      { name: "framer", logo: framer },
      { name: "reactQuery", logo: reactQuery },
    ],
    startDate: "2025-05-20",
    endDate: "2025-05-24",
    features: [
      "Responsive and modern UI with smooth animations.",
      "Real-time search functionality with optimized performance.",
      "Integrated React Query for data fetching and caching.",
      "Dynamic book, author, and category pages.",
    ],
    challengesAndSolutions: [
      {
        challenge: "Handling multiple API calls efficiently.",
        solution:
          "Used React Query to manage caching and prevent redundant network requests.",
      },
      {
        challenge: "Maintaining performance with dynamic search.",
        solution: "Implemented debouncing and optimized state updates.",
      },
    ],
  },
  {
    img: DarAlquran,
    title: "DarAlQuran_System",
    description:
      "DarAlQuran_System is a personalized web-based tool for managing Quran memorization institutes. It includes features for student and teacher registration, attendance tracking, hifz follow-up, and customizable schedules. The interface is clean, responsive, and easy to navigate.",
    projectLink: "https://shehabahmed1.github.io/DarAlQuranSystem/",
    technology: ["Reactjs", "Animation", "All", 2025],
    technologysvg: [
      { name: "html", logo: html },
      { name: "css", logo: css },
      { name: "js", logo: js },
      { name: "react", logo: react },
      { name: "framer", logo: framer },
    ],
    startDate: "2025-03-10",
    endDate: "2025-03-15",
    features: [
      "Student and teacher management system.",
      "Attendance and hifz tracking.",
      "Customizable schedule planner.",
      "Clean admin dashboard and responsive design.",
    ],
    challengesAndSolutions: [
      {
        challenge:
          "Structuring data for multiple user types (students/teachers).",
        solution:
          "Used modular React components with reusable logic for both roles.",
      },
      {
        challenge: "Maintaining clarity with many dashboard sections.",
        solution: "Used card-based layout and consistent UI elements.",
      },
    ],
  },
  {
    img: NoteSystem,
    title: "Note-System",
    description:
      "This is a structured note-taking system designed to allow users to create, edit, and manage notes efficiently. It supports persistent storage and is optimized for both desktop and mobile views, offering a simple and elegant interface.",
    projectLink: "https://shehabahmed1.github.io/NoteSystem/",
    technology: ["Reactjs", "Static", "All", 2025],
    technologysvg: [
      { name: "html", logo: html },
      { name: "css", logo: css },
      { name: "js", logo: js },
      { name: "react", logo: react },
    ],
    startDate: "2025-01-10",
    endDate: "2025-01-12",
    features: [
      "Add, edit, and delete notes.",
      "Persistent storage with localStorage.",
      "Responsive design for mobile and desktop.",
      "Clean, minimal UI.",
    ],
    challengesAndSolutions: [
      {
        challenge: "Keeping data after page reload.",
        solution: "Used browser localStorage to persist notes.",
      },
      {
        challenge: "Designing a minimal but functional interface.",
        solution:
          "Used neutral colors and clear typography for focus on content.",
      },
    ],
  },

  {
    img: realestates,
    title: "Real Estates Website",
    description:
      "A real estate listing platform showcasing properties with images, descriptions, and contact information. The site is fully responsive and includes filtering options, making it user-friendly for those searching for real estate online.",
    projectLink: "https://shehabahmed1.github.io/Real-estate/",
    technology: ["Native", "Static", "All", 2025],
    technologysvg: [
      { name: "html", logo: html },
      { name: "css", logo: css },
      { name: "js", logo: js },
    ],
    startDate: "2024-11-20",
    endDate: "2024-11-23",
    features: [
      "Property filtering system.",
      "Attractive image-based layout.",
      "Fully responsive across devices.",
      "Smooth navigation experience.",
    ],
    challengesAndSolutions: [
      {
        challenge: "Displaying property data attractively.",
        solution: "Used card-based grid layout with hover effects.",
      },
      {
        challenge: "Making the filter intuitive.",
        solution: "Used dropdowns and consistent color cues for clarity.",
      },
    ],
  },
  {
    img: resturant,
    title: "Restaurant Website",
    description:
      "A stylish restaurant website with an interactive menu, location information, and responsive layout. Built with React and modern CSS, it reflects good use of component structuring and responsive design techniques.",
    projectLink: "https://shehabahmed1.github.io/restaurant/",
    technology: ["Native", "Static", "All", 2025],
    technologysvg: [
      { name: "html", logo: html },
      { name: "css", logo: css },
      { name: "js", logo: js },
      { name: "react", logo: react },
    ],
    startDate: "2024-10-10",
    endDate: "2024-10-15",
    features: [
      "Interactive food menu and reservation section.",
      "Responsive design suitable for all screens.",
      "Smooth section transitions.",
      "Clean and elegant theme.",
    ],
    challengesAndSolutions: [
      {
        challenge: "Keeping the design both elegant and functional.",
        solution: "Used minimal color palette and well-structured sections.",
      },
      {
        challenge: "Maintaining readability on mobile.",
        solution: "Adjusted typography and spacing for smaller screens.",
      },
    ],
  },
  {
    img: typing,
    title: "typing App",
    description:
      "A simple Game to test your speed in typing a words. It measures how quickly and accurately you can type a given set of words. Built with React and styled using CSS, it gives real-time feedback and speed stats.",
    projectLink: "https://shehabahmed1.github.io/typing-test/",
    technology: ["Native", "Static", "All", 2024],
    technologysvg: [
      { name: "html", logo: html },
      { name: "css", logo: css },
      { name: "js", logo: js },
      { name: "react", logo: react },
    ],
    startDate: "2024-9-01",
    endDate: "2024-9-3",
    features: [
      "Real-time typing speed test.",
      "Instant accuracy and words-per-minute stats.",
      "Simple, distraction-free UI.",
      "Responsive design.",
    ],
    challengesAndSolutions: [
      {
        challenge: "Updating stats in real-time.",
        solution: "Used useState and timers efficiently in React.",
      },
      {
        challenge: "Preventing lag when typing quickly.",
        solution: "Optimized re-render frequency and used key event listeners.",
      },
    ],
  },
];

export { works };
