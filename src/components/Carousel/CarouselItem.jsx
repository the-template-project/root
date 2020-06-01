// Lift state up: https://reactjs.org/docs/lifting-state-up.html
// Refs: https://github.com/facebook/react/issues/14072, https://reactjs.org/docs/hooks-faq.html#how-can-i-measure-a-dom-node
// Source: https://reactjs.org/docs/hooks-faq.html#how-can-i-measure-a-dom-node

import React from 'react';
import styles from './CarouselItem.module.css';

export default function CarouselItem(props) {
    const { 
        zIndex,
        brightness,
        translateZ,
        marginRight,
        animationDuration,
        children, 
    } = props;

    const style = {
        'zIndex': zIndex,
        'filter': `brightness(${brightness})`,
        'marginRight': marginRight,
        'transform': `
            perspective(500px) translateZ(${-translateZ*500}px)
        `,
        'transition': `transform ${animationDuration}s ease, filter ${animationDuration}s ease`
    };
    return (
        <div className={styles['carousel__item']} style={style}>
            {React.cloneElement(children, {
                style: {
                    'maxHeight': '100vh', 
                    'maxWidth': '100vw'
                }
            })}
        </div>
    )
}
