import { useState } from 'react';
import Point from './components/Point';
import { Button } from './components/Button';
import { list } from 'postcss';
const App = () => {
  const [listPoints, setListPoints] = useState([]);

  const handleClick = (event) => {
    const newPoint = {
      positionX: event.clientX,
      positionY: event.clientY,
    };
    setListPoints((prev) => [...prev, newPoint]);
  };

  const handleUndo = (event) => {
    event.stopPropagation();
    setListPoints((prev) => {
      const newList = [...prev].slice(0, -1);
      return newList;
    });
  };

  return (
    <section className="relative flex h-screen items-center justify-center" onClick={handleClick}>
      {listPoints.map((item, index) => (
        <Point key={index} style={{ left: item.positionX, top: item.positionY }} />
      ))}
      <Button onClick={handleUndo}>desfazer</Button>
      <Button>refazer</Button>
    </section>
  );
};
export default App;
