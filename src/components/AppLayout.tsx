'use client'

import { useState, useEffect } from 'react';

import { supabase } from '../utils/supabase/supabase'; // supabase クライアントのインポート


const AppLayout = ({ children }) => {
  

  return (
    <div>
     
      <main>{children}</main>
    </div>
  );
};

export default AppLayout;
