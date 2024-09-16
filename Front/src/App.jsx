import React from 'react';
import './index.css';
import {
  Hero,
  CustomerRe,
  Footer,
  Popular,
  Services,
  Spl,
  Sub,
  SupQ,
} from './section/index.js';

import Nav from './components/Nav.jsx';

const App = () => {
  return (
    <>
      <main className="relative">
        <Nav />

        <section className="xl:padding-1 wide:padding-r padding-b">
          <Hero />
        </section>

     {/*  <section className="padding">
        
        </section>

        <section className="padding">
          <Popular />
        </section>

        <section className="padding">
          <SupQ />
        </section>

        <section className="padding-x py-10">
          <Services />
        </section>

        <section className="padding">
          <Spl />
        </section>

        <section className="padding bg-pale-blue">
          <CustomerRe />
        </section>

        <section className="padding-x sm:py-32 py-16 w-full">
          <Sub />
        </section>

        <section className="padding bg-black padding-x padding-t pb-b">
          <Footer />
        </section> */}

      </main>
      
    </>
  );
};

export default App;
