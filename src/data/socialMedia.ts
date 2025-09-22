export interface SocialMediaItem {
  id: string;
  type: 'tweet' | 'youtube';
  url: string;
  date: string;
  title?: string;
  description?: string;
  tags?: string[];
}

export const socialMediaContent: SocialMediaItem[] = [
  {
    id: '1960431568679292984',
    type: 'tweet',
    url: 'https://x.com/josedonato__/status/1960431568679292984',
    date: '23-01-2025',
    tags: ['twitter', 'social']
  },
  {
    id: '1959933751707816336',
    type: 'tweet',
    url: 'https://x.com/josedonato__/status/1959933751707816336',
    date: '21-01-2025',
    tags: ['twitter', 'social']
  },
  {
    id: '1955644599185097084',
    type: 'tweet',
    url: 'https://x.com/josedonato__/status/1955644599185097084',
    date: '09-01-2025',
    tags: ['twitter', 'social']
  },
  {
    id: '1950946396858728912',
    type: 'tweet',
    url: 'https://x.com/josedonato__/status/1950946396858728912',
    date: '27-12-2024',
    tags: ['twitter', 'social']
  },
  {
    id: '1937520605219180593',
    type: 'tweet',
    url: 'https://x.com/josedonato__/status/1937520605219180593',
    date: '20-12-2024',
    tags: ['twitter', 'social']
  },
  {
    id: 'LWUioH_ncQk',
    type: 'youtube',
    url: 'https://www.youtube.com/watch?v=LWUioH_ncQk',
    date: '15-01-2025',
    title: 'Pyth Integration: Real-Time Data + AI',
    description: 'Developed OpenBB\'s first real-time widget using Pyth Network integration, showcasing the future of finance through a combination of real-time data feeds, and AI capabilities.',
    tags: ['openbb', 'pyth', 'ai', 'realtime', 'finance']
  }
];

// Helper function to extract ID from Twitter URL
export function extractTwitterId(url: string): string {
  const match = url.match(/status\/(\d+)/);
  return match ? match[1] : '';
}

// Helper function to extract ID from YouTube URL
export function extractYouTubeId(url: string): string {
  const match = url.match(/(?:youtube\.com\/watch\?v=|youtu\.be\/)([^&\n?#]+)/);
  return match ? match[1] : '';
}

// Helper function to parse date string to Date object for sorting
export function parseDate(dateString: string): Date {
  const [day, month, year] = dateString.split('-').map(Number);
  return new Date(year, month - 1, day);
}