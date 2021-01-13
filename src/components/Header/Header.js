import React from 'react'
import './header.css';
import { Router,Link,Switch} from 'react-router-dom';
function Header() {
    return (
     <div className="container">
        <div class="contact-us">
     <p class="small"><i class="bx bx-envelope"></i> logo@example.com | <i class="bx bx-phone"></i> +91-9876543210
        </p>
     <p class="small">Free shipping on total of $99 of all products</p>
    </div>
  <div class="menu">
    <button><i class="fad fa-bars"></i></button>
    <h3>logo</h3>
    <div class="responsice-cart">
      <i class="fal fa-shopping-cart"></i>
    </div>
  </div>
  
  
  <div class="header">
    <div class="logo">
      <h2>logo</h2>
  </div>
 
    <div class="searchbox">
      <form class="search">
        <input type="text" placeholder="search by product" />
        <button><i class="fas fa-search"></i></button>
      </form>
    </div>
   
    
    <div class="product-cart">
      <h3><i class="fal fa-shopping-cart"></i></h3>
    </div>
    
   
    <div class="user-auth">
      <div class="dropdown">
  <button class="dropbtn">Login / register</button>
  <div class="dropdown-content">
    <Link to ='/'><a href="#">Login</a></Link>
    <Link to ='/productdetails'><a href="#">product_details</a></Link>
    <Link to = '/productlist'><a href="#">product_list</a></Link>
  </div>
</div>
    </div>
    
    
   
</div>

    <nav class="product-list">
      <ul>
        <li><a href="/">mobile</a></li>
         <li><a href="/">mobile</a></li>
         <li><a href="/">mobile</a></li>
         <li><a href="/">mobile</a></li>
         <li><a href="/">mobile</a></li>
         <li><a href="/">mobile</a></li>
      </ul>
      <hr/>
  </nav>
  
  <div class="hero-slider">
    <h3> hero slider</h3>
  </div> 
  
  
  <div class="product-item">
    <ul class="categary">
      <li><a href="/">product-category</a></li>
      <li><a href="/"> see all</a></li>
      </ul>
    <div class="product-category">
    <div class="card">
  <div class="product-image">
    <img src="https://rukminim1.flixcart.com/image/416/416/k65d18w0/mobile/4/k/4/poco-x2-mzb9011in-original-imafzz2hbfkvftm5.jpeg?q=70" />
  </div>
  <div class="product-details">
    <h4>POCO X2 (Atlantis Blue, 64 GB)</h4>
    <h5>upto 40% off</h5>
    <p>₹17,499</p>
  </div>
</div>

    <div class="card">
  <div class="product-image">
    <img src="https://rukminim1.flixcart.com/image/416/416/k65d18w0/mobile/4/k/4/poco-x2-mzb9011in-original-imafzz2hbfkvftm5.jpeg?q=70" />
  </div>
  <div class="product-details">
    <h4>POCO X2 (Atlantis Blue, 64 GB)</h4>
    <h5>upto 40% off</h5>
    <p>₹17,499</p>
  </div>
</div>
      
      <div class="card">
  <div class="product-image">
    <img src="https://rukminim1.flixcart.com/image/416/416/k65d18w0/mobile/4/k/4/poco-x2-mzb9011in-original-imafzz2hbfkvftm5.jpeg?q=70" />
  </div>
  <div class="product-details">
    <h4>POCO X2 (Atlantis Blue, 64 GB)</h4>
    <h5>upto 40% off</h5>
    <p>₹17,499</p>
  </div>
</div>
      
       </div>
    
  </div>
  

  <div class="product-item">
    <ul class="categary">
      <li><a href="/">product-category</a></li>
      <li><a href="/"> see all</a></li>
      </ul>
    <div class="product-category">
    <div class="card">
  <div class="product-image">
    <img src="https://rukminim1.flixcart.com/image/416/416/k65d18w0/mobile/4/k/4/poco-x2-mzb9011in-original-imafzz2hbfkvftm5.jpeg?q=70" />
  </div>
  <div class="product-details">
    <h4>POCO X2 (Atlantis Blue, 64 GB)</h4>
    <h5>upto 40% off</h5>
    <p>₹17,499</p>
  </div>
</div>

    <div class="card">
  <div class="product-image">
    <img src="https://rukminim1.flixcart.com/image/416/416/k65d18w0/mobile/4/k/4/poco-x2-mzb9011in-original-imafzz2hbfkvftm5.jpeg?q=70" />
  </div>
  <div class="product-details">
    <h4>POCO X2 (Atlantis Blue, 64 GB)</h4>
    <h5>upto 40% off</h5>
    <p>₹17,499</p>
  </div>
</div>
      
      <div class="card">
  <div class="product-image">
    <img src="https://rukminim1.flixcart.com/image/416/416/k65d18w0/mobile/4/k/4/poco-x2-mzb9011in-original-imafzz2hbfkvftm5.jpeg?q=70" />
  </div>
  <div class="product-details">
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

export default Header;
