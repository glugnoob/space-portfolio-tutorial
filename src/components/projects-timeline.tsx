import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { Code, Link as ButtonLink, Moon } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "./ui/button";

interface ProjectItemProps {
  icon?: React.ReactNode;
  title: string;
  subHeader: string;
  body?: string;
  link: string;
  buttonIcon?: React.ReactNode;
  buttonText?: string;
}

const PROJECTS: ProjectItemProps[] = [
  {
    link: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    subHeader: "Vite + Three.js Project",
    title: "Space Portfolio",
    icon: <Moon />,
    body: "Using three.js I simulated a solar system where each of the planets navigates the user through my website to check out my past work",
  },
  {
    link: "",
    subHeader: "Lorem ipsum dolor sit amet.",
    title: "Lorem, ipsum dolor.",
  },
  {
    link: "",
    subHeader: "Lorem ipsum dolor sit amet.",
    title: "Lorem, ipsum dolor.",
  },
  {
    link: "",
    subHeader: "Lorem ipsum dolor sit amet.",
    title: "Lorem, ipsum dolor.",
  },
  {
    link: "",
    subHeader: "Lorem ipsum dolor sit amet.",
    title: "Lorem, ipsum dolor.",
  },
  {
    link: "",
    subHeader: "Lorem ipsum dolor sit amet.",
    title: "Lorem, ipsum dolor.",
  },
];

const ProjectsTimeline = () => {
  return (
    <VerticalTimeline
      layout="2-columns"
      lineColor="radial-gradient(circle, rgba(255,0,0,0.4) 0%, rgba(0,0,255,0.4) 50%, rgba(255,0,0,0.2) 100%)"
    >
      {PROJECTS.map((project, i) => {
        const left = i % 2 === 0;

        const icon = project.icon ? project.icon : <Code />;
        const body = project.body
          ? project.body
          : "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam accusamus labore provident. In non vitae natus iusto. Ipsum corporis optio nam eum hic sequi magni modi doloribus debitis. Dolor, deleniti.";
        const buttonIcon = project.buttonIcon ? (
          project.buttonIcon
        ) : (
          <ButtonLink />
        );
        const buttonText = project.buttonText ? project.buttonText : "visit";

        return (
          <VerticalTimelineElement
            contentStyle={{
              background: left
                ? "rgba(0, 0, 255, 0.25)"
                : "rgba(255, 0, 0, 0.2)",
              color: "#fff",
            }}
            contentArrowStyle={{
              borderRight: left
                ? "15px solid rgba(0, 0, 255, 0.25)"
                : "15px solid rgba(255, 0, 0, 0.2)",
            }}
            iconStyle={{
              background: left ? "rgb(150, 0, 100)" : "rgb(33, 150, 243)",
              color: "#fff",
            }}
            icon={icon}
          >
            <h3 className="text-lg font-medium">{project.title}</h3>
            <h4 className="text-sm italic text-gray-400">
              {project.subHeader}
            </h4>
            <p>{body}</p>
            <Link to={project.link}>
              <Button
                variant="secondary"
                className="flex items-center gap-2 mt-5 text-black"
              >
                {buttonIcon}
                <span>{buttonText}</span>
              </Button>
            </Link>
          </VerticalTimelineElement>
        );
      })}
    </VerticalTimeline>
  );
};

export default ProjectsTimeline;
