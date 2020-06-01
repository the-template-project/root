import React, { useState, useMemo, useCallback } from 'react';
import CarouselTrack from './CarouselTrack';
import styles from './Carousel.module.css';

export default function Carousel(props) {
    const { 
        itemsPerPage,
        children, 
    } = props;

    const _itemsPerPage = itemsPerPage || 1;
    const childrenWithKeys = useMemo(() => {
        return React.Children.toArray(children);
    }, [children]);
    const [index, setIndex] = useState(0);
    const handleOnLeftClick = useCallback(() => {
        setIndex((index) => index === 0 ? index : index - 1);
    }, [setIndex]);
    const handleOnRightClick = useCallback(() => {
        setIndex((index) => index === childrenWithKeys.length - 1 ? index : index + 1);
    }, [setIndex]);

    return (
        <div className={styles['carousel']}>
            <CarouselTrack
                index={index}
                itemsPerPage={_itemsPerPage}
            >
                {childrenWithKeys}
            </CarouselTrack>
            <div className={styles['carousel__buttons']}>
                <div className={styles['carousel__buttons-container']}>
                    <div className={styles['carousel__direction-buttons-container']}>
                        <button style={{backgroundColor: 'blue'}} 
                            onClick={handleOnLeftClick}
                        />
                        <button style={{backgroundColor: 'blue'}}
                            onClick={handleOnRightClick}
                        />
                    </div>
                    <button className={styles['carousel__eye-button']} style={{backgroundColor: '#5CD568'}}/>
                    <button className={styles['carousel__download-button']} style={{backgroundColor: '#33C9AD'}}/>
                </div>
            </div>
            <div className={styles['carousel__project-text']}>
                <p className={styles['carousel__project-text-title']}>
                    ABOUT PROJECT
                </p>
                <p className={styles['carousel__project-text-content']}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </p>
            </div>
        </div>
    )
}
