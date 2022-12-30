import { useState } from 'react';
import { Point } from './components/Point';
import { Button } from './components/Button';

export const App = () => {
    const [listPoints, setListPoints] = useState([]);
    const [listUndid, setListUndid] = useState([]);

    const handleClick = (event) => {
        const newPoint = {
            positionX: event.clientX - 6, // -6 pixel correction
            positionY: event.clientY - 6,
        };
        setListPoints((prev) => [...prev, newPoint]);
        setListUndid([]);
    };

    const handleUndo = (event) => {
        event.stopPropagation();
        if (listPoints.length === 0) {
            return;
        }
        const lastPoint = listPoints[listPoints.length - 1];
        setListUndid((prev) => [...prev, lastPoint]);
        setListPoints((prev) => {
            const newList = [...prev].slice(0, -1);
            return newList;
        });
    };

    const handleRedo = (event) => {
        event.stopPropagation();
        if (listUndid.length === 0) {
            return;
        }
        const recoveredPoint = listUndid[listUndid.length - 1];
        setListUndid((prev) => {
            const newList = [...prev].slice(0, -1);
            return newList;
        });
        setListPoints((prev) => [...prev, recoveredPoint]);
    };

    const handleLogo = (event) => {
        event.stopPropagation();
    };

    return (
        <section
            className="relative flex h-screen items-center justify-center"
            onClick={handleClick}
        >
            <img
                src="/logo-aiw.png"
                alt="logo"
                className="absolute bottom-5 w-[100px]"
                onClick={handleLogo}
            />
            {listPoints.map((item, index) => (
                <Point key={index} style={{ left: item.positionX, top: item.positionY }} />
            ))}
            <Button onClick={handleUndo}>desfazer</Button>
            <Button onClick={handleRedo}>refazer</Button>
        </section>
    );
};
