import React from 'react';
import styles from './accountItem.module.scss';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);

export default function AccountItem() {
    return (
        <div className={cx('wrapper')}>
            <img className={cx('avatar')} src="https://p16-sign-sg.tiktokcdn.com/tos-alisg-avt-0068/27fb8d42672710d2cbe7493b3a5a8ab2~c5_300x300.webp?x-expires=1660374000&x-signature=Lt6ttF6z%2BpRfsVbIUjHemK0G1Uw%3D" alt="nva" />
            <div className={cx('info')}>
                <p className={cx('name')}>
                    <span>Nguyen van a</span>
                    <FontAwesomeIcon className={cx('check_icon')} icon={faCheckCircle} />
                </p>
                <span className={cx('username')}>Nguyenva@123</span>
            </div>
        </div>
    );
}
