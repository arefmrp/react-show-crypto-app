import React from 'react';

const CoinItem = ({name,image,symbol,volume,price,price_change}) => {
    return (
        <div className={'coinItem-row'}>
            <div className={'coinItem-row-img'}><img src={`${image}`}></img></div>
            <div className={'coinItem-row-name'}>{name}</div>
            <div className={'coinItem-row-symbol'}>{symbol}</div>
            <div className={'coinItem-row-volume'}>{volume}</div>
            <div className={'coinItem-row-price'}>{price}</div>
            <div className={'coinItem-row-priceChange'}>{price_change}</div>

        </div>
    );
};

export default CoinItem;