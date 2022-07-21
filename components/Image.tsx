import React, {useState} from 'react'
import styles from './Image.module.css'

const OVERLAY: any = {
  position: 'fixed',
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  backgroundColor: 'rgba(0, 0, 0, 0.5)',
  zIndex: 1000,
}

const Image = ({imageUrl}: {imageUrl: string}) => {
  const [showMoadal, setShowModal] = useState(false)

  return (
    <>
      {showMoadal && (
        <div>
          <div onClick={() => setShowModal((prev) => !prev)} style={OVERLAY} />
          <span style={{position: 'absolute', color: 'white', zIndex: 10000}}>
            {imageUrl}
          </span>
        </div>
      )}
      <div className={styles.image_container}>
        {/* <div
        className={styles.image}
        style={{backgroundImage: `url(${imageUrl})`}}
      ></div> */}
        <img
          src={imageUrl}
          alt=""
          onClick={() => setShowModal((prev) => !prev)}
        />
      </div>
    </>
  )
}

export default Image
