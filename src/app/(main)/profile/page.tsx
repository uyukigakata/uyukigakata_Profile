import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import { supabase } from '@/utils/supabaseClient';

const ProfilePage = () => {
  const router = useRouter();

  useEffect(() => {
    const checkAuth = async () => {
      const { data } = await supabase.auth.getUser();
      if (!data.user) {
        router.push('/auth/signin');  // ログインしていない場合はリダイレクト
      }
    };

    checkAuth();
  }, [router]);

  return (
    <div>
      <h1>プロフィールページ</h1>
    </div>
  );
};

export default ProfilePage;
