import React from 'react';
import PostList from '@/pages/community/ui/PostList/PostList';

export const CommunityPage = () => {
  return (
    <div className="community-page">
      <div className="community-header">
        <h1>커뮤니티</h1>
        <p>골프 이야기를 나누는 공간입니다.</p>
      </div>
      <PostList />
    </div>
  );
}; 