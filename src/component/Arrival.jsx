import React from 'react';
import '../Style/Arrival.css'; // Import the CSS

const products = [
  {
    image: 'https://demo.athemes.com/botiga-multi-vendor-el/wp-content/webp-express/webp-images/doc-root/wp-content/uploads/sites/145/2022/12/product-water-bottle-420x420.jpg.webp',
    name: 'All In One Bottle',
    price: '$22.00 - $55.00',
    colors: ['#4CAF50', '#2196F3'],
  },
  {
    image: 'https://demo.athemes.com/botiga-multi-vendor-el/wp-content/webp-express/webp-images/doc-root/wp-content/uploads/sites/145/2022/12/product-alexa-420x420.jpg.webp',
    name: 'Amazon Alexa',
    price: '$49.00 - $69.00',
    colors: ['white', 'gray'],
  },
  {
    image: 'https://demo.athemes.com/botiga-multi-vendor-el/wp-content/webp-express/webp-images/doc-root/wp-content/uploads/sites/145/2022/12/product-wireless-headset-420x420.jpg.webp',
    name: 'Headset Gamer Legion',
    price: '$22.00 - $55.00',
    colors: ['black', 'red'],
  },
];

const NewArrivals = () => {
  return (
    <div className="new-arrivals">
      <h2>New Arrival Products</h2>
      <div className="product-list">
        {products.map((product, index) => (
          <div className="product" key={index}>
            <img src={product.image} alt={product.name} />
            <div className="overlay">
              <button>Select Options</button>
              <button>Quick View</button>
            </div>
            <h3>{product.name}</h3>
            <p>{product.price}</p>
            <div className="rating">
              <span>★</span><span>★</span><span>★</span><span>★</span><span>★</span>
            </div>
            <div className="colors">
              {product.colors.map((color, i) => (
                <div
                  key={i}
                  className="color-circle"
                  style={{ backgroundColor: color }}
                ></div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NewArrivals;