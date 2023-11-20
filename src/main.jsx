import React from 'react'
import ReactDOM from 'react-dom/client'
import App from "./App.jsx"
import { BrowserRouter } from "react-router-dom"
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css'


// ReactDOM.createRoot(document.getElementById('root')!).render(
//   <React.StrictMode>
//     <BrowserRouter>
//       <App/>
//     </BrowserRouter>
//   </React.StrictMode>,
// )

const rootElement = document.getElementById('root');
if (rootElement) {
  ReactDOM.createRoot(rootElement).render(
    <React.StrictMode>
      <BrowserRouter>
        <App/>
      </BrowserRouter>
    </React.StrictMode>
  );
} else {
  console.error('Root element with id "root" not found.');
}