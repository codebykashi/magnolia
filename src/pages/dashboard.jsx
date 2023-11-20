import React, { useState } from 'react'
import { Sidebar } from '../components/Sidebar'
import HomeContent from '../components/HomeContent'
import './_dashboard.css'



const Dashboard = () => {
    document.body.style = 'background: white;';

    const [mainContent, setMainContent] = useState(<HomeContent/>);

    const updateMainContent = (newContent) => {
      setMainContent(newContent);
    };
    
    return(
        <div>
            <Sidebar updateMainContent={updateMainContent} />
            <div style={{ marginLeft: '250px', padding: '20px' }}>
                {mainContent}
            </div>
        </div>
    )
}

export default Dashboard
