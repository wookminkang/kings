import React from 'react';
import { useParams } from 'react-router-dom';

const PostDetail: React.FC = () => {
  const { id } = useParams();

  return (
    <div>
      <h2>게시글 상세 {id}</h2>
    </div>
  );
};

export default PostDetail; 