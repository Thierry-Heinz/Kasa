import { useState, useRef, useEffect } from 'react'
import styles from './slideshow.module.css'
import leftArrow from '../../assets/left-arrow.svg'
import rightArrow from '../../assets/right-arrow.svg'

const Slideshow = ({ title, images }) => {
  const [index, setIndex] = useState(0)
  const [width, setWidth] = useState(0)
  const [xPosition, setXPosition] = useState(0)
  const slideRef = useRef()

  const length = images.length

// set the width and the position of the current slide, called by 'resize' in useffect
  const handleResize = () => {
    const width = slideRef.current.clientWidth
    setWidth(width)
    setXPosition((index) * width * -1)
  }
  // handle first display
  useEffect(() => {
    handleResize()
  })

  // handle each browser resize
  useEffect(() => {
    if (slideRef.current) {
      window.addEventListener('resize', handleResize, false)
      return () => window.removeEventListener('resize', handleResize);
    }
  })

  // handle left button, if at the beginning, go to the end slide
  const handleClickPrev = () => {
    if (index === 0) {
      setIndex(length - 1)
      setXPosition((length - 1) * width * -1)
    } else {
      setIndex(index - 1)
      setXPosition(xPosition + width)
    }
  }
  
  // handle right button, if at the end, go to the first slide
  const handleClickNext = () => {
    if (index === length - 1) {
      setIndex(0)
      setXPosition(0)
    } else {
      setIndex(index + 1)
      setXPosition(xPosition - width)
    }
  }

  return (
    <section
      className={styles.slideshow}
      aria-label={`Les photographies de la location ${title}`}
    >
      <div className={styles.slidesWrapper} ref={slideRef}>
        <div
          className={styles.slide}
          style={{ transform: `translateX(${xPosition}px)` }}
        >
          {images.map((img, i) => (
            <img
              src={img}
              key={i}
              className={styles.img}
              style={{ width }}
              alt={`Photographie n°${length + 1} de la location ${title}`}
            />
          ))}
        </div>
      </div>
      {/* if more than 1 slide show the controls and length, otherwise just show the slide */}
      {length > 1 && (
        <>
          <div className={styles.counter}>{`${index + 1}/${length}`}</div>
          <div className={styles.controls}>
            <button className="left" onClick={handleClickPrev}>
              <img src={leftArrow} alt="précédent" />
            </button>
            <button className="right" onClick={handleClickNext}>
              <img src={rightArrow} alt="suivant" />
            </button>
          </div>
        </>
      )}
    </section>
  )
}

export default Slideshow
