import React from "react";
import PropTypes from "prop-types";

import ModelCard from "../ModelCard/ModelCard";
import styles from "./modelList.module.css";

const ModelList = ({ data }) => {
  return (
    <div className={styles.modelList}>
      {!data.length && <p>There are no models</p>}
      {data.length &&
        data.map(({ id, name, info, photo, sketchName, sketchPath }) => <ModelCard 
        key={id} 
        id={id} 
        name={name} 
        info={info} 
        photo={photo} 
        sketchName={sketchName}
        sketchPath={sketchPath} 
        />)}
    </div>
  );
};

ModelList.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      info: PropTypes.string,
      photo: PropTypes.string,
      sketchName: PropTypes.string,
      sketchPath: PropTypes.string,
    })
  ).isRequired,
};

export default ModelList;
