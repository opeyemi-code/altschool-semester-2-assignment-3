import React, { useState } from "react";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import ProductsSection from "./components/ProductsSection";
import Cart from "./components/Cart";
// import { document } from "postcss";

function App() {
  const [isCartOpen, setIsCartOpen] = useState(false);

  const toggleCart = (e) => {
    e.preventDefault();

    if (screen.width >= 1440) {
      setIsCartOpen((prev) => !prev);
    }
  };

  return (
    <>
      <div className="container">
        <Header toggleCartOpen={toggleCart} />
        <main className="main">
          <HeroSection />
          <ProductsSection />
          {/* render cart UI */}
          {isCartOpen && (
            <Cart
              closeCart={(e) => {
                e.preventDefault();
                setIsCartOpen((prev) => !prev);
              }}
            />
          )}
        </main>
      </div>
    </>
  );
}

export default App;
