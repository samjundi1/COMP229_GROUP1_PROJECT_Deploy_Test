import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './FlowerList.css';
import Navbar from '../../components/navbar/Navbar_vendor';
import Footer from '../../components/footer/footer';


const FlowerList = () => {
    const navigate = useNavigate();
    const [flower, setflower] = useState([]);

    useEffect(()=>{
        fetch("http://localhost:8080/api/flowers")
        .then(res=>{
          return res.json()  
        })
        .then(data =>{
            setflower(data)
        })
    }, [])

    const handleCardClick = (flower) => {
        navigate('/vendor-view-flower-detail', { state: { flower } });
    };

    return (
        <>
        <Navbar/>
        <div className='listContainer'>
        <div className="flower-list-page">
            <div className="flower-grid">
                {flower.map((flower, index) => (
                    <div
                        key={index}
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
