import React from 'react';
import { useLocation, Link } from 'react-router-dom';
import './FlowerDetail.css';
import Navbar from '../../components/navbar/Navbar_vendor';
import Footer from '../../components/footer/footer';

const FlowerDetail = () => {
  const location = useLocation();
  const flower = location.state?.flower || {
    name: 'Default Flower',
    price: '$0',
    description: 'No description available.',
    vendor: 'N/A'
  };

  return (
    <>
    <Navbar/>
    <div className='detailContainer'>
    <div className="flower-detail-page">
      <div className="breadcrumb">
        <Link to="/">Home</Link> &gt; <Link to="/category-x">Category X</Link> &gt; {flower.name}
      </div>
      <div className="flower-detail-container">
        <div className="image-section">
        <img src={`/images/${flower.imageUrls[0]}`} alt={flower.name} height={350} width={350} />
        <div className="thumbnail-container">
            <div className="thumbnail-box">Box</div>
            <div className="thumbnail-box">Box</div>
            <div className="thumbnail-box">Box</div>
          </div>
        </div>
        <div className="info-section">
          <h2>{flower.name}</h2>
          <p className="flower-price">{flower.price}</p>
          <p className="flower-vendor"><strong>Vendor:</strong> {flower.vendor}</p>
          <div className="quantity-section">
            <label htmlFor="quantity">Quantity:</label>
            <select id="quantity">
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
            </select>
          </div>
          <p className="description">{flower.description}.</p>
        </div>
      </div>
      <div className="related-products-section">
        <h3>Related Products</h3>
        <div className="related-products-container">
          <div className="related-product-box">Product</div>
          <div className="related-product-box">Product</div>
          <div className="related-product-box">Product</div>
          <div className="related-product-box">Product</div>
          <div className="related-product-box">Product</div>
        </div>
        <footer className="flower-footer">
          <nav className="footer-nav">
            <span>Shop Name</span>
            <Link to="/category-x" className="nav-link">Category X</Link>
            <Link to="/category-y" className="nav-link">Category Y</Link>
            <Link to="/category-z" className="nav-link">Category Z</Link>
          </nav>
        </footer>
      </div>
    </div>
    </div>
    <Footer/>
    </>
  );
};

export default FlowerDetail;
