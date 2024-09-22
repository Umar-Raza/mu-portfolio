import React from 'react'
import * as LottiePlayer from "@lottiefiles/lottie-player";
export default function PreLoader() {
    return (
        <div className='preLoader'>
            <lottie-player
                autoplay
                loop
                speed="1"
                mode="normal"
                src="https://assets7.lottiefiles.com/packages/lf20_f1dhzsnx.json "
                style={{ width: "500px", height: "500px", }}
            ></lottie-player>
        </div>
    )
}
