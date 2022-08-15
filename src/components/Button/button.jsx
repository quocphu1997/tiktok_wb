import React from 'react';
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import style from './button.module.scss';

const cx = classNames.bind(style);

export default function Button({
    to,
    primary = false,
    outline = false,
    small = false,
    large = false,
    href,
    onClick,
    children,
    text,
    ...passProps
}) {
    let Comp = 'button';

    const props = {
        onClick,
        ...passProps,
    };
    if (to) {
        props.to = to;
        Comp = Link;
    } else if (href) {
        props.href = href;
        Comp = 'a';
    }
    const classes = cx('wrapper', {
        primary,
        outline,
        small,
        large,
        text
    });
    return (
        <Comp className={classes} {...props}>
            <span>{children}</span>
        </Comp>
    );
}
