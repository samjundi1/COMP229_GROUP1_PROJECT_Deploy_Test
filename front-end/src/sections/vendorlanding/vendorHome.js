
import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { useUserContext } from '../../sections/auth/UserContext';
import SignedInNav from '../../components/navbar/Navbar_vendor';
import Footer from '../../components/footer/footer';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import './Vendor.css';

const VendorLandingPage = () => {
    <title>Vendor Landing page</title>
    const { userAccName } = useUserContext(); // Access userAccName from context
    return (
        <>
        <SignedInNav />
            <div className='vendorHome'>
            <Container
                style={{
                    backgroundColor: '#ffffff',
                    borderRadius: '8px',
                    padding: '30px',
                }}
                className="shadow"
            >
                {/* Welcome Section */}
                <Row className="text-center mb-4">
                    <Col>
                        <h1 className="mb-4">Welcome, {userAccName ? userAccName : 'Guest'}!</h1>
                        <p className="text-muted">
                            "Here's your quick guide to managing your flower catalog with ease"
                        </p>
                    </Col>
                </Row>

                {/* Add Flower Section */}
                <Row className="text-center mb-4">
                    <Col>
                        <div>
                            <p>
                                <a href="#" className="mx-2">Home</a> |
                                <a
                                    href="#"
                                    className="mx-2 text-primary border border-primary rounded-pill px-2 py-1"
                                    style={{ backgroundColor: '#f8f9fa' }}
                                >
                                    Add Flower
                                </a> |
                                <a href="#" className="mx-2">View Catalogue</a>
                            </p>
                            <p>
                                Add Flowers to your catalog with just a few clicks!
                            </p>
                        </div>
                    </Col>
                </Row>

                {/* View Catalogue Section */}
                <Row className="text-center mb-4">
                    <Col>
                        <div>
                            <p>
                                <a href="#" className="mx-2">Home</a> |
                                <a href="#" className="mx-2">Add Flower</a> |
                                <a
                                    href="#"
                                    className="mx-2 text-primary border border-primary rounded-pill px-2 py-1"
                                    style={{ backgroundColor: '#f8f9fa' }}
                                >
                                    View Catalogue
                                </a>
                            </p>
                            <p>
                                Preview your entire collection as customers will see it!
                            </p>
                        </div>
                    </Col>
                </Row>

                {/* Profile Section */}
                <Row className="text-center mb-4">
                    <Col>
                        <p className="mb-2">
                            | <a href="#" className="text-primary fw-bold">VendorName</a>
                        </p>
                        <div className="text-center mb-3" style={{ width: "200px", margin: "0 auto" }}>
                            <Button variant="outline-primary" className="w-100 mb-2">
                                Manage Profile
                            </Button>
                            <Button variant="outline-danger" className="w-100">
                                Sign Out
                            </Button>
                        </div>
                        <p className="text-muted small mb-0">
                            Update your information, logo, and settings to personalize your profile!
                        </p>
                        <p className="text-muted small">
                            Click Sign out to securely sign out of your account!
                        </p>
                    </Col>
                </Row>
            </Container>
            </div>
            <Footer />
            </>
    );
};

export default VendorLandingPage;
