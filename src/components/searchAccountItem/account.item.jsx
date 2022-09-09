import React from 'react';
import styles from './accountItem.module.scss';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);

export default function AccountItem() {
    return (
        <div className={cx('wrapper')}>
            <img className={cx('avatar')} src="https://p16-sign-sg.tiktokcdn.com/aweme/100x100/tos-alisg-avt-0068/dc60cb071cfa78089851f938d59db628.jpeg?x-expires=1662865200&x-signature=5Rx2RQdCDdwT%2FRWHHx%2Fhi90iqYA%3D" alt="nva" />
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
