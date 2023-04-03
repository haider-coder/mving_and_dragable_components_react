import React, { useState, useEffect } from 'react';

function MovingDiv({ start_x, end_x, start_y, end_y, speed_delay }) {
    const [position, setPosition] = useState({ x: start_x, y: start_y });

    useEffect(() => {
        const interval = setInterval(() => {
            setPosition(prevPosition => {
                const temp = {
                    x: (Math.random() * end_x) + start_x,
                    y: (Math.random() * end_y) + start_y
                }
                return { ...temp }
            }
            );
        }, speed_delay);
        return () => clearInterval(interval);
    }, []);

    return (

        <div style={{ position: 'absolute', left: position.x, top: position.y, transition: `all ${speed_delay / 1000}s ease-in-out` }}>
            <p style={{ width: '50px', height: '50px' }}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.042 21.672L13.684 16.6m0 0l-2.51 2.225.569-9.47 5.227 7.917-3.286-.672zM12 2.25V4.5m5.834.166l-1.591 1.591M20.25 10.5H18M7.757 14.743l-1.59 1.59M6 10.5H3.75m4.007-4.243l-1.59-1.59" />
                </svg>
            </p>


        </div>
    );
}

export default MovingDiv;
