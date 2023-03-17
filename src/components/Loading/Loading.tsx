import * as React from 'react';
import './styles.css';

export default function Loading() {
  return (
    <div data-TestId="loading" className=" flex items-center justify-center w-full h-full min-h-screen">
      <div className="bg-primary-600 opacity-10 fixed top-0 right-0 left-0 bottom-0"></div>

      <div className="loading">
        <div className="loader">
          <div></div>
        </div>
      </div>
    </div>
  );
}
