import React from 'react';
import Header from './Header';
import CardPizza from './CardPizza';
import pizzas from '../pizzas';

const Home = () => {
  return (
    <div>
      <Header />
      <div className="d-flex justify-content-around mt-4">
        {pizzas.map((pizza) => (
          <CardPizza
            key={pizza.id}
            name={pizza.name}
            price={pizza.price}
            ingredients={pizza.ingredients}
            img={pizza.img}
          />
        ))}
      </div>
    </div>
  );
};

export default Home;

