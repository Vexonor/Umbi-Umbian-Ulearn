import React from 'react';

const UrDailyLearn = ({ header, icon, description, author, chapter }) => {
    return (
        <div className="grid grid-cols-2">
            <div className=''>
                {header}
                {icon}
                {description}
                {author}
                {chapter}
            </div>
        </div>
    )
}

export default UrDailyLearn;