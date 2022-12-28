import { useState } from 'react';
import Point from './components/Point';
import { Button } from './components/Button';
const App = () => {
  const [listPoints, setListPoints] = useState([]);

  const handleClick = (event) => {
    const newPoint = {
      positionX: event.clientX,
      positionY: event.clientY,
    };
    setListPoints((prev) => [...prev, newPoint]);
  };
  return (
    <section className="relative flex h-screen items-center justify-center" onClick={handleClick}>
      {listPoints.map((item, index) => (
        <Point key={index} style={{ left: item.positionX, top: item.positionY }} />
      ))}
      <Button>remover ponto</Button>
      <Button>refazer ponto</Button>
    </section>
  );
};
export default App;
