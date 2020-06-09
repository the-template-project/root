import React, { useState, useMemo, useCallback, useEffect } from 'react';
import CarouselTrack from './CarouselTrack';
import styles from './Carousel.module.css';

export default function Carousel(props) {
    const { 
        itemsPerPage,
        height,
        animationDuration,
        children, 
    } = props;

    const _itemsPerPage = itemsPerPage || 1;
    const _animationDuration = animationDuration || 1;
    const childrenWithKeys = useMemo(() => {
        return React.Children.toArray(children);
    }, [children]);
    const _height = height || 400;
    const [width, setWidth] = useState(0);
    const measuredRef = useCallback((node) => {
        if (node !== null) {
            setWidth(node.getBoundingClientRect().width)
        }
    }, []);
    const [windowSize, setWindowSize] = useState({
        width: window.innerWidth,
        height: window.innerHeight,
        newWidth: window.innerWidth,
        newHeight: window.innerHeight
    });
    useEffect(() => {
        function handleResize() {
            setWindowSize((windowSize) => ({
                ...windowSize,
                newWidth: window.innerWidth,
                newHeight: window.innerHeight
            }))
        }
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, [])
    const [index, setIndex] = useState(0);
    const handleOnLeftClick = useCallback(() => {
        setIndex((index) => index === 0 ? index : index - 1);
    }, [setIndex]);
    const handleOnRightClick = useCallback(() => {
        setIndex((index) => index === childrenWithKeys.length - 1 ? index : index + 1);
    }, [setIndex]);

    return (
        <div className={styles['carousel']}
            ref={measuredRef}
        >
            <CarouselTrack
                index={index}
                itemsPerPage={_itemsPerPage}
                height={_height*windowSize.newHeight/windowSize.height}
                width={width*windowSize.newWidth/windowSize.width}
                animationDuration={_animationDuration}
            >
                {childrenWithKeys}
            </CarouselTrack>
            <div className={styles['carousel-buttons']}>
                <div className={styles['carousel-buttons-container']}>
                    <div className={styles['carousel-direction-buttons-container']}>
                        <button onClick={handleOnLeftClick} />
                        <button onClick={handleOnRightClick} />
                    </div>
                    <button className={styles['carousel-eye-button']} style={{backgroundColor: '#5CD568'}}/>
                    <button className={styles['carousel-download-button']} style={{backgroundColor: '#33C9AD'}}/>
                </div>
            </div>
            <div className={styles['carousel-project-text']}>
                <p className={styles['carousel-project-text-title']}>
                    About Project
                </p>
                <p className={styles['carousel-project-text-content']}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </p>
            </div>
        </div>
    )
}
