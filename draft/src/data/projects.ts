import type { ProjectCardProps } from '../components/ProjectCard';
import projectImage from '../assets/IPHONE 14 PRO DEEP PURPLE 7.png';
import faablImage from '../assets/faabl.png';
import boroughImage from '../assets/borough-feature.png';
import caretakerImage from '../assets/caretaker-feature.png';

/**
 * Project data for the portfolio
 * Add or modify projects here to update the portfolio page
 */
export const projects: ProjectCardProps[] = [
    {
        title: "Reap Rewards",
        role: "UI Design",
        dateStart: "Aug 25",
        dateEnd: "Dec 25",
        labels: ["Mobile App", "Credit Card", "FinTech", "UI/UX", "Prototyping"],
        backgroundImage: projectImage,
        link: "/reap-rewards"
    },
    {
        title: "Faabl",
        role: "Product Manager",
        dateStart: "Sep 24",
        dateEnd: "Dec 24",
        labels: ["Product Management", "IoT", "Strategy"],
        backgroundImage: faablImage,
        link: "/faabl"
    },
    {
        title: "Borough",
        role: "Founding Product Designer",
        dateStart: "Jan 23",
        dateEnd: "Dec 23",
        labels: ["Civic Tech", "B2B/Client", "End-to-End", "Product Strategy"],
        backgroundImage: boroughImage,
        link: "/borough"
    },
    {
        title: "Caretaker App",
        role: "Main Designer",
        dateStart: "Current",
        dateEnd: "Ongoing",
        labels: ["Visual Design", "Design System", "UX"],
        backgroundImage: caretakerImage,
        link: "/caretaker-app"
    },
];
