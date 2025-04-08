'use client';

import React from 'react';

const page = () => {
  return (
    <div className="webview-container">
      <iframe
        src={"https://www.hotstar.com/in"}
        title="WebView"
        className="webview-iframe"
        frameBorder="0"
        allowFullScreen
      />
    </div>
  );
};

export default page;
