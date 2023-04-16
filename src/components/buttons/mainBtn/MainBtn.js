import React from 'react'

export default function MainBtn(props) {
    return (
        <>
            <div className='downloadBtn' >
                <a
                    href={props.btnLink}
                    download={props.downloadPdf}>
                    {props.btnText}
                    <i className={props.btnIcon}></i>
                </a>
            </div>
        </>
    )
}
