import React, { useState, useEffect } from 'react';

function HomePage() {
  const [showPopup, setShowPopup] = useState(true);
  const [channelName, setChannelName] = useState('');
  const [channelId, setChannelId] = useState('');

  const handleAddAccount = () => {
    console.log('Adding account:', { channelName, channelId });
    setChannelName('');
    setChannelId('');
    setShowPopup(false);
  };

  useEffect(() => {
    if (showPopup) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [showPopup]);

  return (
    <div>
      {showPopup && (
        <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-50">
          <div className="bg-white p-8 rounded shadow-md bg-opacity-50">
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
      )}
    </div>
  );
}

export default HomePage;
