import { useState } from 'react';
import Point from './components/Point';

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
    <section className="relative h-screen" onClick={handleClick}>
      {listPoints.map((item, index) => (
        <Point key={index} style={{ left: item.positionX, top: item.positionY }} />
      ))}
    </section>
  );
};
export default App;
