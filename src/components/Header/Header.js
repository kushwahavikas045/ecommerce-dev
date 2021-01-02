import React from 'react'
import './header.css';
function Header() {
    return (
        <div class="container">
      
         <div class="contact-us">
            <p class="small"><i class="bx bx-envelope"></i> logo@example.com | <i class="bx bx-phone"></i> +91-9876543210
               </p>
            <p class="small">Free shipping on total of $99 of all products</p>
           </div>
         <div class="menu">
           <button>menu</button>
           <h3>logo</h3>
           <div class="card">
             card
           </div>
         </div>
         
         
         <div class="header">
           <div class="logo">
             <h2>logo</h2>
         </div>
        
           <div class="searchbox">
             <form class="search">
               <input type="text" placeholder="search by product" />
               <button>search</button>
             </form>
           </div>
          
           
           <div class="product-cart">
             <h3>card</h3>
           </div>
           
           
           <div class="user-auth">
             <div class="dropdown">
         <button class="dropbtn">Login / register</button>
         <div class="dropdown-content">
           <a href="/productdetails">productdetails</a>
           <a href="/">productlist</a>
           <a href="#">Link 3</a>
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
         
        
         
         </div>
    )
}

export default Header;
