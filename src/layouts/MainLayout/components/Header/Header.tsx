import React from 'react';
import { Logo } from '../../../../ui/Logo/Logo';
import styles from './Header.module.scss';

export const Header = () => {
  return (
    <header className={styles.header}>
      <Logo />
    </header>
  );
};
