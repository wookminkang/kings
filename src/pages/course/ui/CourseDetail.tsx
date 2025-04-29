import React from 'react';
import { useParams } from 'react-router-dom';

const CourseDetail: React.FC = () => {
  const { id } = useParams();

  return (
    <div>
      <h1>코스 상세 {id}</h1>
    </div>
  );
};

export default CourseDetail; 