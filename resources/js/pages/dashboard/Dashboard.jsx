import "./dashboard.style.css"
import SideMenu from "@components/side-menu/SideMenu"
import SettingsSideBar from "@components/settings-side-bar/SettingsSideBar"
import NavBar from "@components/nav-bar/NavBar"
import ReactApexChart from "react-apexcharts"
import Circle from "@components/circle/Circle"
import { Icon } from "@iconify/react"
import { CircularProgressbarWithChildren, buildStyles } from 'react-circular-progressbar';
import ChangingProgressProvider from "./ChangingProgressProvider"
import { InView } from "react-intersection-observer"
import { useState } from "react"

export default function Dashboard() {
    const [isMenuActive, setIsMenuActive] = useState(true);
    const chartOptions = {
        series: [{
            name: 'total',
            data: [94, 80, 94, 80, 94, 80, 94]
        }, {
            name: 'pipline',
            data: [72, 60, 84, 60, 74, 60, 78]
        }],
        chart: {
            fontFamily: '"Inter", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"',
            height: 245,
            type: 'area',
            toolbar: {
                show: false
            },
            sparkline: {
                enabled: false,
            },
        },
        colors: ["#3a57e8", "#4bc7d2"],
        dataLabels: {
            enabled: false
        },
        stroke: {
            curve: 'smooth',
            width: 3,
        },
        yaxis: {
            max: 99,
            min: 54,
            show: true,
            labels: {
                show: true,
                minWidth: 19,
                maxWidth: 19,
                style: {
                    colors: "#8A92A6",
                },
                offsetX: -5,
            },
        },
        legend: {
            show: false,
        },
        xaxis: {
            labels: {
                minHeight: 22,
                maxHeight: 22,
                show: true,
                style: {
                    colors: "#8A92A6",
                },
            },
            lines: {
                show: false
            },
            categories: ["Jan", "Feb", "Mar", "Apr", "Jun", "Jul", "Aug"]
        },
        grid: {
            show: false,
        },
        fill: {
            type: 'gradient',
            gradient: {
                shade: 'dark',
                type: "vertical",
                shadeIntensity: 0,
                gradientToColors: undefined,
                inverseColors: true,
                opacityFrom: .4,
                opacityTo: .1,
                stops: [0, 50, 80],
                colors: ["#3a57e8", "#4bc7d2"]
            }
        },
        tooltip: {
            enabled: true,
        },
    };
    const circleProps = [
        { id: 0, diameter: 938, top: "60vh", right: "-100px" },
        { id: 1, diameter: 1224, top: "60vh", right: "-100px" },
        { id: 2, diameter: 1430, top: "60vh", right: "-100px" },
        { id: 3, diameter: 1655, top: "60vh", right: "-100px" },
        { id: 4, diameter: 1900, top: "60vh", right: "-100px" },
    ]
    return (<main className="dashboard">
        <SettingsSideBar />
        <SideMenu isMenuActive={isMenuActive} setIsMenuActive={setIsMenuActive} />
        <div className="dashboard-content">
            <NavBar />
            <div className="dashboard-content__head circle-parent">
                <div className="head__group">
                    <div className="head__group--title">Hello Devs !</div>
                    <div className="head__group--subtitle">We are on a mission to help developers like you to build beautiful projects for free.</div>
                    <button className="head__group--announcments">
                        <Icon width={24} height={24} icon="fa6-solid:microphone-lines" />
                        <span>Announcments</span>
                    </button>
                </div>
                {circleProps.map(circleProp =>
                    <Circle className="error-page__circle" key={circleProp.id} {...circleProp} />
                )}
            </div>
            <ReactApexChart
                className={"area-chart card"}
                type={"area"}
                height={350}
                series={chartOptions.series}
                options={chartOptions} />

            <InView>
                {({ inView, ref, entry }) => (
                    <ChangingProgressProvider values={[0, 50, 100]}>
                        {percentage => (
                            <CircularProgressbarWithChildren
                                value={percentage}
                                styles={buildStyles({
                                    pathTransition:
                                        "stroke-dashoffset 0.5s ease 0s"
                                })}
                            >
                                <Icon icon="bi:arrow-up" width={"35%"} height={"35%"} style={{ rotate: "45deg", color: "gray" }} />
                            </CircularProgressbarWithChildren>
                        )}
                    </ChangingProgressProvider>
                )}
            </InView>

        </div>

    </main>)
}

function Example(props) {
    return (
        <div style={{ marginBottom: 80 }}>
            <hr style={{ border: "2px solid #ddd" }} />
            <div style={{ marginTop: 30, display: "flex" }}>
                <div style={{ width: "30%", paddingRight: 30 }}>{props.children}</div>
                <div style={{ width: "70%" }}>
                    <h3 className="h5">{props.label}</h3>
                    <p>{props.description}</p>
                </div>
            </div>
        </div>
    );
}
