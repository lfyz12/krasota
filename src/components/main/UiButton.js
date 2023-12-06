import React, { Children } from 'react';

const UiButton = (props) => {
    return (
        <button className='carusel_item_btn mt-3'>
        <a href='#book' className='text-decoration-none uiBtn_text'>{props.children}</a>
        </button>
    );
};

export default UiButton;