import React, {useState} from 'react'
import Preview from './components/Preview';
import HTML from './HTML'
import JS from './JS'
import CSS from './CSS'

const Template = () => {
  const [html, setHtml] = useState('');
  const [css, setCss] = useState('');
  const [js, setJs] = useState('');

  // Function to create and download a file
  const downloadFile = (content, filename, filetype) => {
    const blob = new Blob([content], { type: filetype });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = filename;
    a.click();
    URL.revokeObjectURL(url);  // Clean up the URL object
  };

  // Handlers for downloading each file
  const handleDownloadHTML = () => {
    downloadFile(html, 'index.html', 'text/html');
  };

  const handleDownloadCSS = () => {
    downloadFile(css, 'styles.css', 'text/css');
  };

  const handleDownloadJS = () => {
    downloadFile(js, 'script.js', 'application/javascript');
  };

  return (
    <>
        <div className='text-white w-screen grid grid-cols-3'>
            <div className='bg-gray-900 flex flex-col'>
              <div className='flex items-center justify-around'>
                <p>HTML</p>
                <button onClick={handleDownloadHTML} className="btn">Download HTML</button>
              </div>
              <HTML value= {html} onChange = {(value)=> setHtml(value)}/>      
            </div>
            <div className='bg-gray-900'>
              <div className='flex items-center justify-around'>
                <p>CSS</p>
                <button onClick={handleDownloadCSS} className="btn">Download CSS</button>
              </div>
              <CSS value = {css} onChange = {(value)=> setCss(value)}/>      
            </div>
            <div className='bg-gray-900'>
              <div className='flex items-center justify-around'>
                <p>JavaScript</p>
                <button onClick={handleDownloadJS} className="btn">Download JS</button>
              </div>
              <JS value = {js} onChange = {(value)=> setJs(value)}/>
            </div>
        </div> 

        <div className="p-4">
          <Preview html={html} css={css} js={js} />
        </div>
        
    </>
  )
}

export default Template
