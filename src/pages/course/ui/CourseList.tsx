import React from 'react';
import { Link } from 'react-router-dom';

const CourseList: React.FC = () => {
  // 임시 데이터
  const courses = [
    { id: 1, title: '기초 코스', description: '기초적인 내용을 배웁니다.' },
    { id: 2, title: '중급 코스', description: '중급 내용을 배웁니다.' },
  ];

  return (
    <div className="course-page">
      <h1 className="course-page__title">코스 목록</h1>
      <div className="course-page__list">
        {courses.map(course => (
          <div key={course.id} className="course-card">
            <Link to={`/course/${course.id}`}>
              <h3>{course.title}</h3>
              <p>{course.description}</p>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CourseList; 