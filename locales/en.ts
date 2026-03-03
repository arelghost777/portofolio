export default {
    Navbar: {
        about: "About",
        projects: "Projects",
        contact: "Contact"
    },
    Hero: {
        badge: "Available for new projects",
        subtitle: "Arel — Frontend Developer",
        cta: "View projects",
        scroll: "Scroll"
    },
    About: {
        sectionLabel: "About",

        titleBefore: "Frontend Developer passionate about",
        titleHighlight1: "performance",
        titleMiddle: "and",
        titleHighlight2: "design",

        paragraph1:
        "I build and manage the visual aspects of websites and web applications, ensuring every interface is both aesthetic and intuitive. My goal is to transform complex ideas into seamless digital experiences.",

        paragraph2:
        "I am always looking for new opportunities to collaborate, learn, and grow. If you have a project that matches my profile, let's talk.",

        contactCta: "Contact me",

        skillsTitle: "Technical Expertise"
    },
    contact: {
      title: "Contact",
      header: {
        line1: "Have a project in mind?",
        line2: "Let's talk about it together."
      },
      coordinates: "My coordinates",
      location: {
        label: "Based in Benin",
        availability: "Available for freelance & permanent"
      },
      form: {
        name: {
          label: "Full name",
          placeholder: "John Doe",
          error: "Required",
          minLength: "Minimum 2 characters"
        },
        email: {
          label: "Email",
          placeholder: "your@email.com",
          error: "Required",
          pattern: "Invalid email"
        },
        message: {
          label: "Message",
          placeholder: "Tell me about your project...",
          error: "Required"
        },
        submit: {
          sending: "Sending",
          send: "Send message"
        }
      },
      alerts: {
        success: "Message sent successfully!",
        error: "An error occurred"
      }
    },
    projects: {
      title: "Selected Work",
      header: {
        line1: "Digital solutions crafted with",
        clarity: "clarity",
        and: "and",
        precision: "precision"
      },
      caseStudy: "View case study",
      items: {
        "1": {
          title: "GHOTIK",
          description: "Minimalist shopping experience for gaming consoles.",
          overview: "GHOTIK is an e-commerce landing page I developed to showcase my Frontend Web Development skills. The goal was to create a striking online presence with an optimal user experience across all devices. I drew inspiration from various websites in the same industry and used UI libraries to build a quality user interface. Feel free to check out the project by visiting the live link."
        },
        "2": {
          title: "NFT World",
          description: "Pixel-perfect integration of a high-fidelity mockup.",
          overview: "NFT World is a landing page for a fictional NFT project. I built it using Next.js and Tailwind CSS, focusing on creating a visually appealing and responsive design. The project showcases my ability to translate a high-fidelity design into a functional web page while ensuring optimal performance and user experience. Feel free to explore the live version to see the details and animations in action."
        }
      }
    },
    project: {
      backToProjects: "Back to projects",
      techStack: "Tech Stack",
      directLinks: "Direct Links",
      liveDemo: "Live Demo",
      sourceCode: "Source Code",
      projectDescription: "Project Description",
    },
    footer: {
      signature: "Arel Tohoubi",
      bio: "Frontend Developer specialized in creating clean interfaces and memorable digital experiences.",
      location: {
        title: "Location",
        country: "Benin, West Africa",
        time: "Local Time"
      },
      social: {
        title: "Social"
      },
      bottom: {
        copyright: "© {year} — Handcrafted by Arel",
        backToTop: "Back to Top"
      }
    },
} as const