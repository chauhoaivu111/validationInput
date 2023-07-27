import React, { useState, useEffect } from 'react';
import '../selectionfield/SelectionField.scss'

const initialState = {
  listProducts: [],
  selection1: "",
  selection2: "",
  selection3: "",
};

const SelectionField = () => {
  const [state, setState] = useState(initialState);

// get data from API
  const fetchProduct = async () => {
    try {
      const response = await fetch('https://dummyjson.com/products/');
      const data = await response.json();
      const list = data.products;

      setState((prevState) => ({
        ...prevState,
        listProducts: list
      }));

    } catch (error) {
      console.log('error fetching data', error);
    }
  };

  useEffect(() => {
    fetchProduct();
  }, []);

  useEffect(() => {
    //set default values for all selection
    if (state.listProducts.length > 0) {
      setState((prevState) => ({
        ...prevState,
        selection1: state.listProducts[0].brand,
        selection2: state.listProducts[0].category,
        selection3: state.listProducts[0].title
      }));
    }
  }, [state.listProducts]);


const { selection1, selection2, selection3, listProducts } = state;
// 

const uniqueListProducts = Array.from(new Set(listProducts.map(item => item.brand)))
 .map(brand => {
   return listProducts.find(item => item.brand === brand)
 })


 

// filter catergory if selection = brand name  =>  list category
const filteredCatergory = listProducts.filter((item) => item.brand === selection1);
const uniqueListCategory = Array.from(new Set(filteredCatergory.map(item => item.category)))
.map(
 category => {
   return listProducts.find(item => item.category === category)
 })
// filter title if selection = brand name & category => lsit title
const filteredTitle = listProducts.filter((item) => item.brand === selection1 && item.category === selection2);
// get img have [brand,caterory,title]  => = img
  const filteredImg = listProducts.filter((item) =>item.brand === selection1 && item.category === selection2 && item.title === selection3);

  
// --------------------------------------------------------------------------------
  const handleChange = (e, selectName) => {
    const value = e.target.value;
    setState((prevState) => ({
      ...prevState,
      [selectName]: value
    }));

    // set default value when select option

    if (selectName === "selection1") {
      const filteredProducts = state.listProducts.filter((item) => item.brand === value);

      
      if (filteredProducts.length > 0) {
        setState((prevState) => ({
          ...prevState,
          selection2: filteredProducts[0].category,
          selection3: filteredProducts[0].title
        }));
      }
    }

    if (selectName === "selection2") {
      const filteredProducts = state.listProducts.filter((item) => item.category === value);

      if (filteredProducts.length > 0) {
        setState((prevState) => ({
          ...prevState,
          selection3: filteredProducts[0].title
        }));
      }
    }
  };
// -----------------------------------------------------------------------------------

  return (
    <div className='main_selection'>
      <div className='main_frame_selection'>
      <select value={selection1} onChange={(e) => handleChange(e, "selection1")}>
        {uniqueListProducts.map((item, index) => (
          <option key={index} value={item.brand}>
            {item.brand}
          </option>
        ))}
      </select>
      <select value={selection2} onChange={(e) => handleChange(e, "selection2")}>
        {uniqueListCategory.map((item, index) => (
          <option key={index} value={item.category}>
            {item.category}
          </option>
        ))}
      </select>
      <select value={selection3} onChange={(e) => handleChange(e, "selection3")}>
        {filteredTitle.map((item, index) => (
          <option key={index} value={item.title}>
            {item.title}
          </option>
        ))}
      </select>

      
      </div>

      <div className='frame_img'>
        {filteredImg.map((item, index) => (
          <div key={index} className='frame_img_infor' >
            <div className='main_img_descript'>
             <img src={item.thumbnail} alt='' />
             <p>{item.description}</p>
             </div>

             <div className='frame_price'>
             <p>Stock: {item.stock}</p>
              <p>Pirce: {item.price} $</p>
              <p>Discount:{item.discountPercentage}</p>
              </div>



          </div>
       
      ))}

     
      </div>
    </div>
  );
};

export default SelectionField;
