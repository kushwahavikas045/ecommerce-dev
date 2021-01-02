import React, { Component } from 'react'
import './productdetailspage.css';
import DetailsThumb from '../DetailsThumb';
export class Productdetailspage extends Component {
    state = {
        products: [
          {
            "_id": "1",
            "title": "Courology",
            "src": [
                "https://images.unsplash.com/photo-1571782742478-0816a4773a10?ixid=MXwxMjA3fDB8MHxwcm9maWxlLXBhZ2V8M3x8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
                "https://images.unsplash.com/photo-1571781926291-c477ebfd024b?ixid=MXwxMjA3fDB8MHxwcm9maWxlLXBhZ2V8NHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
                "https://images.unsplash.com/photo-1556228852-80b6e5eeff06?ixid=MXwxMjA3fDB8MHxwcm9maWxlLXBhZ2V8Mjl8fHxlbnwwfHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
                "https://images.unsplash.com/photo-1556228841-a3c527ebefe5?ixid=MXwxMjA3fDB8MHxwcm9maWxlLXBhZ2V8MzF8fHxlbnwwfHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
              ],
            "description": "UI/UX designing, BY SeeBuy ",
            "content": "Paragraphs are the building blocks of papers. Many students define paragraphs in terms of length: a paragraph is a group of at least five sentences, a paragraph is half a page long, etc. In reality, though, the unity and coherence of ideas among sentences is what constitutes a paragraph.",
            "price": 230,
            "colors":["red","black","crimson","teal"],
            "count": 1,
            "Brand":'Curolory',
            'Availability':'In Stock (7 items)',
            'Product_type':'Losen'
          }
        ],
        index: 0
      };
    
      myRef = React.createRef();
    
      handleTab = index =>{
        this.setState({index: index})
        const images = this.myRef.current.children;
        for(let i=0; i<images.length; i++){
          images[i].className = images[i].className.replace("active", "");
        }
        images[index].className = "active";
      };
    
      componentDidMount(){
        const {index} = this.state;
        this.myRef.current.children[index].className = "active";
      }
    
    render() {
        const {products, index} = this.state;
        return(
          <div className="app">
            {
              products.map(item =>(
                <div className="details" key={item._id}>
                  <div className="big-img">
                    <img src={item.src[index]} alt=""/>
                  </div>
    
                  <div className="box">
                    <div className="row">
                      <h2>{item.title}</h2>
                      <span>RS: {item.price}</span>
                    </div>
                    <div className="rating">
                    <i class="fa fa-star" aria-hidden="true"></i>
                    <i class="fa fa-star" aria-hidden="true"></i>
                    <i class="fa fa-star" aria-hidden="true"></i>
                    <i class="fa fa-star" aria-hidden="true"></i>
                    <span>(20 reviews)</span>
                    </div>
                    <DetailsThumb images={item.src} tab={this.handleTab} myRef={this.myRef} />
                    
                    <p>{item.content}</p>
                    <div className="Quentity">
                                <p>Color:</p>
                                  <select name="quantity">
                                    <option value="volvo">1</option>
                                    <option value="saab">2</option>
                                    <option value="mercedes">3</option>
                                    <option value="audi">4</option>
                                  </select>
                    </div>
                    
                    <p>Brand: {item.Brand}</p>
                    <p>Product Type: {item.Product_type}</p>
                    <div className="Product-details">
                    <p>Availability: <span className="highlight">{item.Availability}</span></p>
                    </div>
                    
                    <button className="cart">Add to cart</button>
                    <a href="#" className="buy">Buy Now</a>
    
                    
    
                  </div>
                </div>
              ))
            }
          </div>
        );
      };
    }


export default Productdetailspage;
