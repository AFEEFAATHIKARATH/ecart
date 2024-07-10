import React from 'react'
import './Cart.css'

const Cart = () => {
  return (
    <div>
        <section className='cart-items'>
        <div className='container d_flex'>
          {/* if hamro cart ma kunai pani item xaina bhane no diplay */}

          <div className='cart-details'>
            

            
                <div className='cart-list product d_flex' >
                  <div className='img'>
                    {/* <img src='' alt='' /> */}
                  </div>
                  <div className='cart-details'>
                    <h3>item name</h3>
                    
                  </div>
                  <div className='cart-items-function'>
                    <div className='removeCart'>
                      <button className='removeCart'>
                        <i className='fa-solid fa-xmark'></i>
                      </button>
                    </div>
                    {/* stpe: 5 
                    product ko qty lai inc ra des garne
                    */}
                    <div className='cartControl d_flex'>
                      <button className='incCart' >
                        <i className='fa-solid fa-plus'></i>
                      </button>
                      <button className='desCart'>
                        <i className='fa-solid fa-minus'></i>
                      </button>
                    </div>
                  </div>

                  <div className='cart-item-price'></div>
                </div>
              
       
          </div>

          <div className='cart-total product'>
            <h2>Cart Summary</h2>
            <div className=' d_flex'>
              <h4>Total Price :</h4>
              <h3>$.00</h3>
            </div>
          </div>
        </div>
      </section>
   
    </div>
  )
}

export default Cart
