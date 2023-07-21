import React, { useEffect } from 'react';

// import { CrossSmallIcon } from '../SvgIcons/CrossSmallIcon';

import styles from './modalWindow.module.css';

const ModalWindow = ({
  onClose, 
  className,
  children = 'Modal content goes here',
}) => {
  
    const handleClick =(event) => {
      if (event.target === event.currentTarget) {
        onClose();
        }
    }
  
  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.keyCode === 27) {
        onClose();
      }
    }
    window.addEventListener('keydown', handleKeyDown); 

    return () => {
      window.removeEventListener('keydown', handleKeyDown); 
    };
  }, [onClose]);

  return (
    <div className={`${styles.modal} ${className}`} onClick={handleClick}>
      <div className={styles.modalContent}>
        <button className={styles.closeBtn} onClick={onClose}>
            X
          {/* <CrossSmallIcon id="svg" className={styles.crossSmallIcon} /> */}
        </button>
        {children}
      </div>
    </div>
  );
}; 

export default ModalWindow;