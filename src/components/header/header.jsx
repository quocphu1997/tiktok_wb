import React from 'react';
import styles from './header.module.scss';
import classNames from 'classnames/bind';
import image from '../../assets/images/logo';
import Tippy from '@tippyjs/react'; // different import path!
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoins, faEllipsisV, faGear, faGlobeAsia, faPlus, faSignOut } from '@fortawesome/free-solid-svg-icons';
import { NavLink } from 'react-router-dom';
import 'tippy.js/dist/tippy.css';
import { faKeyboard, faQuestionCircle, faUser } from '@fortawesome/free-regular-svg-icons';
import { InboxIcon, MessageIcon, UploadIcon } from '../Icons/icon';

//
import Button from '../Button/button';
import Menupoper from '../Proper/menu/menupoper';
import Image from '../ImageComp/imagecomp';
import Search from '../search/search';
import routesConfig from '../../configs/routes';


// 
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
        },
        {
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
                    <NavLink className={cx('link-logo')} to={routesConfig.home}>
                        <img src={image.logo} alt="tiktok" />
                    </NavLink>
                </div>
                {/* search */}
                <Search />
                <div className={cx('action')}>
                    {currentUser ? (
                        <>
                            <Tippy delay={[0, 10]} content="Upload video" placement="bottom">
                                <button className={cx('action-btn')}>
                                    <UploadIcon />
                                </button>
                            </Tippy>
                            <Tippy delay={[0, 10]} content="Messages" placement="bottom">
                                <button className={cx('action-btn')}>
                                    <MessageIcon />
                                </button>
                            </Tippy>
                            <Tippy delay={[0, 10]} content="Inbox" placement="bottom">
                                <button className={cx('action-btn')}>
                                    <InboxIcon />
                                </button>
                            </Tippy>
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
                            <Image
                                className={cx('user-avatar')}
                                src="https://picsum.photos/200/200"
                                alt="abc"
                                // fallback="https://fullstack.edu.vn/static/media/f8-icon.18cd71cfcfa33566a22b.png"
                            />
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
