import React, { useEffect, useState, useRef } from 'react';
import styles from './search.module.scss';
import classNames from 'classnames/bind';
import { faSpinner, faXmarkCircle } from '@fortawesome/free-solid-svg-icons';
import HeadlessTippy from '@tippyjs/react/headless'; // different import path!
import { wrapper as PopperWrapper } from '../Proper';
import AccountItem from '../searchAccountItem/account.item';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { SearchIcon } from '../Icons/icon';

const cx = classNames.bind(styles);

export default function Search() {
    const [searchValue, setSearchValue] = useState('');
    const [searchResult, setSearchResult] = useState([]);
    const [showResult, setShowResult] = useState(true);

    const inputRef = useRef();


    useEffect(() => {
        if (!searchValue.trim()) {
            return;
        }
        fetch(`https://tiktok.fullstack.edu.vn/api/users/search?q=${searchValue}&type=less`)
            .then((respone) => respone.json())
            .then((result) => setSearchResult(result.data))
            .catch((error) => console.log('error', error));
    }, [searchValue]);

    const handleClear = () => {
        setSearchValue('');
        setSearchResult([]);
        inputRef.current.focus(); // để khi xóa thì dấu nháy vẫn sẽ hiện cho ng dùng nhập tiếp
    };
    const handleHideResult = () => {
        setShowResult(false);
    };
    const renderAccountItem = () => {
        return searchResult.map((ele) => {
            return <AccountItem key={ele.id} data={ele} />;
        });
    };
    return (
        <HeadlessTippy
            interactive
            visible={showResult && searchResult.length > 0}
            render={(attrs) => (
                <div className={cx('search-result')} tabIndex="-1" {...attrs}>
                    <PopperWrapper>
                        <h4 className={cx('search-label')}>Accounts</h4>
                        {renderAccountItem()}
                    </PopperWrapper>
                </div>
            )}
            onClickOutside={handleHideResult}
        >
            <div className={cx('searchbox')}>
                <input
                    ref={inputRef}
                    value={searchValue}
                    placeholder="search accounts and video"
                    spellCheck={false}
                    onChange={(event) => setSearchValue(event.target.value)}
                    onFocus={() => setShowResult(true)}
                />
                {!!searchValue && (
                    <button className={cx('clear')} onClick={handleClear}>
                        <FontAwesomeIcon icon={faXmarkCircle} />
                    </button>
                )}
                {/* <FontAwesomeIcon className={cx('spinner')} icon={faSpinner} /> */}
                <button className={cx('search-btn')}>
                    <SearchIcon className={cx('search-icon')} />
                </button>
            </div>
        </HeadlessTippy>
    );
}
