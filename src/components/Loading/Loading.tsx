import * as React from 'react';
import './styles.css';

export default function Loading() {
  return (
    <div className="fixed inset-0 w-full h-full min-h-screen min-w-screen flex items-center justify-center">
      <div className="bg-primary-600 opacity-10 fixed top-0 right-0 left-0 bottom-0" />
      <div className="loading">
        <div className="loader">
          <div></div>
        </div>
      </div>
    </div>
  );
}
