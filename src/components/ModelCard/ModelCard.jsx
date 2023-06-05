import React from 'react'

const ModelCard = ({name, info, photo}) => {
  return (
    <div>
      <h2>{name}</h2>
      <p>{info}</p>
      <img src={photo} alt={name} />
    </div>
  )
}

export default ModelCard