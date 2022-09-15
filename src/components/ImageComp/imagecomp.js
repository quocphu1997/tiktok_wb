import React, { useState, forwardRef } from 'react';
import image from '../../assets/images/logo';
import style from './imagecomp.module.scss';
import classNames from 'classnames';

// console.log(image.noImage);
const Image = forwardRef(({ src, alt, className, fallback: customfallback = image.noImage, ...props }, ref) => {
    const [fallback, setFallback] = useState('');

    const handleError = () => {
        // setFallback(image.noImage);
        setFallback(customfallback);
    };

    return (
        <img
            className={classNames(style.wrapper, className)}
            ref={ref}
            src={fallback || src}
            alt={alt}
            {...props}
            onError={handleError}
        />
    );
});
export default Image;
