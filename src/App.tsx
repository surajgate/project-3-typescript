import React from 'react';

import Review from './components/Review';

function App() {
  return (
    <main>
      <section className="conatiner">
        <div className="title">
          <h2>Our Reviews</h2>
          <div className="underline"></div>
        </div>
        <Review/>
      </section>
    </main>
  );
}

export default App;
