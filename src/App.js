import './App.css';
import InstagramCalls from './InstagramCalls';

function App() {
  return (
    <div>
      <h1>Instagram Test</h1>
      <InstagramCalls token={process.env.REACT_APP_INS_TOKEN} limit={12} />
    </div>
  );
}

export default App;
