import React, { useState, useEffect, useRef } from "react";
import type { NextPage } from "next";
import dynamic from "next/dynamic";

interface MainPageProps {
    filled: number;
    setFilled: React.Dispatch<React.SetStateAction<number>>;
    isRunning: boolean;
    setIsRunning: React.Dispatch<React.SetStateAction<boolean>>;
}

const LoadingComponent: React.FC<MainPageProps> = ({
    filled,
    isRunning,
    setIsRunning,
}) => {
    const [isHovered, setIsHovered] = useState(false);
    const handleMouseEnter = () => {
        setIsHovered(true);
    };

    const handleMouseLeave = () => {
        setIsHovered(false);
    };

    const handleRunClick = () => {
        setIsRunning(true);
    };

    return (
        <div
            style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                marginTop: "10%",
                flexDirection: "column",
            }}
        >
            <div
                style={{
                    position: "relative",
                    overflow: "hidden",
                    width: "350px",
                    height: "35px",
                    borderRadius: "5px",
                    backgroundColor: "#eee",
                }}
            >
                <div
                    style={{
                        height: "100%",
                        width: `${filled}%`,
                        backgroundColor: "#a66cff",
                        transition: "width 0.5s",
                    }}
                ></div>
                <span
                    style={{
                        fontWeight: "600",
                        fontFamily: "Franklin Gothic Medium",
                        position: "absolute",
                        left: "50%",
                        top: "50%",
                        transform: "translate(-50%, -50%)",
                        color: "#eee",
                        textShadow:
                            "-1px 0 #555, 0 1px #555, 1px 0 #555, 0 -1px #555",
                    }}
                >
                    {filled}%
                </span>
            </div>
            <div>
                <button
                    style={{
                        display: "block",
                        margin: "5rem auto",
                        border: "none",
                        borderRadius: "3px",
                        outline: "none",
                        width: "100px",
                        height: "40px",
                        backgroundColor: "#937DC2",
                        transition: "box-shadow 0.5s",
                        fontSize: "16px",
                        fontFamily: "arial",
                        color: "#fff",
                        cursor: "pointer",

                        boxShadow: isHovered
                            ? "inset 100px 0 0 0 #7c54d1"
                            : "none",
                    }}
                    onClick={handleRunClick}
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                >
                    Run
                </button>
            </div>
        </div>
    );
};

const MainPage = dynamic<MainPageProps>(() => import("../components/Main"), {
    ssr: false,
    loading: () => (
        <LoadingComponent
            filled={0}
            setFilled={() => {}}
            isRunning={false}
            setIsRunning={() => {}}
        />
    ),
});

const Home: NextPage = () => {
    const [filled, setFilled] = useState(0);
    const [isRunning, setIsRunning] = useState(false);
    const intervalIdRef = useRef<NodeJS.Timer | null>(null);

    useEffect(() => {
        if (filled < 100 && isRunning) {
            intervalIdRef.current = setInterval(() => {
                setFilled((prev) => (prev < 100 ? prev + 2 : prev));
            }, 50);
        }

        return () => {
            // Clear the interval when the component unmounts or filled reaches 100
            if (intervalIdRef.current) {
                clearInterval(intervalIdRef.current);
            }
        };
    }, [filled, isRunning]);

    return (
        <div>
            <MainPage
                filled={filled}
                setFilled={setFilled}
                isRunning={isRunning}
                setIsRunning={setIsRunning}
            />
        </div>
    );
};

export default Home;
