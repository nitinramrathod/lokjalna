'use client';

import { CacheProvider } from '@emotion/react';
import createCache from '@emotion/cache';

const emotionCache = createCache({
  key: 'css',
  prepend: true, // Ensures styles are inserted before others
});

export function EmotionRegistry({ children }) {
  return <CacheProvider value={emotionCache}>{children}</CacheProvider>;
}