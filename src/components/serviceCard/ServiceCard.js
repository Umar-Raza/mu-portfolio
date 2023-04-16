import React from 'react'
export default function ServiceCard(props) {
    return (
        <>
            <div className="col-12 col-md-4   mx-auto">
                <div className="serviceCard">
                    <div className="card">
                        <div className='iconDiv'>
                            <i className={props.icon}></i>
                        </div>
                        <h5>{props.title}</h5>
                        <p>{props.paragraph}</p>
                    </div>
                </div>
            </div>
        </>
    )
}
