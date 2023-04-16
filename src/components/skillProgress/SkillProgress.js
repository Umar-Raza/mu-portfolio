import React from 'react'
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';

export default function SkillProgress(props) {
    return (
        <div className="progress" style={{ width: "125px", height: "125px", background: '#e0f0f5', margin: " auto" }}>
            <CircularProgressbar value={props.percentage} text={props.percentageText} styles={buildStyles({
                textColor: "#348aa7",
                pathColor: "#348aa7"
            })} />
            <div>
                <h4>{props.text}</h4>
            </div>
        </div>
    )
}
