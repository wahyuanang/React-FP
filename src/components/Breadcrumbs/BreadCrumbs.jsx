import React from 'react';

const Breadcrumb = ({text1, active}) => {

    return (
        <>
            <div className='flex gap-3 mb-5 text-[20px] font-bold'>
                <p className={active == text1 ? "font-bold" : "" }>{text1}</p>
            </div>
        </>
    )
}

export default Breadcrumb