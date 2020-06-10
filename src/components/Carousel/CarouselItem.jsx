import React from 'react';
import styles from './Carousel.module.css';

export default function CarouselItem(props) {
    const { 
        zIndex,
        brightness,
        translateZ,
        leftPercentage,
        width,
        height,
        animationDuration,
        children, 
    } = props;

    const style = {
        'position': 'absolute',
        'width': `${width}px`,
        'height': `${height}px`,
        'zIndex': zIndex,
        'filter': `brightness(${brightness})`,
        'left': `${width*leftPercentage}px`,
        'transform': `
            perspective(500px) translateZ(${translateZ*500}px)
        `,
        'transition': `transform ${animationDuration}s ease, filter ${animationDuration}s ease, left ${animationDuration}s ease, zIndex ${animationDuration}s ease-in-out`
    };
    return (
        <div className={styles['carousel-item']} style={style}>
            {React.cloneElement(children)}
        </div>
    )
}
