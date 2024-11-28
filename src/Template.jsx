import React, { useState } from 'react';
import Preview from './components/Preview';
import HTML from './HTML';
import JS from './JS';
import CSS from './CSS';
import JSZip from 'jszip';
import { saveAs } from 'file-saver';
import { Octokit } from '@octokit/rest';

const Template = () => {
  const [html, setHtml] = useState('');
  const [css, setCss] = useState('');
  const [js, setJs] = useState('');

  // Download HTML file
  const downloadHTML = () => {
    const blob = new Blob([html], { type: 'text/html' });
    saveAs(blob, 'index.html');
  };

  // Download CSS file
  const downloadCSS = () => {
    const blob = new Blob([css], { type: 'text/css' });
    saveAs(blob, 'styles.css');
  };

  // Download JavaScript file
  const downloadJS = () => {
    const blob = new Blob([js], { type: 'application/javascript' });
    saveAs(blob, 'script.js');
  };

  // Download all files as a .zip file
  const downloadAll = () => {
    const zip = new JSZip();
    zip.file('index.html', html);
    zip.file('styles.css', css);
    zip.file('script.js', js);
    zip.generateAsync({ type: 'blob' }).then((content) => {
      saveAs(content, 'project.zip');
    });
  };

  // Save to GitHub
  const saveToGitHub = async () => {
    const octokit = new Octokit({ auth: 'your_personal_access_token' }); // Replace with your token
    const content = `
      <!DOCTYPE html>
      <html>
        <head><style>${css}</style></head>
        <body>${html}<script>${js}</script></body>
      </html>
    `;
    try {
      await octokit.repos.createOrUpdateFileContents({
        owner: 'your_github_username',
        repo: 'your_repo_name',
        path: 'index.html',
        message: 'Code from Online Editor',
        content: btoa(content),
      });
      alert('Files saved to GitHub successfully!');
    } catch (error) {
      console.error(error);
      alert('Failed to save to GitHub.');
    }
  };

  return (
    <>
      <div className="text-white w-screen grid grid-cols-3">
        <div className="bg-gray-900 flex flex-col">
          <div className="flex items-center justify-around">
            <p>HTML</p>
            <button onClick={downloadHTML} className="btn">Download HTML</button>
          </div>
          <HTML value={html} onChange={(value) => setHtml(value)} />
        </div>
        <div className="bg-gray-900">
          <div className="flex items-center justify-around">
            <p>CSS</p>
            <button onClick={downloadCSS} className="btn">Download CSS</button>
          </div>
          <CSS value={css} onChange={(value) => setCss(value)} />
        </div>
        <div className="bg-gray-900">
          <div className="flex items-center justify-around">
            <p>JavaScript</p>
            <button onClick={downloadJS} className="btn">Download JS</button>
          </div>
          <JS value={js} onChange={(value) => setJs(value)} />
        </div>
      </div>
      <div className="p-4">
        <Preview html={html} css={css} js={js} />
        <div className="mt-4 flex justify-center space-x-4">
          <button onClick={downloadAll} className="bg-green-500 text-white px-4 py-2 rounded">
            Download All Files as ZIP
          </button>
          <button onClick={saveToGitHub} className="bg-blue-500 text-white px-4 py-2 rounded">
            Save to GitHub
          </button>
        </div>
      </div>
    </>
  );
};

export default Template;
