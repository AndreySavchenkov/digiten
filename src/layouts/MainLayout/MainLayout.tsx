import React, { FC } from 'react'
import styles from './MainLayout.module.scss';
import { Header } from './components/Header/Header';
import { Footer } from './components/Footer/Footer';

type MainLayoutProps = {
  children: React.ReactNode;
}

export const MainLayout:FC<MainLayoutProps> = ({children}) => {
  return (
    <div className={styles.layout}>
      <Header/>
      <div className={styles.main}>
        {children}
      </div>
      <Footer/>
    </div>
  )
}
