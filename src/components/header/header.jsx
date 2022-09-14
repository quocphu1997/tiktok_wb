import React, { useEffect, useState } from 'react';
import styles from './header.module.scss';
import classNames from 'classnames/bind';
import image from '../../assets/images/logo';
import HeadlessTippy from '@tippyjs/react/headless'; // different import path!
import Tippy from '@tippyjs/react'; // different import path!
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faCloudUpload,
    faCoins,
    faEllipsisV,
    faGear,
    faGears,
    faGlobeAsia,
    faLanguage,
    faMessage,
    faPlus,
    faSignOut,
    faSpinner,
    faXmarkCircle,
} from '@fortawesome/free-solid-svg-icons';
import 'tippy.js/dist/tippy.css';
import { wrapper as PopperWrapper } from '../Proper';
import AccountItem from '../searchAccountItem/account.item';
import Button from '../Button/button';
import Menupoper from '../Proper/menu/menupoper';
import { faKeyboard, faQuestionCircle, faUser } from '@fortawesome/free-regular-svg-icons';

const cx = classNames.bind(styles);

export default function Header() {
    const currentUser = true;
    const MENU_ITEMS = [
        {
            icon: <FontAwesomeIcon icon={faGlobeAsia} />,
            title: 'English',
            children: {
                title: 'language',
                data: [
                    {
                        type: 'language',
                        code: 'en',
                        title: 'English',
                    },
                    {
                        type: 'language',
                        code: 'vi',
                        title: 'Tiếng Việt',
                    },
                ],
            },
        },
        {
            icon: <FontAwesomeIcon icon={faQuestionCircle} />,
            title: 'Feedback and help',
            to: '/feedback',
        },
        {
            icon: <FontAwesomeIcon icon={faKeyboard} />,
            title: 'Keyboard shortcuts',
        },
    ];
    const [searchResult, setSearchResult] = useState([]);

    useEffect(() => {
        setTimeout(() => {
            setSearchResult([]);
        }, 0);
    }, []);

    // Handle logic
    const handleMenuChange = (menuItem) => {
        switch (menuItem.type) {
            case 'language':
                // handle change language
                break;
            default:
                break;
        }
    };

    const userMenu = [
        {
            icon: <FontAwesomeIcon icon={faUser} />,
            title: 'View profile',
            to: '/profile',
        },
        {
            icon: <FontAwesomeIcon icon={faCoins} />,
            title: 'Get coins',
            to: '/coins',
        },        {
            icon: <FontAwesomeIcon icon={faGear} />,
            title: 'Setting',
            to: '/setting',
        },
        ...MENU_ITEMS,
        {
            icon: <FontAwesomeIcon icon={faSignOut} />,
            title: 'Log out',
            to: '/logout',
            separate: true,
        },
    ];

    return (
        <header className={cx('wrapper')}>
            <div className={cx('inner')}>
                <div className={cx('logo')}>
                    <img src={image.logo} alt="tiktok" />
                </div>
                <HeadlessTippy
                    interactive
                    visible={searchResult.length > 0}
                    render={(attrs) => (
                        <div className={cx('search-result')} tabIndex="-1" {...attrs}>
                            <PopperWrapper>
                                <h4 className={cx('search-label')}>Accounts</h4>
                                <AccountItem />
                                <AccountItem />
                                <AccountItem />
                                <AccountItem />
                                <AccountItem />
                            </PopperWrapper>
                        </div>
                    )}
                >
                    <div className={cx('searchbox')}>
                        <input placeholder="search accounts and video" />
                        <button className={cx('clear')}>
                            <FontAwesomeIcon icon={faXmarkCircle} />
                        </button>
                        <FontAwesomeIcon className={cx('spinner')} icon={faSpinner} />
                        <button className={cx('search-btn')}>
                            <svg
                                width={24}
                                height={24}
                                viewBox="0 0 48 48"
                                fill="rgba(22, 24, 35, 0.34)"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    fillRule="evenodd"
                                    clipRule="evenodd"
                                    d="M22 10C15.3726 10 10 15.3726 10 22C10 28.6274 15.3726 34 22 34C28.6274 34 34 28.6274 34 22C34 15.3726 28.6274 10 22 10ZM6 22C6 13.1634 13.1634 6 22 6C30.8366 6 38 13.1634 38 22C38 25.6974 36.7458 29.1019 34.6397 31.8113L43.3809 40.5565C43.7712 40.947 43.7712 41.5801 43.3807 41.9705L41.9665 43.3847C41.5759 43.7753 40.9426 43.7752 40.5521 43.3846L31.8113 34.6397C29.1019 36.7458 25.6974 38 22 38C13.1634 38 6 30.8366 6 22Z"
                                />
                            </svg>
                        </button>
                    </div>
                </HeadlessTippy>
                <div className={cx('action')}>
                    {currentUser ? (
                        <>
                            <Tippy delay={[0, 200]} content="Upload video" placement="bottom">
                                <button className={cx('action-btn')}>
                                    <FontAwesomeIcon icon={faCloudUpload} />
                                </button>
                            </Tippy>
                            {/* <button className={cx("action-btn")}>
                                <FontAwesomeIcon icon={faMessage} />
                            </button> */}
                        </>
                    ) : (
                        <>
                            <Button text>
                                {' '}
                                <FontAwesomeIcon icon={faPlus} /> Upload
                            </Button>
                            <Button primary>Log in</Button>
                        </>
                    )}
                    <Menupoper items={currentUser ? userMenu : MENU_ITEMS} onChange={handleMenuChange}>
                        {currentUser ? (
                            <img className={cx('user-avatar')} src="https://picsum.photos/200/200" alt="abc" />
                        ) : (
                            <button className={cx('more-btn')}>
                                <FontAwesomeIcon icon={faEllipsisV} />
                            </button>
                        )}
                    </Menupoper>
                </div>
            </div>
        </header>
    );
}
