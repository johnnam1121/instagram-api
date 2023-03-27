import './App.css';
import InstagramCalls from './InstagramCalls';
import TokenTest from './TokenTest';
import { InstagramGallery } from "instagram-gallery";

function App() {
  return (
    <div>
      <h1>Instagram Test</h1>
      {/* <InstagramCalls token={process.env.REACT_APP_INS_TOKEN} limit={12} /> */}

      <InstagramGallery accessToken={process.env.REACT_APP_INS_TOKEN} count={24} />

    </div>
  );
}

export default App;
