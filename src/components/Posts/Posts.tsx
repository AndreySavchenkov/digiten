import React, { FC } from 'react';
import styles from './Posts.module.scss';
import { PostType } from '../../types';
import { Post } from '../Post/Post';

type PostsProps = {
  posts: PostType[];
};

export const Posts: FC<PostsProps> = ({ posts }) => {
  //pattern - Early Return
  if (!posts || posts.length === 0) {
    return (
      <div className={styles.container}>
        <span>Nothing found :(</span>
        <span> Try changing the filter values</span>
      </div>
    );
  }

  return (
    <div className={styles.posts}>
      {posts.map((post, index) => (
        <Post post={post} key={index} />
      ))}
    </div>
  );
};
