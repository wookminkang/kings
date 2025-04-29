import { useState, useEffect } from 'react';
import { Post } from './types';

export const usePostList = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        // TODO: API 호출 로직 구현
        const mockPosts: Post[] = [
          {
            id: '1',
            title: '첫 번째 포스트',
            excerpt: '첫 번째 포스트의 내용입니다.',
            author: '작성자1',
            date: '2024-03-20'
          },
          // 더 많은 mock 데이터 추가 가능
        ];
        setPosts(mockPosts);
        setLoading(false);
      } catch (err) {
        setError(err instanceof Error ? err.message : '포스트를 불러오는데 실패했습니다.');
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);

  return { posts, loading, error };
}; 