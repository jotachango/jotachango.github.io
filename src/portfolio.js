/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 1500 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "jotachango",
  title: "Juan Francisco Chango Perugachi",
  subTitle: emoji(
    "📱 Senior Mobile Developer & Kotlin Multiplatform Expert 🚀 Building high-quality Android & iOS apps with a deep passion for clean architecture, performance, and user experience."
  ),
  resumeLink:
    "https://drive.google.com/file/d/1ofFdKF_mqscH8WvXkSObnVvC9kK7Ldlu/view?usp=sharing",
  displayGreeting: true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/jotachango",
  linkedin: "https://www.linkedin.com/in/jotachango/",
  gmail: "jfchangop@gmail.com",
  researchgate: "https://www.researchgate.net/profile/Juan_Chango",
  medium: "https://medium.com/@jotachango",
  display: true // Set true to display this section
};

// Skills Section

const skillsSection = {
  title: "What I Do",
  subTitle: "MULTIPLATFORM MOBILE DEVELOPER | ANDROID & iOS | KOTLIN EXPERT",
  skills: [
    emoji("⚡ Build high-performance Android & iOS apps with Kotlin Multiplatform"),
    emoji("⚡ Experience with modern web tech (Vue.js)"),
    emoji("⚡ Research & development in High-Performance Computing and Python for AI solutions")
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "kotlin",
      fontAwesomeClassname: "fab fa-android"
    },
    {
      skillName: "swift",
      fontAwesomeClassname: "fab fa-swift"
    },
    {
      skillName: "vuejs",
      fontAwesomeClassname: "fab fa-vuejs"
    },
    {
      skillName: "python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "java",
      fontAwesomeClassname: "fab fa-java"
    },
    {
      skillName: "HPC",
      fontAwesomeClassname: "fa fa-microchip"
    },
    {
      skillName: "data-science",
      fontAwesomeClassname: "fa fa-flask"
    }
  ],
  display: true
};


// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Universidad de Chile 🇨🇱",
      logo: require("./assets/images/uchileLogo.png"),
      subHeader: "PhD in Computer Science (On Hold)",
      duration: "March 2021 – Present (on hold)",
      desc: "Awarded a prestigious scholarship to extend my Master's research in high-performance computing for large-scale acoustic simulations. The program was paused due to the COVID-19 pandemic, but it laid the foundation for future advancements in GPU-accelerated numerical methods.",
      descBullets: [
        "📊 Planned research on scaling adaptive numerical methods for 3D acoustics simulations across distributed HPC environments.",
        "⚙️ Intended to leverage and extend GPU, CUDA, and parallel computing expertise developed during my MSc thesis.",
        "🔬 Aimed to contribute novel computational methods for real-time and near-real-time acoustic modeling."
      ]
    },
    {
      schoolName: "Universidad Austral de Chile (UACh) 🇨🇱",
      logo: require("./assets/images/uachLogo.png"),
      subHeader: "MSc. in Computer Science",
      duration: "March 2017 – December 2019",
      desc: "Specialized in Data Science and High Performance Computing (HPC), with an emphasis on computational acoustics and GPU optimization. My work combined finite element methods, large-scale numerical simulations, and algorithmic performance tuning for scientific computing.",
      descBullets: [
        "🎼 Implemented FEM-based simulations of musical instruments in ANSYS, optimizing execution with NVIDIA GPU acceleration.",
        "🐍 Designed and improved numerical solvers for acoustic wave propagation using Python, C++, and CUDA for massive datasets.",
        "📄 Published and presented research in peer-reviewed conferences; full research profile is available on ResearchGate."
      ]
    },
    {
      schoolName: "Universidad de las Américas – UDLA 🇪🇨",
      logo: require("./assets/images/udlaLogo.jpeg"),
      subHeader: "BSc. in Acoustical Engineering",
      duration: "September 2009 – March 2015",
      desc: "Focused on Digital Signal Processing (DSP) and embedded systems while exploring software development and data science through self-study. My projects merged acoustics engineering with electronics and real-time data processing.",
      descBullets: [
        "🤖 Built the 'Sabine Robot' using PIC microcontrollers, ultrasonic sensors, and MATLAB for real-time environmental mapping.",
        "🔊 Programmed DSP algorithms (filters, convolutions, FFTs) on Texas Instruments TMS320C6713, integrating it with Raspberry Pi for real-time audio analysis.",
        "📚 Completed over a year of self-directed learning in software development and data science via Coursera, expanding my engineering expertise into computing."
      ]
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true,
  experience: [
    {
      Stack: "Android (Latest Features & Jetpack Components)",
      progressPercentage: "90%"
    },
    {
      Stack: "Kotlin Multiplatform",
      progressPercentage: "70%"
    },
    {
      Stack: "Swift & iOS",
      progressPercentage: "60%"
    },
    {
      Stack: "Python (AI & HPC)",
      progressPercentage: "55%"
    },
    {
      Stack: "Vue.js & TypeScript",
      progressPercentage: "50%"
    },
    {
      Stack: "Databases & Backend",
      progressPercentage: "40%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Senior Mobile Software Engineer",
      company: "Falabella (Chile) 🇨🇱",
      companylogo: require("./assets/images/falabellaLogo.jpeg"),
      date: "June 2023 – Present",
      desc: "Building and optimizing the Falabella Android app for millions of LATAM users, collaborating with teams across regions.",
      descBullets: [
        "📱 Developed and launched new Kotlin-based Android features, integrating with secure backend services.",
        "🚀 Improved performance and user experience while coordinating cross-regional teams as a digital nomad.",
        "🔒 Applied best practices in app security, authentication, and data protection."
      ]
    },
    {
      role: "Senior Mobile Developer (Consultant)",
      company: "TacTech (Chile) 🇨🇱",
      companylogo: require("./assets/images/tactechLogo.jpeg"),
      date: "May 2022 – June 2023",
      desc: "Consulted for Falabella LATAM, delivering Android features and maintaining large-scale retail apps.",
      descBullets: [
        "💻 Built and refactored Android components using Kotlin, Dagger, and modern architectures.",
        "📊 Optimized app performance, wrote robust unit tests, and integrated cloud features via Firebase & GCP.",
        "🛠 Coordinated cross-team development to ensure scalability and maintainability of apps."
      ]
    },
    {
      role: "Mobile Developer",
      company: "NTT DATA Europe & LATAM (Chile) 🌐",
      companylogo: require("./assets/images/nttdataLogo.jpeg"),
      date: "Nov 2020 – May 2022",
      desc: "Developed secure, high-performance features for Scotiabank Go App.",
      descBullets: [
        "📱 Implemented Kotlin/Java features with MVVM/MVI and dependency injection (Dagger, Hilt).",
        "🛡 Enhanced app security, managed production releases, and integrated new Android libraries.",
        "🔍 Researched and implemented modern Android components to improve maintainability and performance."
      ]
    },
    {
      role: "Software Developer",
      company: "SoyMomo (Chile) 🧸",
      companylogo: require("./assets/images/soymomoLogo.png"),
      date: "Oct 2019 – Nov 2020",
      desc: "Led Android development for child-friendly devices with AI safety features.",
      descBullets: [
        "📲 Built Kotlin-based apps with TensorFlow Lite for inappropriate content detection.",
        "🔒 Designed secure parental controls and supported cloud backend development.",
        "🧪 Implemented robust testing pipelines and modern architectures (MVC/MVP/MVVM) for scalability."
      ]
    },
    {
      role: "Software Developer",
      company: "Talov (Ecuador) 🇪🇨",
      companylogo: require("./assets/images/talovLogo.jpg"),
      date: "Aug 2017 – Aug 2019",
      desc: "Developed Android and AI-driven accessibility solutions for sign language recognition.",
      descBullets: [
        "🤖 Created real-time ML apps in Kotlin/Java, training models with IBM Watson.",
        "⚡ Applied CUDA and C++ on GPU clusters for optimized mobile ML performance.",
        "✋ Led model optimization and R&D efforts to ensure deployment-ready mobile ML solutions."
      ]
    },
    {
      role: "Assistant Research Engineer",
      company: "Universidad Austral de Chile (Chile) 🎓",
      companylogo: require("./assets/images/uachLogo.png"),
      date: "Apr 2018 – Apr 2019",
      desc: "Performed HPC-accelerated acoustic simulations for research projects.",
      descBullets: [
        "🎼 Simulated acoustics using ANSYS, Python, MATLAB, C++ and CUDA on NVIDIA GPUs.",
        "📈 Optimized FEM/FDTD models for faster, large-scale computational experiments.",
        "⚙️ Developed high-performance tools for acoustic analysis and research automation."
      ]
    }
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
  subtitle: "SOME STARTUPS AND COMPANIES THAT I HELPED TO CREATE THEIR TECH",
  projects: [
    {
      image: require("./assets/images/saayaHealthLogo.webp"),
      projectName: "Saayahealth",
      projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      footerLink: [
        {
          name: "Visit Website",
          url: "http://saayahealth.com/"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/nextuLogo.webp"),
      projectName: "Nextu",
      projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      footerLink: [
        {
          name: "Visit Website",
          url: "http://nextu.se/"
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
      title: "Google Code-In Finalist",
      subtitle:
        "First Pakistani to be selected as Google Code-in Finalist from 4000 students from 77 different countries.",
      image: require("./assets/images/codeInLogo.webp"),
      imageAlt: "Google Code-In Logo",
      footerLink: [
        {
          name: "Certification",
          url: "https://drive.google.com/file/d/0B7kazrtMwm5dYkVvNjdNWjNybWJrbndFSHpNY2NFV1p4YmU0/view?usp=sharing"
        },
        {
          name: "Award Letter",
          url: "https://drive.google.com/file/d/0B7kazrtMwm5dekxBTW5hQkg2WXUyR3QzQmR0VERiLXlGRVdF/view?usp=sharing"
        },
        {
          name: "Google Code-in Blog",
          url: "https://opensource.googleblog.com/2019/01/google-code-in-2018-winners.html"
        }
      ]
    },
    {
      title: "Google Assistant Action",
      subtitle:
        "Developed a Google Assistant Action JavaScript Guru that is available on 2 Billion devices world wide.",
      image: require("./assets/images/googleAssistantLogo.webp"),
      imageAlt: "Google Assistant Action Logo",
      footerLink: [
        {
          name: "View Google Assistant Action",
          url: "https://assistant.google.com/services/a/uid/000000100ee688ee?hl=en"
        }
      ]
    },

    {
      title: "PWA Web App Developer",
      subtitle: "Completed Certifcation from SMIT for PWA Web App Development",
      image: require("./assets/images/pwaLogo.webp"),
      imageAlt: "PWA Logo",
      footerLink: [
        {name: "Certification", url: ""},
        {
          name: "Final Project",
          url: "https://pakistan-olx-1.firebaseapp.com/"
        }
      ]
    }
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
      url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
      title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
      description:
        "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
    },
    {
      url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
      title: "Why REACT is The Best?",
      description:
        "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: true // Set false to hide this section, defaults to true
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
  number: "+92-0000000000",
  email_address: "saadpasta70@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: true // Set true to display this section, defaults to false
};

const isHireable = false; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

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
