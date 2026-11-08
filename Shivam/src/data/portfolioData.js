import project1 from "../assets/eventsphere.png";
import project2 from "../assets/campusmart.png";
import project3 from "../assets/yschika.png";
import project4 from "../assets/baatcheet.png";
import resumePdf from "../assets/Shivam_Resume.pdf";
import profileImg from "../assets/me.jpeg";

export const portfolioData = {
    personal: {
        name: "Shivam Kumar",
        title: "Full Stack Developer",
        roles: [
            "Full Stack Developer",
            "MERN Stack Developer",
            "Backend Developer",
            "Frontend Developer",
        ],
        bio: "I'm a B.Tech (CSE) 3rd year student from Sandip University, Madhubani. I am a passionate MERN Stack Developer currently exploring full-stack opportunities and learning AI Prompt Engineering.",
        journey: "I started my coding journey in my B.Tech 1st year (2nd semester) with C language, as it helped me understand core programming concepts like variables, loops, conditions, and functions. Later, I completed a MERN Stack internship in Kolkata where I gained industrial experience and built RideIntelliX. After that, I built multiple projects like Yachika, Baatcheet, EventSphere, and CampusMart.",
        email: "shivam123hjp@gmail.com",
        phone: "+91 8002632535",
        location: "India, Bihar",
        profileImage: profileImg,
        resume: resumePdf,
    },
    socials: [
        { name: "GitHub", link: "https://github.com/Shivam16a" },
        { name: "LinkedIn", link: "https://www.linkedin.com/in/shivam-kumar-0a743b322/" },
        { name: "WhatsApp", link: "https://wa.me/918002632535?text=Hello%20Shivam" },
    ],
    projects: [
        {
            title: "EventSphere",
            desc: "EventSphere : Event management system (MERN stack)",
            tech: ["React", "Express", "Node.js", "MongoDB", "React Router", "Bootstrap"],
            link: "https://eventsphare.vercel.app",
            image: project1,
        },
        {
            title: "CampusMart",
            desc: "CampusMart : student resource exchange platform (MERN stack)",
            tech: ["MongoDB", "Express", "React", "Node", "Postman"],
            link: "https://campus-marketplace-dusky.vercel.app",
            image: project2,
        },
        {
            title: "Yachika",
            desc: "Yachika : Leave Application Management System (MERN stack)",
            tech: ["React", "Node", "Express", "Bootstrap", "MongoDB"],
            link: "https://leave-application-management-system.vercel.app",
            image: project3,
        },
        {
            title: "Baatcheet",
            desc: "Baatcheet : Random Chat Application (MERN Stack) under construction",
            tech: ["React", "Node", "MongoDB", "Express", "Socket.io"],
            link: "#",
            image: project4,
        },
    ],
    skills: [
        { name: "HTML5", level: "Expert", icon: "fa-brands fa-html5 text-warning" },
        { name: "CSS3", level: "Expert", icon: "fa-brands fa-css3-alt text-primary" },
        { name: "JavaScript", level: "Advanced", icon: "fa-brands fa-js text-warning" },
        { name: "React", level: "Advanced", icon: "fa-brands fa-react text-info" },
        { name: "Node.js", level: "Intermediate", icon: "fa-brands fa-node text-success" },
        { name: "MongoDB", level: "Intermediate", icon: "fa-solid fa-database text-success" },
        { name: "Express.js", level: "Intermediate", icon: "fa-solid fa-server text-secondary" },
        { name: "Bootstrap CSS", level: "Advanced", icon: "fab fa-bootstrap text-info" },
    ],
    developmentTools: [
        { name: "VS Code", info: "Code Editor", icon: "fa-solid fa-code text-primary" },
        { name: "Git", info: "Version Control", icon: "fa-brands fa-git-alt text-danger" },
        { name: "GitHub", info: "Code Hosting", icon: "fa-brands fa-github text-light" },
        { name: "Postman", info: "API Testing", icon: "fa-solid fa-paper-plane text-warning" },
        { name: "npm", info: "package manager", icon: "fab fa-npm text-danger" },
        { name: "Vercel", info: "Deployment Platform", icon: "fa-solid fa-cloud text-light" },
        { name: "Render", info: "Backend Hosting", icon: "fa-solid fa-server text-info" }
    ]
};

// Cloud fetch helper
export const fetchCloudPortfolioData = async (GAS_URL) => {
    try {
        const response = await fetch(GAS_URL);
        const result = await response.json();
        if (result.status === "success" && result.portfolioData) {
            return result.portfolioData;
        }
    } catch (error) {
        console.error("Cloud fetch error, using fallback data:", error);
    }
    return portfolioData;
};