import { FaJava, FaReact, FaHtml5, FaCss3Alt, FaDocker, FaGitAlt } from 'react-icons/fa';
import { SiJavascript, SiTypescript, SiReact, SiSpring, SiMongodb, SiPostgresql } from 'react-icons/si';
import type { Skill } from '../interfaces/skill.interface';

export const SKILLS: Skill[] = [
  { name: 'Java', icon: <FaJava /> },
  { name: 'JavaScript', icon: <SiJavascript /> },
  { name: 'TypeScript', icon: <SiTypescript /> },
  { name: 'HTML', icon: <FaHtml5 /> },
  { name: 'CSS', icon: <FaCss3Alt /> },
  { name: 'React', icon: <FaReact /> },
  { name: 'React Native', icon: <SiReact /> },
  { name: 'Spring Boot', icon: <SiSpring /> },
  { name: 'MongoDB', icon: <SiMongodb /> },
  { name: 'PostgreSQL', icon: <SiPostgresql /> },
  { name: 'Docker', icon: <FaDocker /> },
  { name: 'Git', icon: <FaGitAlt /> },
];

