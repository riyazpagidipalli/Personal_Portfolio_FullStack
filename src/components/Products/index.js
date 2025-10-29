import {Component} from 'react'
import Cookies from 'js-cookie'
import Header from '../Header'

import ProductCard from '../ProductCard'
import './style.css'

class AllProductsSection extends Component {
  state = {
    productsList: [],
  }
 
  componentDidMount(){
    this.getProducts()
  }
  getProducts=async ()=>{
    const apiUrl='http://localhost:5000/api/books'
    const jwtToken =Cookies.get('jwt_token')
    const options={
        method:'GET',
        headers:{
            Authorization :`Bearer ${jwtToken}`,
        },
    }
    const response = await fetch(apiUrl,options)
    if (response.ok===true){
        const fetchedData=await response.json()
        const updatedData=fetchedData.map(product=>({
            title:product.TITLE,
            id:product.AUTHORID,
            rating:product.RATING,
            price:product.RATINGCOUNT,
            brand:product.REVIEWCOUNT,
            imageUrl: `/images/book${product.AUTHORID}.jpg`,
        }))
        
         this.setState({
    productsList:updatedData,
  }) 
  
  
    }
  }
 

  renderProductsList = () => {
    const {productsList} = this.state
    return (
    
      <div>
        <Header/>
        <div className="heads">

        <h1 className="products-list-heading">All Products</h1>
        <ul className="products-list">
          {productsList.map(product => (
            <ProductCard productData={product} key={product.id} />
          ))}
        </ul>
      </div>
      </div>
    )
  }

  render() {
    return <>{this.renderProductsList()}</>
  }
}

export default AllProductsSection