// Chatbot.jsx
import React from 'react';
import RedirectButton from './RedirectButton';

const Chatbot_MR = () => {
  return (
    <div>
      <h2>Movie Recommendation Chatbot</h2>
      <RedirectButton url="https://aaii-chat-gpt-movie-recommendation.azurewebsites.net/" text="Visit Azure Website" />
    </div>
  );
};

export default Chatbot_MR;