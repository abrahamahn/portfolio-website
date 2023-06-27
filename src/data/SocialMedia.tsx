import React from 'react';
import { FiLinkedin, FiGithub, FiTwitter } from 'react-icons/fi';
import MediumIcon from '../components/icons/social/Medium';

interface SocialMediaItem {
  iconName: React.ReactNode;
  link: string;
}

const SocialMediaData: SocialMediaItem[] = [
  {
    iconName: <FiGithub color="#888888" />,
    link: 'https://www.github.com/abrahamahn',
  },
  {
    iconName: <FiLinkedin color="#888888" />,
    link: 'https://www.linkedin.com/in/abrahamahn/',
  },
  {
    iconName: <FiTwitter width="24px" height="24px" color="#888888" />,
    link: 'https://twitter.com/satmorningrain',
  },
  {
    iconName: <MediumIcon width="24px" height="24px" color="#888888" />,
    link: 'https://medium.com/@abrahamahn',
  },
];

export default SocialMediaData;
