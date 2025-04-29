import React from 'react';
import { Link } from 'react-router-dom';

const PostList: React.FC = () => {
  // 임시 데이터
  const posts = [
    { id: 1, title: '첫 번째 게시글', author: '작성자1' },
    { id: 2, title: '두 번째 게시글', author: '작성자2' },
  ];

  return (
    <div className="post-list-container">
      <h2>게시글 목록</h2>
      <ul>
        {posts.map(post => (
          <li key={post.id}>
            <Link to={`/community/posts/${post.id}`}>
              {post.title} - {post.author}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PostList; 