import React, { useMemo, useState, useCallback } from 'react';
import CarouselItem from './CarouselItem';
import styles from './Carousel.module.css';

export default function CarouselTrack(props) {
    const {
        index,
        itemsPerPage,
        height,
        width,
        animationDuration,
        children,
    } = props;
    
    const childrenWithKeys = useMemo(() => {
        return React.Children.toArray(children);
    }, [children]);
    const distances = useMemo(() => {
        const distances = new Array(childrenWithKeys.length*2-1).fill(0);
        if (childrenWithKeys.length > 0) {
            distances[0] = childrenWithKeys.length-1;
            for (let i=1; i<children.length*2-1; ++i){
                distances[i] = distances[i-1]+(i<childrenWithKeys.length ? -1 : 1);
            }
        }
        return distances;
    }, [childrenWithKeys.length])
    const distancesFromCenter = useMemo(() => {
        const temp = distances.slice(childrenWithKeys.length-index-1, 2*childrenWithKeys.length-index-1);
        const minDistance = Math.min(...temp);
        return temp.map(val => val-minDistance);
    }, [distances, index])
    const style = {
        'height': `${height}px`,
    };
    return (
        <div 
            className={styles['carousel-track']}
            style={style}
        >
            {childrenWithKeys.map((carouselItem, i) => {
                const maxDistance = Math.max(...distancesFromCenter);
                return (
                    <CarouselItem 
                        key={i}
                        zIndex={maxDistance-distancesFromCenter[i]}
                        brightness={(maxDistance-distancesFromCenter[i]+1)/(maxDistance+1)}
                        translateZ={(maxDistance-distancesFromCenter[i])/(maxDistance)-1}
                        leftPercentage={(i<index ? -1 : 1)*distancesFromCenter[i]/itemsPerPage}
                        width={width}
                        height={height}
                        animationDuration={animationDuration}
                    >
                        {carouselItem}
                    </CarouselItem>
                )
            })}
        </div>
    )
}
