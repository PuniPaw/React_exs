import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import '@styles/styles.scss';

import { Header } from '@components/header.jsx';

import MainIndex from '@pages/main.jsx';
import VideoIndex from '@pages/video.jsx';

function App() {
  return (
    <>
      <BrowserRouter>
      <Header/>
        <Routes>
          <Route path="/" element={ <MainIndex/> } />
          <Route path="/video" element={ <VideoIndex/> } />
        </Routes>
      </BrowserRouter>
    </>
  );
}

const domNode = document.getElementById('root');
const root = createRoot(domNode);
root.render(<App />);