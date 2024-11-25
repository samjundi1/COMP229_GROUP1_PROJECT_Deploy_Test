import React from 'react';
import { useLocation, Link } from 'react-router-dom';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import Navbar from '../../components/navbar/Navbar_vendor';
import Footer from '../../components/footer/footer';

const FlowerDetail = () => {
  const location = useLocation();
  const flower = location.state?.flower || {
    name: 'Default Flower',
    price: '$0',
    description: 'No description available.',
    vendor: 'N/A',
    imageUrls: ['/default-flower.jpg'],
  };

  // Dummy related products data (replace with real data from API or props)
  const relatedProducts = [
    { id: 1, name: 'Product 1', imageUrl: '/images/related1.jpg' },
    { id: 2, name: 'Product 2', imageUrl: '/images/related2.jpg' },
    { id: 3, name: 'Product 3', imageUrl: '/images/related3.jpg' },
    { id: 4, name: 'Product 4', imageUrl: '/images/related4.jpg' },
    { id: 5, name: 'Product 5', imageUrl: '/images/related5.jpg' },
  ];

  return (
    <>
      <Navbar />
      <Container fluid className="py-4" style={{ backgroundColor: '#222222', color: 'white', minHeight: '100vh' }}>
        <Row>
          <Col>
            <nav aria-label="breadcrumb">
              <ol className="breadcrumb">
                <li className="breadcrumb-item">
                  <Link to="/vendor-view-flower-list" className="text-light">
                    Home
                  </Link>
                </li>
                <li className="breadcrumb-item">
                  <Link to="/category-x" className="text-light">
                    Category X
                  </Link>
                </li>
                <li className="breadcrumb-item active text-light" aria-current="page">
                  {flower.name}
                </li>
              </ol>
            </nav>
          </Col>
        </Row>
        <Row className="align-items-center">
          <Col md={6} className="d-flex justify-content-center">
            <div
              style={{
                maxWidth: '500px', // Width based on golden ratio
                height: 'auto', // Auto height to preserve aspect ratio
              }}
            >
              <img
                src={`/images/${flower.imageUrls[0]}`}
                alt={flower.name}
                style={{
                  width: '100%',
                  height: 'auto',
                  borderRadius: '8px',
                  boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.3)',
                }}
              />
            </div>
          </Col>

          <Col md={6}>
            <h2>{flower.name}</h2>
            <h3 className="text-success">${flower.price}</h3>
            <p>
              <strong>Vendor:</strong> {flower.vendor}
            </p>
            <div className="mb-3">
              <label htmlFor="quantity" className="form-label">
                Quantity:
              </label>
              <select id="quantity" className="form-select w-50">
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
              </select>
            </div>
            <p>{flower.description}</p>
          </Col>
        </Row>

        {/* Related Products Section */}
        <Row className="mt-5">
          <Col>
            <h3 className="mb-4">Related Products</h3>
            <Row>
              {relatedProducts.map((product) => (
                <Col key={product.id} md={2} className="mb-3">
                  <Card className="bg-secondary text-white text-center h-100">
                    <Card.Img
                      variant="top"
                      src={product.imageUrl}
                      alt={product.name}
                      style={{
                        height: '120px',
                        objectFit: 'cover',
                        borderBottom: '1px solid #444',
                      }}
                    />
                    <Card.Body>
                      <Card.Title style={{ fontSize: '1rem' }}>{product.name}</Card.Title>
                      <Button variant="outline-light" size="sm">
                        View
                      </Button>
                    </Card.Body>
                  </Card>
                </Col>
              ))}
            </Row>
          </Col>
        </Row>

        {/* Footer Section */}
        <Row className="mt-5">
          <Col className="d-flex justify-content-between align-items-center">
            <nav className="d-flex">
              <Link to="/category-x" className="text-light me-3">
                Category X
              </Link>
              <Link to="/category-y" className="text-light me-3">
                Category Y
              </Link>
              <Link to="/category-z" className="text-light">
                Category Z
              </Link>
            </nav>
            <span className="text-light">Shop Name</span>
          </Col>
        </Row>
      </Container>
      <Footer />
    </>
  );
};

export default FlowerDetail;
