import axios from 'axios';

export default async function handler(req, res) {
    console.log("enter playlist of data in call function of time")
  if (req.method === 'GET') {
    const { playlistId } = req.query;
    const API_KEY = 'YOUR_YOUTUBE_API_KEY';
    const maxResults = 50; // You can adjust this value based on your requirements

    try {
      const response = await axios.get(
        `https://www.googleapis.com/youtube/v3/youtube#playlistItemListResponse`,
        {
          params: {
            part: 'snippet',
            maxResults,
            playlistId,
            key: API_KEY,
          },
        }
      );

      const playlistItems = response.data.items;
      res.status(200).json(playlistItems);
    } catch (error) {
      console.error('Error fetching playlist:', error);
      res.status(500).json({ error: 'Failed to fetch playlist' });
    }
  } else {
    res.status(405).json({ error: 'Method not allowed' });
  }
}
