import './App.css';
import InstagramCalls from './InstagramCalls';
import TokenTest from './TokenTest';
import { InstagramGallery } from "instagram-gallery";

function App() {
  return (
    <div>
      <h1>Instagram Test</h1>
      {/* <InstagramCalls token={process.env.REACT_APP_INS_TOKEN} limit={12} /> */}

      <InstagramGallery accessToken="IGQVJYN3FscUoydVcwbGpQSWV6QTFRWDlaenVTNC1pVnhlOC1VcHpFcmcxNHR6TWRIS3B6WjdOaE85blRGamhnc3FGQUVCQ2RiaXhHcXpZATThkUVNnY2RxS1ZALWWg1cUprTE5uTlpLRldiZAXpaMVc4NgZDZD" count={24} />

    </div>
  );
}

export default App;
