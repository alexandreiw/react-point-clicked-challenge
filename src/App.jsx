import { useState } from 'react';
import Point from './components/Point';
import { Button } from './components/Button';

const App = () => {
  const [listPoints, setListPoints] = useState([]);
  const [undid, setUndid] = useState([]);

  const handleClick = (event) => {
    const newPoint = {
      positionX: event.clientX,
      positionY: event.clientY,
    };
    setListPoints((prev) => [...prev, newPoint]);
  };

  const handleUndo = (event) => {
    event.stopPropagation();

    if (listPoints.length === 0) {
      return;
    }

    const lastPoint = listPoints[listPoints.length - 1];

    setUndid((prev) => [...prev, lastPoint]);

    setListPoints((prev) => {
      const newList = [...prev].slice(0, -1);
      return newList;
    });
  };

  const handleRedo = (event) => {
    event.stopPropagation();

    if (undid.length === 0) {
      return;
    }

    const recoveredPoint = undid[undid.length - 1];

    setUndid((prev) => {
      const newList = [...prev].slice(0, -1);
      return newList;
    });

    setListPoints((prev) => [...prev, recoveredPoint]);
  };

  return (
    <section className="relative flex h-screen items-center justify-center" onClick={handleClick}>
      {listPoints.map((item, index) => (
        <Point key={index} style={{ left: item.positionX, top: item.positionY }} />
      ))}
      <Button onClick={handleUndo}>desfazer</Button>
      <Button onClick={handleRedo}>refazer</Button>
    </section>
  );
};
export default App;
