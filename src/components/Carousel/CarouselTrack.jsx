import React, { useMemo } from 'react';
import CarouselItem from './CarouselItem';
import styles from './CarouselTrack.module.css';

export default function CarouselTrack(props) {
    const {
        index,
        itemsPerPage,
        animationDuration,
        children,
    } = props;
    
    const _animationDuration = animationDuration || 1;

    const childrenWithKeys = useMemo(() => {
        return React.Children.toArray(children);
    }, [children]);

    const maxSideLength = useMemo(() => {
        return Math.max(index, childrenWithKeys.length-index-1);
    }, [childrenWithKeys, index]);
    const distancesFromCenter = useMemo(() => {
        const distancesFromCenter = new Array(childrenWithKeys.length).fill(0);
        distancesFromCenter[index] = maxSideLength;
        for (let i=1; i<maxSideLength+1; ++i){
            if (index-i >= 0) {
                distancesFromCenter[index-i] = distancesFromCenter[index-i+1]-1;
            }
            if (index+i < childrenWithKeys.length) {
                distancesFromCenter[index+i] = distancesFromCenter[index+i-1]-1;
            }
        }
        return distancesFromCenter;
    }, [maxSideLength, childrenWithKeys, index])

    const style = {
        'transform': `translateX(${index*(-100/itemsPerPage)}%)`,
        'transitionProperty': 'transform',
        'transitionDuration': `${_animationDuration}s`
    }

    return (
        <div 
            className={styles['carousel__track']} style={style}
        >
            {childrenWithKeys.map((carouselItem, i) => {
                return (
                    <CarouselItem 
                        key={i}
                        zIndex={distancesFromCenter[i]}
                        brightness={(distancesFromCenter[i]+1)/(maxSideLength+1)}
                        translateZ={(maxSideLength-distancesFromCenter[i])/(maxSideLength)}
                        marginRight={`${(-100+100/itemsPerPage)}%`}
                        animationDuration={_animationDuration}
                    >
                        {carouselItem}
                    </CarouselItem>
                )
            })}
        </div>
    )
}
