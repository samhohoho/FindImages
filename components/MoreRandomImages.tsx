import React, {useEffect, useState} from 'react'
import Image from './Image'
import styles from './MoreRandomImages.module.css'

const MoreRandomImages = () => {
  const [images, setImages] = useState([])
  const [isLoading, setIsLoading] = useState(false)

  const fetchReq = async () => {
    try {
      setIsLoading(true)

      const response = await fetch(
        'https://api.unsplash.com/photos/random?client_id=N9a24y9OSM_GZ38koCo4bZs8JXcW9yEabZe7BbJUKcQ&count=3&query=stars&w=1600'
      )

      if (!response.ok) throw new Error('Request failed!')

      const data = await response.json()

      const imagesUrls = data.map((obj: any) => obj.urls.full)

      setImages(imagesUrls)
      console.log(imagesUrls)
    } catch (e) {
      console.log(e)
    } finally {
      setIsLoading(false)
    }
  }

  useEffect(() => {
    fetchReq()
  }, [])

  return (
    <section className={styles.lower_section_images}>
      <div className={styles.images_header}>
        <a href="#">
          <h3>Stars</h3>
        </a>
      </div>
      <div className={styles.images_container}>
        {images.length > 0 &&
          images.map((link) => <Image key={link} imageUrl={link} />)}
        {/* <Image />
        <Image />
        <Image /> */}
      </div>
    </section>
  )
}

export default MoreRandomImages
