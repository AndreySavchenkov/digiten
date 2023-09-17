import React, { FC } from 'react';
import styles from './Post.module.scss';
import { PostType } from '../../types';

type PostProps = {
  post: PostType;
}

export const Post:FC<PostProps> = ({post}) => {
const {title, content, category, date} = post;

  return (
    <article className={styles.post}>
      <div className={styles.content}>
        <span>{title}</span>
        <span>{category}</span>
        <p>{content}</p>
      </div>
      <span>{date}</span>
    </article>
  )
}
