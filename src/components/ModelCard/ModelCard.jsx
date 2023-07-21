import React from "react";
import placeholder from "../../images/noImage.png";

import styles from "./modelCard.module.css";

const ModelCard = ({ name, info, photo, sketchPath, sketchName }) => { 
  return (
    <div className={styles.model}>
      <h2 className={styles.modelName}>{name}</h2>
      <div className={styles.infoWrap}>
        <div>
          <p className={styles.modelInfo}>{info}</p>
        </div>
        <div>
          {sketchPath? (
            <img src={sketchPath} alt={sketchName} className={styles.modelImage} />
          ): (
            <img src={placeholder} alt='' className={styles.noImage} />
          )}
        </div>
        <div>
          {photo ? (
            <img src={photo} alt={name} className={styles.modelImage} />
          ) : (
            <img src={placeholder} alt='' className={styles.noImage} />
          )}
        </div>
      </div>
    </div>
  );
};

export default ModelCard;
