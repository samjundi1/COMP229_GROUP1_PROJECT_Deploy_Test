import React, { useState, useEffect } from 'react';
import './AddFlower.css';
import Navbar from '../../components/navbar/Navbar_vendor';
import Footer from '../../components/footer/footer';
import { useNavigate } from 'react-router-dom';

const AddFlower = () => {
    // const [formValues, setFormValues] = useState({
    //     name: '',
    //     description: '',
    //     price: '',
    //     categories: [''],
    //     birthday: false,
    //     anniversary: false,
    //     valentines: false,
    //     occasions: [''],
    //     quantity: '',
    //     availability: '',
    //     notes: '',
    //     imageUrls:[''],
    // });

    //  const [formErrors, setFormErrors] = useState({});

    //  const validateForm = (event) => {
    //      let newErrors = {};

    //      const requiredFields = [
    //          'name', 'description', 'price', 'categories', 'quantity', 'availability'
    //      ];

    //      requiredFields.forEach((field) => {
    //          if (!formValues[field]) {
    //              // Capitalize the first letter of the field name for the error message
    //              const formattedFieldName = field.charAt(0).toUpperCase() + field.slice(1);
    //              newErrors[field] = `${formattedFieldName} is required`;
    //          }
    //      });

    //      if (formValues.price && (isNaN(formValues.price) || Number(formValues.price) <= 0)) {
    //          newErrors.price = 'Price must be a positive number';
    //      }

    //      if (formValues.quantity && (isNaN(formValues.quantity) || Number(formValues.quantity) <= 0)) {
    //          newErrors.quantity = 'Quantity must be greater than 0';
    //      }

    //      if (!formValues.birthday && !formValues.anniversary && !formValues.valentines && !formValues.none) {
    //          newErrors.occasions = 'Select at least one occasion';
    //      }

    //      setFormErrors(newErrors);

    //      return Object.keys(newErrors).length === 0;
    //  };

    // const handleChange = (event) => {
    //     const { name, type, value, checked, files } = event.target;

    //     setFormValues(prevValues => ({
    //         ...prevValues,
    //         [name]: type === 'checkbox' ? checked : type === 'file' ? files[0] : value,
    //     }));
    // };

    // const handleSubmit = (event) => {
    //     event.preventDefault();

    //    fetch("http://localhost:8080/api/flowers", {
    //        method: 'POST',
    //        headers: {"Content-Type": "application/json"},
    //        body: JSON.stringify(formValues)
    //    }).then(() =>{
    //        console.log("Added flower")
    //    })

    //     if (validateForm()) {
    //         // Form is valid, proceed with form submission
    //         console.log("Form submitted successfully", formValues);
        
          
    //     }
    // };

   


    // return (
    //     <>
    //     <Navbar/>
    //     <section id='add'>
    //         <div id='container'>
    //             <h1>Add Flower</h1>

    //             <form id='addFlower' onSubmit={handleSubmit} noValidate>
                    
    //                 <label htmlFor='name'>Name</label>
    //                 <input type='text' id='name' name='name' value={formValues.name} onChange={handleChange} />
    //                 {formErrors.name && <span className="error">{formErrors.name}</span>}

    //                 <label htmlFor='description'>Description</label>
    //                 <input type='text' id='description' name='description' value={formValues.description} onChange={handleChange} />
    //                 {formErrors.description && <span className="error">{formErrors.description}</span>}

    //                 <label htmlFor='price'>Price</label>
    //                 <input type='text' id='price' name='price' value={formValues.price} onChange={handleChange} />
    //                 {formErrors.price && <span className="error">{formErrors.price}</span>}

    //                 <label htmlFor='categories'>Categories</label>
    //                 <select id='category' name='category' value={formValues.category} onChange={handleChange}>
    //                     <option value=''>Select Category</option>
    //                     <option value='rose'>Rose</option>
    //                     <option value='tulip'>Tulip</option>
    //                     <option value='lily'>Lily</option>
    //                 </select>
    //                 {formErrors.category && <span className="error">{formErrors.category}</span>}

    //                 <label id='occasions'>Occasions</label>
    //                 <fieldset id='check'>
    //                     <label>
    //                         Birthday
    //                         <input type='checkbox' id='birthday' name='birthday' checked={formValues.birthday} onChange={handleChange} />
    //                     </label>
    //                     <label>
    //                         Anniversary
    //                         <input type='checkbox' id='anniversary' name='anniversary' checked={formValues.anniversary} onChange={handleChange} />
    //                     </label>
    //                     <label>
    //                         Valentines
    //                         <input type='checkbox' id='valentines' name='valentines' checked={formValues.valentines} onChange={handleChange} />
    //                     </label>
    //                 </fieldset>
    //                 {formErrors.occasions && <span className="error">{formErrors.occasions}</span>}

    //                 <label htmlFor='quantity'>Quantity</label>
    //                 <input type='number' id='quantity' name='quantity' min='1' value={formValues.quantity} onChange={handleChange} />
    //                 {formErrors.quantity && <span className="error">{formErrors.quantity}</span>}

    //                 <label>Availability</label>
    //                 <fieldset id='check'>
    //                     <label>
    //                         Not available
    //                         <input type='radio' name='availability' value='not_available' checked={formValues.availability === 'not_available'} onChange={handleChange} />
    //                     </label>
    //                     <label>
    //                         Available
    //                         <input type='radio' name='availability' value='available' checked={formValues.availability === 'available'} onChange={handleChange} />
    //                     </label>
    //                 </fieldset>
    //                 {formErrors.availability && <span className="error">{formErrors.availability}</span>}

    //                 <label htmlFor='notes'>Notes</label>
    //                 <textarea id='notes' name='notes' value={formValues.notes} onChange={handleChange}></textarea>

    //                 <label htmlFor='image'>Image(s)</label>
    //                 <input type='file' id='image' name='image' accept='image/*' onChange={handleChange} />

    //                 <button className='btn' type='submit'>Add Flower</button>
    //             </form>
    //         </div>
    //     </section>
    //     <Footer/>
    //     </>
        
    // );

    const [flowerId, setFlowerId] = useState('')
    const [name, setName] = useState('')
    const [description, setDescription] = useState('')
    const [price, setPrice] = useState(0)
    const [imageUrls, setImage] = useState([''])
    const [quantity, setQuantity] = useState(0)
    const [availabilityStatus, setAvailability] = useState('')
    const [occasion, setOccasions] = useState([''])
    const [categories, setCategories] = useState([''])

    const handleSubmit = (e) =>{
        e.preventDefault();
        const flower = {flowerId, name, description, price, imageUrls, quantity, availabilityStatus, occasion, categories}
        
        fetch("http://localhost:8080/api/flowers", {
                    method: 'POST',
                    headers: {"Content-Type": "application/json"},
                    body: JSON.stringify(flower)
                }).then(() =>{
                    console.log("Added flower")
                })

    }


    function confirmFlower(){
        alert("Thank you for submitting this flower! We will now redirect you to the catalogue")
   }
    const nav = useNavigate()


    function navigate(){
        nav("/vendor-view-flower-list")
    }


return(
<>
<Navbar/>

<section id='add'>

    <div id='container'>
    <form id='addFlower' onSubmit={handleSubmit} noValidate>
        <h1>Add Flower</h1>
        
        <label htmlFor='flowerId'>Flower Id</label>
        <input type='text' id='flowerId' name='flowerId' value={flowerId} onChange={(e)=> setFlowerId(e.target.value)} />
        
        
        <label htmlFor='name'>Name</label>
        <input type='text' id='name' name='name' value={name} onChange={(e)=> setName(e.target.value)} />

        <label htmlFor='desctiption'>Description</label>
        <input type='text' id='description' name='description' value={description} onChange={(e)=> setDescription(e.target.value)} />     

        <label htmlFor='price'>Price</label>
        <input type='number' id='price' name='price' value={price} onChange={(e)=> setPrice(e.target.value)} />


        <label htmlFor='imageUrls'>Image Url</label>
        <input type='string' id='imageUrls' name='imageUrls' value={imageUrls} onChange={(e)=> setImage(e.target.value)} />

        <label htmlFor='quantity'>Quantity</label>
        <input type='number' id='quantity' name='quantity' value={quantity} onChange={(e)=> setQuantity(e.target.value)} />

        <label>Availability</label>
            <fieldset id='check'>
                <label>
                Not available
                <input type='radio' name='availability' value='not_available' onChange={(e)=> setAvailability(e.target.value)} />
                        </label>
                        <label>
                            Available
                            <input type='radio' name='availability' value='available'  onChange={(e)=> setAvailability(e.target.value)} />
                </label>
            </fieldset>

        <label id='occasions'>Occasions</label>
                <fieldset id='check'>
                    <label>
                        Birthday
                        <input type='checkbox' id='birthday' name='birthday' value={occasion} onChange={(e)=> setOccasions(e.target.value)} />
                    </label>
                    <label>
                        Anniversary
                        <input type='checkbox' id='anniversary' name='anniversary' value={occasion} onChange={(e)=> setOccasions(e.target.value)} />
                        </label>
                        <label>
                        Valentines
                        <input type='checkbox' id='valentines' name='valentines' value={occasion} onChange={(e)=> setOccasions(e.target.value)} />
                    </label>
                </fieldset>

                <label htmlFor='categories'>Categories</label>
                     <select id='category' name='category' value={categories} onChange={(e)=> setCategories(e.target.value)}>
                         <option value=''>Select Category</option>
                         <option value='rose'>Rose</option>
                         <option value='tulip'>Tulip</option>
                         <option value='lily'>Lily</option>
                     </select>
                     <button className='btn' type='submit' onClick={()=>{confirmFlower(); setTimeout(() => navigate(), 0)}}>Add Flower</button>
    </form>

</div>

</section>
<Footer/>

</>       
);
};

export default AddFlower;