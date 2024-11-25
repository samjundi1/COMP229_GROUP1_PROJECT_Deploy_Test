import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './FlowerList.css';
import Navbar from '../../components/navbar/Navbar_vendor';
import Footer from '../../components/footer/footer';
import { useUserContext } from '../../sections/auth/UserContext'; // Import the context


const FlowerList = () => {
    const navigate = useNavigate();
    //const [flower, setflower] = useState([]);
    const [flowers, setFlowers] = useState([]);
    const { userAccountId, userAccName,userAccId, userRole } = useUserContext(); // Access userAccountId,AccID, Name and role from context
    // userAccountId = 'user_account_id'; // Replace with the actual userAccount _id
    //const userAccountId = '2024'; // Replace with the actual vendorId you want to use
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);


    useEffect(() => {
        // Fetch the vendor using the userAccount _id
        fetch("http://localhost:8080/api/vendors/:user_id", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ userAccountId })
        })
        .then(res => {
            if (!res.ok) {
                throw new Error('Network response was not ok');
            }
            return res.json();
        })
        .then(vendor => {
            if (vendor.vendorId) {
                // Fetch flowers using the vendorId
                fetch("http://localhost:8080/api/flowers/vendorId", {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({ vendorId: vendor.vendorId })
                })
                .then(res => {
                    if (!res.ok) {
                        throw new Error('Network response was not ok');
                    }
                    return res.json();
                })
                .then(data => {
                    console.log('Fetched flowers:', data); // Log the fetched data
                    setFlowers(data);
                    setLoading(false);
                })
                .catch(error => {
                    console.error('Error fetching flowers:', error);
                    setError('Error fetching flowers');
                    setLoading(false);
                });
            } else {
                console.error('Vendor not found');
                setError('Vendor not found');
                setLoading(false);
            }
        })
        .catch(error => {
            console.error('Error fetching vendor:', error);
            setError('Error fetching vendor');
            setLoading(false);
        });
    }, [userAccountId]);
    const handleCardClick = (flower) => {
        navigate('/vendor-view-flower-detail', { state: { flower } });
    };


    return (
        <>
        <Navbar/>
        <div className='listContainer'>
        <div className="flower-list-page">
            <div className="flower-grid">
            {loading && <p>Loading...</p>}
                {error && <p>{error}</p>}
                {!loading && !error && flowers.length === 0 && <p>No flowers found for this vendor.</p>}
            {flowers.map(flower => (
                    <div
                        key={flower._id}
                        className="flower-item"
                        onClick={() => handleCardClick(flower)}
                    >
                        <div className="flower-image-container">
                            <img src={`/images/${flower.imageUrls[0]}`} alt={flower.name} className="flower-image" />
                        </div>
                        <div className="flower-details">
                            <h3 className="flower-name">Flower Bouquet</h3>
                            <div className='flower-type'>
                                <span className="flower-type">Type</span>
                                <button className="btn">Flower</button>
                            </div>
                            <p className="flower-vendor"><span className="label">Vendor:</span> {flower.vendor}</p>
                            <p className="flower-price"><span className="label">Unit Cost:</span></p>
                            <p className="flower-price-value">{flower.price}</p>
                            <p className={`flower-stock ${flower.quantity > 10 ? 'in-stock' : 'low-stock'}`}>
                                {flower.quantity > 0 ? `${flower.quantity} in stock` : 'Out of stock'}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
        </div>
        <Footer/>
        </>
    );
};

export default FlowerList;
