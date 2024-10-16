import React from 'react';

const Doc = ({ name, description, onEdit }) => {
    return (
        <div className='card'>
            <div className='CardContent'>
                <div><strong>{name}</strong></div>
                {/* Render the description as HTML */}
                <div>
                    <i className="fa-solid fa-pen-to-square" onClick={onEdit}></i>
                    <i className="fa-solid fa-paste"></i>
                </div>
            </div>
            <div style={{paddingLeft:'25px'}} dangerouslySetInnerHTML={{ __html: description }} />
        </div>
    );
}

export default Doc;
