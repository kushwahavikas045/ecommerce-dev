import React from 'react'
import './productlist.css';
function Productlist() {
    return (
        
<div className="grid">
  <div><h4 className="filter">Fillter</h4><hr/>
    <h4>CATEGORIES</h4>
    <div className="brand-listing">
      <ul className="brand-ul">
        <li className="brand-list"><a href="/">Sumsung</a></li>
        <li className="brand-list"><a href="/">MI</a></li>
        <li className="brand-list"><a href="/">RealMe</a></li>
        <li className="brand-list"><a href="/">Vivo</a></li>
        <li><a href="/">show 2 more</a></li>
      </ul>
      <hr/>
    </div>
    <div className="price">
      <h4>PRICE</h4>
      <div className="price-flex">
        <select id="mySelect">
  <option selected> min</option>
  <option>100</option>
  <option >200</option>
  <option>300</option>
</select> To  <select id="mySelect">
  <option>1000</option>
  <option>2000</option>
  <option selected>3000+</option>
  
</select>
      </div>
     </div>
    
    <hr style={{marginTop:"20px"}}/>
    <div className="brand">
      <h3>Brand</h3>
      
      <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike"/>
  <label for="vehicle1"> I have a bike</label><br/>
  <input type="checkbox" id="vehicle2" name="vehicle2" value="Car"/>
  <label for="vehicle2"> I have a car</label><br/>
  <input type="checkbox" id="vehicle3" name="vehicle3" value="Boat"/>
  <label for="vehicle3"> I have a boat</label><br/><br/>
    </div>
  </div>

<div>
  
  
  <div className="product-name">
  <h2>brand name</h2>
  <small>(Showing 1 – 24 products of 584 products)</small>
  </div>
  <div className="sortby-product">
    <h3>Sort by</h3>
    <ul>
      <li><a href="/">Popularity</a></li>
      <li><a href="/">Price -- low to high</a></li>
      <li><a href="/">Price -- high to low</a></li>
      <li><a href="/">Discount</a></li>
    </ul>
  </div>
  <hr/>
  <div className="card-direction">
  <div className="card">
  <div className="product-image">
    <img src="https://rukminim1.flixcart.com/image/416/416/k65d18w0/mobile/4/k/4/poco-x2-mzb9011in-original-imafzz2hbfkvftm5.jpeg?q=70" />
  </div>
  <div className="product-details">
    <h4>POCO X2 (Atlantis Blue, 64 GB)</h4>
    <h5>upto 40% off</h5>
    <p>₹17,499</p>
  </div>
</div>
  
<div className="card">
  <div className="product-image">
    <img src="https://rukminim1.flixcart.com/image/416/416/k65d18w0/mobile/4/k/4/poco-x2-mzb9011in-original-imafzz2hbfkvftm5.jpeg?q=70" />
  </div>
  <div className="product-details">
    <h4>POCO X2 (Atlantis Blue, 64 GB)</h4>
    <h5>upto 40% off</h5>
    <p>₹17,499</p>
  </div>
</div>  
  
<div className="card">
  <div className="product-image">
    <img src="https://rukminim1.flixcart.com/image/416/416/k65d18w0/mobile/4/k/4/poco-x2-mzb9011in-original-imafzz2hbfkvftm5.jpeg?q=70" />
  </div>
  <div className="product-details">
    <h4>POCO X2 (Atlantis Blue, 64 GB)</h4>
    <h5>upto 40% off</h5>
    <p>₹17,499</p>
  </div>
</div>

<div className="card">
  <div className="product-image">
    <img src="https://rukminim1.flixcart.com/image/416/416/k65d18w0/mobile/4/k/4/poco-x2-mzb9011in-original-imafzz2hbfkvftm5.jpeg?q=70" />
  </div>
  <div className="product-details">
    <h4>POCO X2 (Atlantis Blue, 64 GB)</h4>
    <h5>upto 40% off</h5>
    <p>₹17,499</p>
  </div>
</div>
    
<div className="card">
  <div className="product-image">
    <img src="https://rukminim1.flixcart.com/image/416/416/k65d18w0/mobile/4/k/4/poco-x2-mzb9011in-original-imafzz2hbfkvftm5.jpeg?q=70" />
  </div>
  <div className="product-details">
    <h4>POCO X2 (Atlantis Blue, 64 GB)</h4>
    <h5>upto 40% off</h5>
    <p>₹17,499</p>
  </div>
</div>
    
<div className="card">
  <div className="product-image">
    <img src="https://rukminim1.flixcart.com/image/416/416/k65d18w0/mobile/4/k/4/poco-x2-mzb9011in-original-imafzz2hbfkvftm5.jpeg?q=70" />
  </div>
  <div className="product-details">
    <h4>POCO X2 (Atlantis Blue, 64 GB)</h4>
    <h5>upto 40% off</h5>
    <p>₹17,499</p>
  </div>
</div>    
    
  </div>    
 </div>
</div>
    )
}

export default Productlist;

