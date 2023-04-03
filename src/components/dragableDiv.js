import React, { useState, useRef } from 'react';

function DraggableDiv({ start_x, start_y }) {
    const [isDragging, setIsDragging] = useState(false);
    const [position, setPosition] = useState({ x: start_x, y: start_y });
    const [offset, setOffset] = useState({ x: start_x, y: start_y });
    const dragRef = useRef();

    const handleMouseDown = (event) => {
        setIsDragging(true);
        const { offsetLeft, offsetTop } = dragRef.current;
        const offsetX = event.clientX - offsetLeft;
        const offsetY = event.clientY - offsetTop;
        setOffset({ x: offsetX, y: offsetY });
    };

    const handleMouseUp = () => {
        setIsDragging(false);
    };

    const handleMouseMove = (event) => {
        if (!isDragging) return;
        const x = event.clientX - offset.x;
        const y = event.clientY - offset.y;
        setPosition({ x, y });
    };

    return (
        <div
            ref={dragRef}
            style={{
                position: 'fixed',
                top: position.y,
                left: position.x,
                border: '1px solid black',
                padding: '10px',
                cursor: 'move',
            }}
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUp}
        >
            Drag me!
        </div>
    );
}

export default DraggableDiv;
