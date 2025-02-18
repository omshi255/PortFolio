
/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Swati Sen",
  title: "Hi all, I'm Swati",
  subTitle: emoji(
    "A passionate Full Stack Software Developer 🚀 having an experience of building Web applications with JavaScript / Reactjs / Nodejs / Python and some other cool libraries and frameworks."
  ),
  resumeLink: "https://aqua-hedi-74.tiiny.site/?mode=suggestions", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/omshi255",
  linkedin: "https://www.linkedin.com/in/swati-sen-137aa8269/",
  gmail: "swati356sen@gmail.com",
  facebook: "https://www.facebook.com/profile.php?id=61572762159461",
  stackoverflow: "https://stackoverflow.com/users/29689473/swati-sen",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "CRAZY FULL STACK DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK",
  skills: [
    emoji(
      "⚡ Develop highly interactive Front end / User Interfaces for your web and mobile applications"
    ),
    emoji("⚡ Progressive Web Applications ( PWA ) in normal and SPA Stacks"),
    emoji("⚡ Integration of third party services such as  Digital Ocean")
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "HTML",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "CSS,CSS3",
      fontAwesomeClassname: "fab fa-css3-alt"
    },

    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "reactjs",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "nodejs",
      fontAwesomeClassname: "fab fa-node"
    },

    {
      skillName: "sql-database",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "mongoDB",
      fontAwesomeClassname: "fas fa-database"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName:
        "Swami Vivekanand Group Of Institutions Indore Madhya Pradesh",
      logo: require("./assets/images/svcelogo.png"),
      subHeader: "Bachelor of Technology in Computer Science and Engineering ",
      duration: "nov 2022 - march 2026",
      desc: "Currently I am in my 6th sem 3rd year",
      descBullets: [
        "Joining SVCE (2022): Enrolled in the 3rd-year program, eager to embark on a transformative educational journey.",
        "Academic Pursuit: Pursued a rigorous curriculum focused on computer science, full-stack development, and emerging technologies",
        "Hands-on Learning: Participated in numerous practical projects involving Python, Django, React, and other technologies",
        "Collaborative Projects: Worked on several group projects, fostering teamwork and learning to manage real-world software development",
        "Career Development: Focused on career growth by building my portfolio and preparing for job interviews, especially in full-stack development.",
        "Looking Ahead (2026): Excited about transitioning into the professional world with a solid technical foundation, real-world experience, and a strong network",
    
      ]
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Frontend/Design", //Insert stack or technology you have experience in
      progressPercentage: "90%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Backend",
      progressPercentage: "70%"
    },
    {
      Stack: "Programming",
      progressPercentage: "60%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Fresher",
      company: " Complete fresher",
      companylogo: require("./assets/images/swati.png"),
      
    },
   
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Big Projects",
  subtitle: "i have created some osm projects",
  projects: [
    {
      image: require("./assets/images/propertyvista.png"),
      projectName: "PropertyVista",
      projectDesc:
        "SmartRealty is a modern real estate platform built with Django (backend) and React.js (frontend) that connects buyers, sellers, and renters through a seamless online experience. It enables users to buy, sell, or rent properties with detailed listings, location-based property search powered by Google Maps API, and AI-powered property price estimation. The platform also offers features like live chat between buyers and sellers, real-time notifications for new listings, and secure online transactions for booking properties. With user authentication (JWT & Firebase), wishlist and property comparison, and an admin dashboard for listing approvals, SmartRealty ensures a smooth and efficient real estate transaction experience for all users.",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://github.com/omshi255/PropertyVista-mainRealEstate"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/cse.png"),
      projectName: "BTechInfo",
      projectDesc:
        "BTechInfo Hub is a responsive educational website built using HTML, CSS, and JavaScript, designed to provide essential information about B.Tech courses, specializations, career opportunities, and placement guidance. It serves as a one-stop resource where students can explore semester-wise syllabus, study materials, job and internship listings, placement preparation (Aptitude, DSA, Coding), recommended certifications, and the latest industry trends. With a modern and intuitive UI, the platform offers search and filter options, dynamic content display, and interactive animations to enhance user experience and accessibility",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://vishalpanwar67.github.io/Vistara_BTechInfo_MiniProject/"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "HackerRank",
      subtitle:
        "Certified sql - HackerRank",
      image: require("./assets/images/hackerrank.png"),
      imageAlt: "Google Code-In Logo",
      footerLink: [
        {
          name: "Certification",
          url: "https://www.hackerrank.com/certificates/9d10e18154d7"
        }
       
      ]
    },
    {
      title: "HackerRank",
      subtitle:
        "Software Engineering Intern - Certified in React.js (HackerRank)",
      image: require("./assets/images/hackerrank.png"),
      imageAlt: "Google Assistant Action Logo",
      footerLink: [
        {
          name: "Certification",
          url: "https://www.hackerrank.com/certificates/d67feb3f41dd"
        }
      ]
    },

  ],
  display: true // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://codewave6789.blogspot.com/2025/02/the-evolution-of-software-development.html",
      title: "The Future of Software Development: Trends Every Developer Must Know 🚀",
      description:
        "The tech world is evolving faster than ever, and software development is at the core of this transformation. From AI-powered coding and cloud computing to blockchain and DevOps automation, staying ahead of the latest trends is crucial for developers. In this blog, we explore the key innovations shaping the future of programming and how you can adapt to thrive in this ever-changing landscape. 🚀💻"
    },
    {
      url: "https://codewave6789.blogspot.com/2025/02/title-love-thats-silent-my-one-sided.html",
      title: "A Love That’s Silent: My One-Sided Love Story",
      description:
        "This is the story of a love that bloomed quietly and silently in my heart, a love that was unreturned, yet full of emotion. Despite spending countless moments together, I confessed my feelings, only to be met with rejection. Here, I share the emotional journey of loving someone who doesn’t feel the same."
    },
    {
      url: "https://codewave6789.blogspot.com/2025/02/career-development-in-tech-building.html",
      title: "Navigating Career Development in Tech: Your Path to Success",
      description:
        "Embark on a journey to elevate your career in the ever-evolving tech industry. This guide covers essential strategies for mastering technical skills, staying updated with industry trends, building a portfolio, networking, and more. Whether you're a beginner or looking to advance your career, these actionable tips will help you build a strong foundation and set you on the path to succes"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "Resources: Empowering Your Journey in Tech",
  subtitle: emoji(
    "Programming & Web Development 💻 , Data Structures & Algorithms (DSA) 🔍,Frameworks & Libraries ⚙️,Cloud Computing & DevOps ☁️"
  ),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
    
  ],
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: false // Set false to hide this section, defaults to true
};

// Resume Section
const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to download my resume",

  // Please Provide with Your Podcast embeded Link
  display: true // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "+91-7225966306",
  email_address: "swati356sen@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: true // Set true to display this section, defaults to false
};

const isHireable = true; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable,
  resumeSection
};
