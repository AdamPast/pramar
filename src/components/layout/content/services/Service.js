import React from 'react'

const Service = (props) => {
    console.log(props);
    return (
        <div className="service">
        <div className="service-ball">
            <i className={props.fa}></i>
        </div>
            <p>{props.desc}</p>
        </div>
    )
}

export default Service
