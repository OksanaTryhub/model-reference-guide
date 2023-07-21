import React, { useState } from "react";
import placeholder from "../../images/noImage.png";
import ModalWindow from "../ModalWindow/ModalWindow";
// import sketch from "../../images/girl.jpg"

import styles from "./modelCard.module.css";

const ModelCard = ({ name, info, photo, largePhoto }) => { 
  const [showModal, setShowModal] = useState(false);

//   const handleClick = () => {
//     setShowModal(false);
// }

const showBigSketch = () => {
    setShowModal(true);
};

 const handleCloseModal = () => {
setShowModal(false);
};
  
  return (
    <div className={styles.model}>
      <h2 className={styles.modelName}>{name}</h2>
      <div className={styles.infoWrap}>
       
        {/* <div>
            <img src={sketch} alt={name} className={styles.sketch} onClick = {showBigSketch}/>
        </div> */}
        <div>
          {photo ? (
            <img src={photo} alt={name} className={styles.modelImage} onClick = {showBigSketch}/>
          ) : (
            <img src={placeholder} alt='' className={styles.noImage} />
          )}
        </div>
      </div>
      {showModal && (
                <ModalWindow onClose={handleCloseModal} >
                    {/* <div className={styles.textWrap}>
                        <h2 className={styles.titleModal}>Are you sure you want to delete <b>“{name }”</b>?<br /></h2>
                        <p className={styles.textModal}>You can`t undo this action.</p>
                    </div> */}
                     <div className={styles.modalContent}>
                     <div>
                        <img src={largePhoto} alt={name} onClick = {showBigSketch} className={styles.modelImage}/>
                    </div>
                    <div className={styles.modalInfo}>
                      <p className={styles.modelInfo}>{info}</p>
                    </div>
                     </div>
                    {/* <div className={styles.buttonWrap}> 
                        <button onClick={handleCloseModal} className={`${styles.modalBtn} ${styles.cancelBtn}`}>Cancel</button>
                        <button onClick = {handleClick} className={`${styles.modalBtn} ${styles.approveBtn}`}>
                            Yes
                            <TrashIcon id='svg' className={styles.trashIconModal}/>
                        </button>
                    </div> */}
                </ModalWindow>
            )}
    </div>
  );
};

export default ModelCard;
