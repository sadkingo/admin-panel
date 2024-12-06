import "./CircleProgressBar.style.css"

import React from "react";
import AnimationProvider from "@components/animation-provider";

import { CircularProgressbarWithChildren, buildStyles } from 'react-circular-progressbar';

function CircleProgressBar({
    valueStart = 0,
    valueEnd,
    duration,
    easingFunction,
    shouldUseInView = false,
    repeat = false,
    children
}) {

    return (
        <AnimationProvider
            valueStart={valueStart}
            valueEnd={valueEnd}
            duration={duration}
            easingFunction={easingFunction}
            shouldUseInView={shouldUseInView}
            repeat={repeat}
        >
            {percentage => (
                <CircularProgressbarWithChildren
                    value={percentage}
                    styles={buildStyles({
                        pathTransition:
                            "stroke-dashoffset 1s ease 0s",
                    })}
                >
                    {children}
                </CircularProgressbarWithChildren>
            )}
        </AnimationProvider>
    )

}

export default CircleProgressBar;
