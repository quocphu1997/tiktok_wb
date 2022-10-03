import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import styles from './proper.module.scss';

const cx = classNames.bind(styles);

export default function wrapper({ children, className }) {
    return <div className={cx('wrapper', className)}>{children}</div>;
}

wrapper.propTypes = {
    children: PropTypes.node.isRequired,
    className: PropTypes.string,
};
