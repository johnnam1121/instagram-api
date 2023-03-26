import './App.css';
import InstagramCalls from './InstagramCalls';

function App() {
  return (
    <div>
      <InstagramCalls token={process.env.REACT_APP_INS_TOKEN} limit={12} />
    </div>
  );
}

export default App;
