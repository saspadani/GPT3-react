import { Footer, Blog, Posstibility, Features, WhatGPT3 } from './containers';
import { CTA, Brand, Navbar } from './components';
import './App.css';

function App() {
  return (
    <div className='app'>
      <div className='gradient__bg'>
        <Navbar></Navbar>
      </div>
      <Brand />
      <WhatGPT3 />
      <Features />
      <Posstibility />
      <CTA />
      <Blog />
      <Footer />
    </div>
  );
}

export default App;
