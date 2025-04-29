import React from 'react';
import { Link } from 'react-router-dom';
import { Post } from '../../model/types';
import './PostCard.scss';

interface PostCardProps {
  post: Post;
}

export const PostCard: React.FC<PostCardProps> = ({ post }) => {
  return (
    <Link to={`/posts/${post.id}`} className="post-card">
      <h3>{post.title}</h3>
      <p className="post-excerpt">{post.excerpt}</p>
      <div className="post-meta">
        <span>{post.author}</span>
        <span>{post.date}</span>
      </div>
    </Link>
  );
}; 