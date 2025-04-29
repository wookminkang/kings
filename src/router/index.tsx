import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Layout } from '@/widgets/Layout/ui/Layout';
import { HomePage } from '@/pages/home/ui/HomePage';
import { ClubPage } from '@/pages/club';
import { CommunityPage } from '@/pages/community/ui/CommunityPage';
import PostList from '@/pages/community/ui/PostList/PostList';
import PostDetail from '@/pages/community/ui/PostDetail/PostDetail';
import CourseList from '@/pages/course/ui/CourseList';
import CourseDetail from '@/pages/course/ui/CourseDetail';
import Reservation from '@/pages/reservation/ui/Reservation';
import ReservationForm from '@/pages/reservation/ui/ReservationForm';

export const AppRoutes: React.FC = () => {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/club" element={<ClubPage />}></Route>
        <Route path="/community" element={<CommunityPage />}>
          <Route index element={<PostList />} />
          <Route path="posts" element={<PostList />} />
          <Route path="posts/:id" element={<PostDetail />} />
        </Route>
        <Route path="/course" element={<CourseList />} />
        <Route path="/course/:id" element={<CourseDetail />} />
        <Route path="/reservation" element={<Reservation />}>
          <Route path="form" element={<ReservationForm />} />
        </Route>
      </Route>
    </Routes>
  );
}; 