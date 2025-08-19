/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 1800 // Set animation duration as per your animation
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
  instagram: "https://www.instagram.com/jotachango/",
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
  display: true,
  schools: [
    {
      schoolName: "Universidad de Chile 🇨🇱",
      logo: require("./assets/images/uchileLogo.png"),
      subHeader: "PhD in Computer Science (On Hold)",
      duration: "March 2021 – Present (on hold)",
      desc: "Awarded a prestigious scholarship to extend my Master's research in high-performance computing for large-scale acoustic simulations. The program was paused due to the COVID-19 pandemic, but it laid the foundation for future advancements in GPU-accelerated numerical methods.",
      descBullets: [
        "📊 Scalable 3D acoustic simulations on HPC systems",
        "⚙️ Advanced GPU, CUDA & parallel computing",
        "🔬 Novel methods for real-time acoustic modeling"
      ]
    },
    {
      schoolName: "Universidad Austral de Chile (UACh) 🇨🇱",
      logo: require("./assets/images/uachLogo.png"),
      subHeader: "MSc. in Computer Science",
      duration: "March 2017 – December 2019",
      desc: "Specialized in Data Science and High Performance Computing (HPC), with an emphasis on computational acoustics and GPU optimization. My work combined finite element methods, large-scale numerical simulations, and algorithmic performance tuning for scientific computing.",
      descBullets: [
        "🎼 FEM-based simulations of instruments with GPU speedups",
        "🐍 Acoustic solvers in Python, C++ & CUDA",
        "📄 Research published in peer-reviewed venues"
      ]
    },
    {
      schoolName: "Universidad de las Américas – UDLA 🇪🇨",
      logo: require("./assets/images/udlaLogo.jpeg"),
      subHeader: "BSc. in Acoustical Engineering",
      duration: "September 2009 – March 2015",
      desc: "Focused on Digital Signal Processing (DSP) and embedded systems while exploring software development and data science through self-study. My projects merged acoustics engineering with electronics and real-time data processing.",
      descBullets: [
        "🤖 Built 'Sabine Robot' with sensors & MATLAB",
        "🔊 Programmed DSP on TI DSP + Raspberry Pi",
        "📚 Self-learned software dev & data science"
      ]
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true,
  experience: [
    {
      Stack: "Android",
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
  showGithubProfile: "false", // Set true or false to show Contact profile using Github, defaults to true
  display: false // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Publications",
  subtitle: "RESEARCH WORK IN GPU COMPUTING AND ACOUSTIC MODELING",
  projects: [
    {
      image: require("./assets/images/masterthesisPaper.png"), // Replace with actual image if available
      projectName: "Multi-GPU Sound Propagation Modeling",
      projectDesc:
        "Developed a multi-GPU strategy for Adaptive Rectangular Decomposition in wave-based acoustics. Achieved up to 166× speedup over CPU, enabling efficient simulation of large-scale scenes.",
      footerLink: [
        {
          name: "Master Thesis",
          url: "http://dx.doi.org/10.13140/RG.2.2.29968.72968"
        }
      ]
    },
    {
      image: require("./assets/images/arddecompositionPaper2.jpg"), // Replace with actual image if available
      projectName: "GPU-Accelerated Rectangular Decomposition",
      projectDesc:
        "Presented a fast GPU-based algorithm for decomposing 2D scenes into rectangles for sound propagation modeling. Enables real-time simulation of large acoustic environments.",
      footerLink: [
        {
          name: "Conference Paper",
          url: "http://dx.doi.org/10.1109/SCCC49216.2019.8966434"
        }
      ]
    },
    {
      image: require("./assets/images/acousticVibration2Paper.png"), // Replace with actual image if available
      projectName: "Acoustic Vibration in 3D Cavity",
      projectDesc:
        "Implemented FEM acoustic simulation on GPU using CUDA and C++. Compared GPU methods with MATLAB CPU results. Achieved 5× speedup and high accuracy using Jacobi and divide-and-conquer solvers.",
      footerLink: [
        {
          name: "Conference Paper",
          url: "http://dx.doi.org/10.1109/SCCC.2018.8705226"
        }
      ]
    }
  ],
  display: true
};


// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("🚀 Tech Projects & Open Source"),
  subtitle:
    "A showcase of hands-on engineering, research, and open-source contributions—from acoustic simulations to AI-powered tablets and robotics.",

  achievementsCards: [
    {
      title: "🧩 adaptive-boxes",
      subtitle:
        "Python library for rectangular decomposition of 2D binary images. Useful for sound modeling and image segmentation.",
      image: require("./assets/images/adaptiveboxes.png"),
      imageAlt: "Adaptive Boxes",
      footerLink: [
        {
          name: "View on GitHub",
          url: "https://github.com/jotachango/adaptive-boxes"
        }
      ]
    },
    {
      title: "⚡ adaptive-boxes-gpu",
      subtitle:
        "GPU-accelerated version of Adaptive Boxes for efficient sound propagation modeling in 2D environments.",
      image: require("./assets/images/adaptiveboxesgpu.png"),
      imageAlt: "Adaptive Boxes GPU",
      footerLink: [
        {
          name: "View on GitHub",
          url: "https://github.com/jotachango/adaptive-boxes-gpu"
        }
      ]
    },
    {
      title: "💰 Kotkoin",
      subtitle:
        "MVVM-based Kotlin Multiplatform app built with Kotlin & Swift. Retrieves top 10 cryptocurrencies from CoinMarketCap API. Requires free API key.",
      image: require("./assets/images/kotkoin.png"),
      imageAlt: "Kotkoin App",
      footerLink: [
        {
          name: "View on GitHub",
          url: "https://github.com/jotachango/kotcoin-mvvm"
        }
      ]
    },
    {
      title: "🎼 Computational Acoustics",
      subtitle:
        "Simulated musical instruments using ANSYS and GPU-accelerated FEM techniques. Optimized acoustic modeling with CUDA during Master's research.",
      image: require("./assets/images/fem.png"),
      imageAlt: "Computational Acoustics",
      footerLink: [
        {
          name: "YouTube Video",
          url: "https://www.youtube.com/watch?v=zYwKiNzNJNo"
        }
      ]
    },
    {
      title: "🤖 Sabine Robot",
      subtitle:
        "Designed and built an autonomous robot using PIC microcontrollers, ultrasonic sensors, and MATLAB for real-time object mapping.",
      image: require("./assets/images/sabine.png"),
      imageAlt: "Sabine Robot",
      footerLink: [
      ]
    },
    {
      title: "🛡️ SoyMomo Tablet",
      subtitle:
        "Led Android development for child-safe tablets using Kotlin, RxJava, and TensorFlow Lite. Deployed across LATAM and Europe.",
      image: require("./assets/images/momo_tablet.png"),
      imageAlt: "SoyMomo Tablet",
      footerLink: [
        {
          name: "Company Website",
          url: "https://soymomo.com/"
        }
      ]
    },
    {
      title: "🧠 AI Signs Language Recognition",
      subtitle:
        "Led ML research at Talov to develop sign language recognition models. Built Android apps using Kotlin and Java (2017–2019).",
      image: require("./assets/images/speakliz.png"),
      imageAlt: "AI Signs Language Recognition",
      footerLink: [
        {
          name: "Startup Website",
          url: "https://www.youtube.com/watch?v=K7GSwzHvLGg"
        }
      ]
    }
  ],
  display: true
};

// Blogs Section
const blogSection = {
  title: "📜 Certifications & Awards",
  subtitle:
    "A curated list of my technical certifications and global recognitions.",
  displayMediumBlogs: "false",
  blogs: [
    {
      url: "https://portal.securecodewarrior.com/#/stats/6137703d3515140080e6a2e8",
      title: "🥇 1st Place Global Ranking – ChileDF",
      description: "Top global ranking in secure coding challenge."
    },
    {
      url: "",
      title: "🏛️ At Universidad de Chile",
      description: "PhD Program Internal Scholarship."
    },
    {
      url: "",
      title: "🎓 At Universidad Austral de Chile",
      description: "Master Program & Research Assistant Scholarship."
    },
    {
      url: "",
      title: "🏫 At Universidad de las Américas",
      description: "Academic Excellence Scholarship."
    },
    {
      url: "https://www.coursera.org/account/accomplishments/verify/XQCTX579USQJ",
      title: "🎨 Front-End Web UI Frameworks and Tools",
      description: "Learned modern front-end frameworks and tools."
    },
    {
      url: "https://www.coursera.org/account/accomplishments/verify/VERW82C7H3",
      title: "📊 R Programming",
      description: "Gained skills in statistical programming with R."
    },
    {
      url: "https://www.coursera.org/account/accomplishments/verify/ASQFFRPX7S",
      title: "📡 Digital Signal Processing",
      description: "Explored DSP fundamentals and applications."
    },
    {
      url: "https://www.linkedin.com/in/jotachango/details/certifications/", // Replace with actual profile or listing
      title: "📚 Check out more certifications",
      description: "Full list available on my Linkedin profile."
    }
  ],
  display: true
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
    "Discuss a project or just want to say hi? Feel free to reach out!",
  // number: "+92-0000000000",
  email_address: "jfchangop@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: false // Set true to display this section, defaults to false
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
