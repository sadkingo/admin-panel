import CircleProgressBar from "./CircleProgressBar.component";

function CircleProgressBarContainer({
    valueStart = 0,
    valueEnd,
    duration,
    easingFunction,
    repeat = false,
    shouldUseInView = false,
    children,
}) {

    return (
        <CircleProgressBar
            valueStart={valueStart}
            valueEnd={valueEnd}
            duration={duration}
            easingFunction={easingFunction}
            shouldUseInView={shouldUseInView}
            repeat={repeat}
        >
            {children}
        </CircleProgressBar>
    )
}
export default CircleProgressBarContainer;
