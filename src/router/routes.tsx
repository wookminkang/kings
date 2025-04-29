import React from 'react';
import { RouteObject } from 'react-router-dom';
import { HomePage } from '@/pages/home/ui/HomePage';
import { CommunityPage } from '@/pages/community/ui/CommunityPage';
import { ClubPage } from '@/pages/club';
import PostList from '@/pages/community/ui/PostList/PostList';
import PostDetail from '@/pages/community/ui/PostDetail/PostDetail';
import CourseList from '@/pages/course/ui/CourseList';
import CourseDetail from '@/pages/course/ui/CourseDetail';
import Reservation from '@/pages/reservation/ui/Reservation';
import ReservationForm from '@/pages/reservation/ui/ReservationForm';


const routes: RouteObject[] = [
  {
    path: '/',
    element: <HomePage />,
  },
  {
    path: '/club',
    element: <ClubPage />,
  },
  {
    path: '/community',
    element: <CommunityPage />,
    children: [
      {
        path: 'posts',
        element: <PostList />,
      },
      {
        path: 'posts/:id',
        element: <PostDetail />,
      },
    ],
  },
  {
    path: '/course',
    element: <CourseList />,
  },
  {
    path: '/course/:id',
    element: <CourseDetail />,
  },
  {
    path: '/reservation',
    element: <Reservation />,
    children: [
      {
        path: 'form',
        element: <ReservationForm />,
      },
    ],
  },
];

export default routes; 