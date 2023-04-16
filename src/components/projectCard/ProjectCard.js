import React from 'react'

export default function ProjectCard(props) {
    return (
        <>
            <div className="col-12 col-md-4 mx-auto">
                <div className="Project-Card">
                    <div className="card" style={{   height: "24rem" }}>
                        <div className="zoom">
                            <img src={props.img} className="card-img-top" alt="Img" />
                        </div>
                        <div className="card-body">
                            <h5 className="card-title">{props.hadding}</h5>
                            <div className="row">
                                <span className="col-12 col-md-6 ">
                                    <p>{props.paragaraph}</p>
                                </span>
                                <span className="col-12 col-md-6 text-end">
                                    <h4><a target='_blank' rel="noreferrer" href={props.webLink}><i className="bi bi-box-arrow-up-right"></i></a></h4>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div >
        </>
    )
}
