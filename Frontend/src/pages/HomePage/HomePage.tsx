import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import VideoDetailsPage from './VideoDetailsPage'; // Import the VideoDetailsPage component

// Define an interface for the Video data type
interface Video {
  id: number;
  title: string;
  thumbnail: string;
  description: string;
}

function HomePage() {
  const navigate = useNavigate();
  const [showPopup, setShowPopup] = useState(true);
  const [channelName, setChannelName] = useState('');
  const [channelId, setChannelId] = useState('');
  const [videos, setVideos] = useState<Video[]>([]); // Specify the type of videos

  const handleAddAccount = () => {
    console.log('Adding account:', { channelName, channelId });
    // Simulate loading videos (replace with actual API call)
    // In a real app, you would fetch data from an API
    setVideos(dummyVideos); // Use dummyVideos for simulation
    setShowPopup(false);
  };

  const handleVideoClick = (video: Video) => {
    // Navigate to the video details page
    navigate(`/video/${video.id}`);
  };

  useEffect(() => {
    if (showPopup) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [showPopup]);

  // Dummy videos data (replace with API call)
  const dummyVideos: Video[] = [
    {
      id: 1,
      title: "Video Title 1",
      thumbnail: "https://via.placeholder.com/150",
      description: "Description for Video 1",
    },
    {
      id: 2,
      title: "Video Title 2",
      thumbnail: "https://via.placeholder.com/150",
      description: "Description for Video 2",
    },
    // Add more dummy videos as needed
  ];

  return (
    <div>
      {showPopup ? (
        <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-50">
          <div className="bg-white p-8 rounded shadow-md bg-opacity-80">
            <div className="mb-4">
              <label className="block mb-2">YouTube Channel Name:</label>
              <input
                type="text"
                value={channelName}
                onChange={(e) => setChannelName(e.target.value)}
                className="border border-gray-300 rounded px-4 py-2 w-full"
              />
            </div>
            <div className="mb-4">
              <label className="block mb-2">YouTube Channel ID:</label>
              <div className="flex">
                <span className="bg-gray-200 px-4 py-2 rounded-l border border-gray-300">@</span>
                <input
                  type="text"
                  value={channelId}
                  onChange={(e) => setChannelId(e.target.value)}
                  className="border border-gray-300 rounded-r px-4 py-2 w-full"
                />
              </div>
            </div>
            <div className="flex justify-center">
              <button
                onClick={handleAddAccount}
                className="bg-blue-500 text-white px-4 py-2 rounded mr-2"
              >
                Add Account
              </button>
            </div>
          </div>
        </div>
      ) : (
        <div className="container mx-auto">
          <h1 className="text-2xl font-bold mb-4">YouTube Homepage</h1>
          <div className="grid grid-cols-3 gap-4">
            {videos.map(video => (
              <div key={video.id} className="bg-white rounded-lg overflow-hidden shadow cursor-pointer" onClick={() => handleVideoClick(video)}>
                <img src={video.thumbnail} alt={video.title} className="w-full h-40 object-cover" />
                <div className="p-4">
                  <h2 className="text-lg font-semibold mb-2">{video.title}</h2>
                  <p className="text-gray-600">{video.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default HomePage;