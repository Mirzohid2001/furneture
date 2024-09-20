import React from "react"

const Back = ({name, title, cover}) => {
    return (
        <div className='back' style={{backgroundImage: `url(${cover})`}}>
            <div className="back-cover">
                <div className='container'>
                    <span>{name}</span>
                    <h1>{title}</h1>
                </div>
            </div>
        </div>
    )
}

export default Back
