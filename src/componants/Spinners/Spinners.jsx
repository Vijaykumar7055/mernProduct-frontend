// src/components/Spinner/Spinner.js
import React from 'react';
import { BeatLoader  } from 'react-spinners';

const Spinners = ({ loading }) => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-zinc-900 bg-opacity-75">
      <BeatLoader color="#3498db" loading={loading} size={30} />
    </div>
  );
};

export default Spinners;
