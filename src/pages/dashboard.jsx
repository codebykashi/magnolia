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
        // <div style={{ display: 'flex', minHeight: '100vh' }}>
        // <Sidebar updateMainContent={updateMainContent} />
        // <div style={{ marginLeft: '250px', padding: '20px', paddingTop: '40px', flex: '1', position: 'relative' }}>
        // {mainContent}
        // </div>
        // <div style={{ position: 'fixed', bottom: '20px', right: '20px', color: '#555', fontSize: '12px' }}>
        //     Copyright &copy; AI Institute 2024
        // </div>
        // </div>
        <div style={{ display: 'flex', minHeight: '100vh' }}>
      <Sidebar updateMainContent={updateMainContent} />
      <div
        style={{
          marginLeft: '40px', // Adjust the left margin for left alignment
          padding: '20px',
          paddingTop: '60px', // Adjust the top padding for top spacing
          flex: '1',
          position: 'relative',
        }}
      >
        {mainContent}
      </div>
      <div style={{ position: 'fixed', bottom: '20px', right: '20px', color: '#555', fontSize: '12px' }}>
        Copyright &copy; AI Institute 2024
      </div>
    </div>
    )
}

export default Dashboard
