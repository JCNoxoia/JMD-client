import {createRoot} from 'react-dom/client';
import "./index.scss";

const JMDApplication = () => {
  return (
    <div className="jmd-database">
      <div>Good morning!</div>
    </div>
  );
};

const container = document.querySelector("#root");
const root = createRoot(container);

root.render(<JMDApplication />);