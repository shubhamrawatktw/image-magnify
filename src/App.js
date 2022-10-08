import { useRef, useState } from "react";
import Rheostat from "rheostat";
import "rheostat/initialize";
const image =
  "https://upload.wikimedia.org/wikipedia/commons/8/81/Salman_Khan_filmfare.jpg";
function App() {
  const [min, setMin] = useState(1);
  const [max, setMax] = useState(100);

  return (
    <div className="b w-96 mx-auto">
      <Rheostat
        min={1}
        max={100}
        values={[min, max]}
        onValuesUpdated={(e) => {
          setMin(e.values[0]);
          setMax(e.values[1]);
        }}
      />
      <div>
        <div className="flex space-x-2">
        <p>min</p>
          <input type="number" value={min} onChange={(e)=>setMin(e.target.value)} className=" w-12 border" />
        </div>
        <div className="flex space-x-2">
        <p>max</p>
          <input type="number" value={max} onChange={(e)=>setMax(e.target.value)} className=" w-12 border" />
        </div>
      </div>
    </div>
  );
}

export default App;
