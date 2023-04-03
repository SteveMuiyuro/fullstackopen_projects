import React, { component } from "react";
import Header from "./components/Header";
import Profile from "./components/Profile";
import data from "./data";
import WorkExp from "./components/WorkExp";
import { education } from "./data";
import Education from "./components/Education";
import { skills } from "./data";
import Skill from "./components/Skills";
import "./styles/header.css";
import Personal from "./components/Personalinfo";

export default function App() {
  return (
    <div>
      <Header
        src="https://i.pinimg.com/474x/08/e1/07/08e1074b36d375d4feb3e01da81d9a96.jpg"
        alt="Pic of a Person"
      />

      <Personal
        name={data.name}
        email={data.email}
        contacts={data.contacts}
        linkedin={data.linkedin}
      />
      <Profile profileSum="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus porttitor gravida odio ac tempor. Suspendisse ut elit nisl. Suspendisse efficitur lectus a nulla mollis, id placerat massa ullamcorper. Maecenas pellentesque tempus orci, eu malesuada tortor suscipit sed. Cras sagittis quam ut tristique tristique. Fusce fermentum, turpis et blandit sodales, felis arcu mattis leo, laoreet dignissim urna diam aliquet erat. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus." />

      <WorkExp
        company={data.company}
        title={data.title}
        period={data.period}
        roles=<ul>
          {data.JD.map((role) => (
            <li>{role}</li>
          ))}
        </ul>
      />

      <Education
        school={data.Education.School}
        course={data.Education.Course}
        year={data.Education.Year}
      />

      <Skill
        skill={data.Skills.map((skill) => (
          <li>{skill}</li>
        ))}
      />
    </div>
  );
}
