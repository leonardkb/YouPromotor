import React from 'react';
import { useParams } from 'react-router-dom';

function VideoDetailsPage() {
  const { title, thumbnail, description } = useParams(); // Destructure params

  // Generate the email content using video details
  const emailContent = `
    Hi there,
    
    I wanted to share this video titled "${title}" with you. 
    You can watch it here: [Link to video]

    Description: ${description}
    
    Best regards,
    [Your Name]
  `;

  return (
    <div className="container mx-auto">
      <div className="grid grid-cols-1 gap-4">
        <div className="col-span-1">
          {/* Email-like container */}
          <div className="border border-gray-300 p-4 rounded">
            <div className="flex items-center mb-2">
              <div className="bg-gray-400 w-8 h-8 rounded-full mr-2"></div>
              <div>From: sender@example.com</div>
            </div>
            <p>{emailContent}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default VideoDetailsPage;
