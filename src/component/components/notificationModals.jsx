// PopupModal.js

import React, { useState, useEffect } from 'react';
import classNames from 'classnames';

export function PopupModal ({ message }) {
  const [showModal, setShowModal] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowModal(false);
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div
      className={classNames('fixed inset-0 z-50 flex items-center justify-center', {
        'hidden': !showModal,
      })}
    >
      <div className="bg-white p-6 rounded shadow-md">
        <p>{message}</p>
      </div>
    </div>
  );
};

