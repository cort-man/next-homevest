import React from 'react';
import classes from 'styles/components/link.module.scss';
import Link from 'next/link';

interface ILinkProps {
  text: string;
  href: string;
  className?: string;
}

const AppLink: React.FC<ILinkProps> = ({ href, text, className }) => (
  <div className={`${classes.link} ${className}`}>
    <Link href={href}>
      <a className={classes.link__text}>{text}</a>
    </Link>
  </div>
);

export { AppLink };
