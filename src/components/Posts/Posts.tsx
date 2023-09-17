import React, { FC } from 'react'
import styles from './Posts.module.scss';
import { PostType } from '../../types';
import { Post } from '../Post/Post';

type PostsProps = {
  posts: PostType[];
}

export const Posts:FC<PostsProps> = ({posts}) => {
  return (
    <div className={styles.posts}>
      {posts.map((post, index) => (
        <Post post={post} key={index}/>
      ))}
    </div>    
  )
}
