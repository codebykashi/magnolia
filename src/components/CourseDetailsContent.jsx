// ContactDetailsContent.jsx
import React from 'react';
import RedirectButton from './RedirectButton'

const ContactDetailsContent = () => {
  return (
    <div>
        <h1>Course Contents: Session 1 — Jan. 8 through Jan. 19, 2024</h1>
        <br/> <br/>
        <h3>Lectures:</h3>
        <p className="indented-list">
            • Day 1 — Jan. 8, 2024 <br/>
            • Day 2 — Jan. 12, 2024 <br/>
            • Day 3 — Jan. 15, 2024 <br/>
            • Day 4 — Jan. 19, 2024 <br/>
        </p>
        <h3>Class Recordings:</h3>
        <p className="indented-list">
            • Day 1 — Jan. 8, 2024 <br/>
            • Day 2 — Jan. 12, 2024 <br/>
            • Day 3 — Jan. 15, 2024 <br/>
            • Day 4 — Jan. 19, 2024 <br/>
        </p>
        <h3>Homework Assignments:</h3>
        <p className="indented-list">
            • Movie Recommendation Use Case <br/>
            • News Analysis <br/>
            • Health Equity <br/>
            • Environmental Sustainability Analysis <br/>
        </p>
        <h3>Student Homework Submission:</h3>
        <p className="indented-list">
            • Last_name_first_name_movie_recommendation_homework <br/>
        </p> <br/>
      <RedirectButton url="https://aaii-chat-gpt-movie-recommendation.azurewebsites.net/" text="Visit MS Teams" />
    </div>
  );
};

export default ContactDetailsContent;