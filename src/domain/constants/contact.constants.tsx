import { FaGithub, FaLinkedin } from 'react-icons/fa';
import type { SocialLink } from '../interfaces/contact.interface';

export const EMAIL_ADDRESS = 'jfvazquezbiltre@gmail.com';

export const SOCIAL_LINKS: SocialLink[] = [
  { name: 'GitHub', url: 'https://github.com', icon: <FaGithub /> },
  { name: 'LinkedIn', url: 'https://linkedin.com', icon: <FaLinkedin /> },
];

