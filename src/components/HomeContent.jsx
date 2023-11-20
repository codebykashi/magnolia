// HomeContent.jsx
import React from 'react';
import { useAuth } from '../utils/auth'

const HomeContent = () => {
    console.log("trying to load home content")
    const auth = useAuth()
  return (
    <div>
        <h1>Welcome {auth.user}</h1>
        <br/> <br/>
        <p>
            • You can select any of the solution asset to get started: <br/>
        </p>
        <p className="indented-list">
            • Movie Recommendation allows you to customize your movie recommendation solution asset <br/>
            • News Analysis allows you to customize your News Analysis solution asset <br/>
            • Health Equity allows you to customize your Health Equity solution asset <br/>
            • Environment sustainability analysis allows you to customize your solution related to environmental in a chosen geography <br/>
        </p>
        <p>
            • Coach Assistant will allow you to interact with your coaches for any of the solution
            assets <br/>
            • Course Contents let you browse your course content, your course content, submitting
            homework, and provides links for attending lectures
        </p>
    </div> 
  );
};

export default HomeContent;