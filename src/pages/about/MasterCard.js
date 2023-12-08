import React from 'react';

const MasterCard = ({couchList}) => {
    return (
        <div className='couch_card'>
            <div className='couch_image_box'>
                <img src={couchList.image} alt='img' className='couch_img'/>
            </div>
            <div className='couch_discription_box'>
                <span className='couch_name'>{couchList.name}</span>
                <span className='couch_service'>{couchList.service}</span>
            </div>
            
        </div>
    );
};

export default MasterCard;