import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';
//
import React from 'react';
import styles from './SuggestedAccounts.module.scss';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);

export default function AccountItem() {
    return (
        <div className={cx('account-items')}>
            <img className={cx('account-avatar')} src="https://picsum.photos/200" alt="picsum" />
            <div className={cx('info-accounts-items')}>
                <p className={cx('info-nickname')}>
                    <strong>quocphu</strong>
                    <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />
                </p>
                <p className={cx('info-name')}>Quốc Phú</p>
            </div>
        </div>
    );
}

AccountItem.propTypes = {};
