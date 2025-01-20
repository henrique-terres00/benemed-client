import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaInstagram } from 'react-icons/fa';

interface InstagramPost {
  id: string;
  media_url: string;
  permalink: string;
  caption?: string;
  thumbnail_url?: string;
}

interface InstagramFeedProps {
  username: string;
  limit?: number;
}

const InstagramFeed = ({ username, limit = 5 }: InstagramFeedProps) => {
  const [posts, setPosts] = useState<InstagramPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        // TODO: Implementar chamada real à API do Instagram
        // Por enquanto, usando dados mockados
        const mockPosts: InstagramPost[] = [
          {
            id: '1',
            media_url: '/instagram/instagram-1.png',
            permalink: 'https://www.instagram.com/p/DEGIYB5SRfa/',
          },
          {
            id: '2',
            media_url: '/instagram/instagram-2.png',
            permalink: 'https://www.instagram.com/p/DDiL3-Jyu1o/',
          },
          {
            id: '3',
            media_url: '/instagram/instagram-3.png',
            permalink: 'https://www.instagram.com/p/DDuwsuMSAOL/',
          },
          {
            id: '4',
            media_url: '/instagram/instagram-4.png',
            permalink: 'https://www.instagram.com/p/DD0AdRMyKyk/',
          },
          {
            id: '5',
            media_url: '/instagram/instagram-5.png',
            permalink: 'https://www.instagram.com/p/DE8E-4_S1eC/',
          }
        ];

        setPosts(mockPosts);
        setLoading(false);
      } catch (err) {
        setError('Erro ao carregar posts do Instagram');
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-64">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#38B6FF]"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-center text-red-500 p-4">
        {error}
      </div>
    );
  }

  return (
    <div className="w-full px-4 py-8">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold text-[#8566FB]">@{username}</h2>
        <a
          href={`https://instagram.com/${username}`}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 text-[#8566FB] hover:text-[#38B6FF] transition-colors"
        >
          <FaInstagram className="text-2xl" />
          <span className="hidden sm:inline">Seguir no Instagram</span>
        </a>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
        {posts.slice(0, limit).map((post) => (
          <motion.a
            key={post.id}
            href={post.permalink}
            target="_blank"
            rel="noopener noreferrer"
            className="relative group overflow-hidden rounded-lg aspect-square"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
          >
            <img
              src={post.media_url}
              alt={post.caption || 'Instagram post'}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 transition-all duration-300 flex items-center justify-center">
              <FaInstagram className="text-white text-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
          </motion.a>
        ))}
      </div>
    </div>
  );
};

export default InstagramFeed;
