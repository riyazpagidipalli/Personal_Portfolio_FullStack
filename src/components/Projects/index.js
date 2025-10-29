// import Header from '../Header'
// import './index.css'
// import 'bootstrap/dist/css/bootstrap.min.css';
// import '@fortawesome/fontawesome-free/css/all.min.css';

// const Projects = () => (
//   <>
//      {/* <Header /> */}
//     {/* <div className="products-container">
//       <img
//         src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-products-img.png"
//         alt="products"
//         className="products-img"
//       /> 



//    </div> */}
//       <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css" integrity="sha384-JcKb8q3iqJ61gNV9KGb8thSsNjpSL0n8PARn9HuZOnIxN0hoP+VmmDGMN5t9UJ0Z" crossorigin="anonymous"/>
//     <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js" integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj" crossorigin="anonymous"></script>
//     <script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.1/dist/umd/popper.min.js" integrity="sha384-9/reFTGAW83EW2RDu2S0VKaIzap3H66lZH81PoYlFhbGU+6BZp6G7niu735Sk7lN" crossorigin="anonymous"></script>
//     <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js" integrity="sha384-B4gt1jrGC7Jh4AgTPSdUtOBvfO8shuf57BaghqFfPlYxofvL8/KUEfYiJOMMV+rV" crossorigin="anonymous"></script>
//     <script src="https://kit.fontawesome.com/ac42c3b1f7.js" crossorigin="anonymous"></script>
// <nav class="navbar navbar-expand-lg navbar-light bg-white fixed-top">
//       <div class="container">
//         <a class="navbar-brand" href="#">
//           <img
//             src="https://d2clawv67efefq.cloudfront.net/ccbp-responsive-website/food-munch-img.png"
//             alt="Food Munch Logo"
//             class="food-munch-logo"
//           />
//         </a>
//         <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
//           <span class="navbar-toggler-icon"></span>
//         </button>
//         <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
//           <div class="navbar-nav ml-auto">
//             <a class="nav-link active" id="navItem1" href="#wcuSection">
//               Why Choose Us?
//               <span class="sr-only">(current)</span>
//             </a>
//             <a class="nav-link" href="#exploreMenuSection" id="navItem2">Explore Menu</a>
//             <a class="nav-link" href="#deliveryPaymentSection" id="navItem3">Delivery & Payment</a>
//             <a class="nav-link" href="#followUsSection" id="navItem4">Follow Us</a>
//           </div>
//         </div>
//       </div>
//     </nav>
//     <div class="banner-section-bg-container d-flex justify-content-center flex-column">
//       <div class="text-center">
//         <h1 class="banner-heading mb-3">Get Delicious Food Anytime</h1>
//         <p class="banner-caption mb-4">Eat Smart & Healthy</p>
//         <button class="custom-button">View Menu</button>
//         <button class="custom-outline-button">Order Now</button>
//       </div>
//     </div>
//     <div class="wcu-section pt-5 pb-5" id="wcuSection">
//       <div class="container">
//         <div class="row">
//           <div class="col-12">
//             <h1 class="wcu-section-heading">Why Choose Us?</h1>
//             <p class="wcu-section-description">
//               We use both original recipes and classic versions of famous food
//               items.
//             </p>
//           </div>
//           <div class="col-12 col-md-4">
//             <div class="wcu-card p-3 mb-3">
//               <img
//                 src="https://d2clawv67efefq.cloudfront.net/ccbp-responsive-website/food-serve.png"
//                 alt="Food Service"
//                 class="wcu-card-image"
//               />
//               <h1 class="wcu-card-title mt-3">Food Service</h1>
//               <p class="wcu-card-description">
//                 Experience fine dining at the comfort of your home. All our
//                 orders are carefully packed and arranged to give you the nothing
//                 less than perfect.
//               </p>
//             </div>
//           </div>
//           <div class="col-12 col-md-4">
//             <div class="wcu-card p-3 mb-3">
//               <img
//                 src="https://d2clawv67efefq.cloudfront.net/ccbp-responsive-website/fruits-img.png"
//                 alt="Fresh Food"
//                 class="wcu-card-image"
//               />
//               <h1 class="wcu-card-title mt-3">Fresh Food</h1>
//               <p class="wcu-card-description">
//                 The Fresh Food group provides fresh-cut fruits and vegetables
//                 directly picked from our partner farms and farm houses so that
//                 you always get them tree to plate.
//               </p>
//             </div>
//           </div>
//           <div class="col-12 col-md-4">
//             <div class="wcu-card p-3 mb-3">
//               <img
//                 src="https://d2clawv67efefq.cloudfront.net/ccbp-responsive-website/offers-img.png"
//                 alt="Best Offers"
//                 class="wcu-card-image"
//               />
//               <h1 class="wcu-card-title mt-3">Best Offers</h1>
//               <p class="wcu-card-description">
//                 Food Coupons & Offers upto
//                 <span class="offers">50% OFF</span>
//                 and Exclusive Promo Codes on All Online Food Orders.
//               </p>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//     <div class="explore-menu-section pt-5 pb-5" id="exploreMenuSection">
//       <div class="container">
//         <div class="row">
//           <div class="col-12">
//             <h1 class="menu-section-heading">Explore Menu</h1>
//           </div>
//           <div class="col-12 col-md-6 col-lg-3">
//             <div class="shadow menu-item-card p-3 mb-3">
//               <img
//                 src="https://d2clawv67efefq.cloudfront.net/ccbp-responsive-website/em-ginger-fried-img.png"
//                 alt="Non-Veg Starters"
//                 class="menu-item-image w-100"
//               />
//               <h1 class="menu-card-title">Non-Veg Starters</h1>
//               <a href="" class="menu-item-link">
//                 View All
//                 <svg width="16px" height="16px" viewBox="0 0 16 16" class="bi bi-arrow-right-short" fill="#d0b200" xmlns="http://www.w3.org/2000/svg">
//                   <path
//                     fill-rule="evenodd"
//                     d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8z"
//                   />
//                 </svg>
//               </a>
//             </div>
//           </div>
//           <div class="col-12 col-md-6 col-lg-3">
//             <div class="shadow menu-item-card p-3 mb-3">
//               <img
//                 src="https://d2clawv67efefq.cloudfront.net/ccbp-responsive-website/em-veg-starters-img.png"
//                 alt="Veg Starters"
//                 class="menu-item-image w-100"
//               />
//               <h1 class="menu-card-title">Veg Starters</h1>
//               <a href="" class="menu-item-link">
//                 View All
//                 <svg width="16px" height="16px" viewBox="0 0 16 16" class="bi bi-arrow-right" fill="#d0b200" xmlns="http://www.w3.org/2000/svg">
//                   <path
//                     fill-rule="evenodd"
//                     d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8z"
//                   />
//                 </svg>
//               </a>
//             </div>
//           </div>
//           <div class="col-12 col-md-6 col-lg-3">
//             <div class="menu-item-card shadow p-3 mb-3">
//               <img
//                 src="https://d2clawv67efefq.cloudfront.net/ccbp-responsive-website/em-soup-img.png"
//                 alt="Soup"
//                 class="menu-item-image w-100"
//               />
//               <h1 class="menu-card-title">Soups</h1>
//               <a href="" class="menu-item-link">
//                 View All
//                 <svg width="16px" height="16px" viewBox="0 0 16 16" class="bi bi-arrow-right" fill="#d0b200" xmlns="http://www.w3.org/2000/svg">
//                   <path
//                     fill-rule="evenodd"
//                     d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8z"
//                   />
//                 </svg>
//               </a>
//             </div>
//           </div>
//           <div class="col-12 col-md-6 col-lg-3">
//             <div class="menu-item-card shadow p-3 mb-3">
//               <img
//                 src="https://d2clawv67efefq.cloudfront.net/ccbp-responsive-website/em-grilled-seafood-img.png"
//                 alt="Grilled Sea food"
//                 class="menu-item-image w-100"
//               />
//               <h1 class="menu-card-title">Fish & Sea food</h1>
//               <a href="" class="menu-item-link">
//                 View All
//                 <svg width="16px" height="16px" viewBox="0 0 16 16" class="bi bi-arrow-right" fill="#d0b200" xmlns="http://www.w3.org/2000/svg">
//                   <path
//                     fill-rule="evenodd"
//                     d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8z"
//                   />
//                 </svg>
//               </a>
//             </div>
//           </div>
//           <div class="col-12 col-md-6 col-lg-3">
//             <div class="menu-item-card shadow p-3 mb-3">
//               <img
//                 src="https://d2clawv67efefq.cloudfront.net/ccbp-responsive-website/em-hyderabadi-biryani-img.png"
//                 alt="Hyderabadi Biryani"
//                 class="menu-item-image w-100"
//               />
//               <h1 class="menu-card-title">Main Course</h1>
//               <a href="" class="menu-item-link">
//                 View All
//                 <svg width="16px" height="16px" viewBox="0 0 16 16" class="bi bi-arrow-right" fill="#d0b200" xmlns="http://www.w3.org/2000/svg">
//                   <path
//                     fill-rule="evenodd"
//                     d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8z"
//                   />
//                 </svg>
//               </a>
//             </div>
//           </div>
//           <div class="col-12 col-md-6 col-lg-3">
//             <div class="menu-item-card shadow p-3 mb-3">
//               <img
//                 src="https://d2clawv67efefq.cloudfront.net/ccbp-responsive-website/em-mushroom-noodles-img.png"
//                alt="Mushroom Noodles"
//                class="menu-item-image w-100"
//               />
//               <h1 class="menu-card-title">Noodles</h1>
//               <a href="" class="menu-item-link">
//                 View All
//                 <svg width="16px" height="16px" viewBox="0 0 16 16" class="bi bi-arrow-right" fill="#d0b200" xmlns="http://www.w3.org/2000/svg">
//                   <path
//                     fill-rule="evenodd"
//                     d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8z"
//                   />
//                 </svg>
//               </a>
//             </div>
//           </div>
//           <div class="col-12 col-md-6 col-lg-3">
//             <div class="menu-item-card shadow p-3 mb-3">
//               <img
//                 src="https://d2clawv67efefq.cloudfront.net/ccbp-responsive-website/em-gluten-img.png"
//                 alt="Gluten Free"
//                 class="menu-item-image w-100"
//               />
//               <h1 class="menu-card-title">Salads</h1>
//               <a href="" class="menu-item-link">
//                 View All
//                 <svg width="16px" height="16px" viewBox="0 0 16 16" class="bi bi-arrow-right" fill="#d0b200" xmlns="http://www.w3.org/2000/svg">
//                   <path
//                     fill-rule="evenodd"
//                     d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8z"
//                   />
//                 </svg>
//               </a>
//             </div>
//           </div>
//           <div class="col-12 col-md-6 col-lg-3">
//             <div class="menu-item-card shadow p-3 mb-3">
//               <img
//                 src="https://d2clawv67efefq.cloudfront.net/ccbp-responsive-website/em-coffee-bourbon-img.png"
//                 alt="Coffee Bourbon"
//                 class="menu-item-image w-100"
//               />
//               <h1 class="menu-card-title">Desserts</h1>
//               <a href="" class="menu-item-link">
//                 View All
//                 <svg width="16px" height="16px" viewBox="0 0 16 16" class="bi bi-arrow-right" fill="#d0b200" xmlns="http://www.w3.org/2000/svg">
//                   <path
//                     fill-rule="evenodd"
//                     d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8z"
//                   />
//                 </svg>
//               </a>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//     <div class="healthy-food-section pt-5 pb-5">
//       <div class="container">
//         <div class="row">
//           <div class="col-12 col-md-5">
//             <div class="text-center">
//               <img
//                 src="https://d2clawv67efefq.cloudfront.net/ccbp-responsive-website/healthy-food-plate-img.png"
//                 alt="Healthy Food Plate"
//                 class="healthy-food-section-img"
//               />
//             </div>
//           </div>
//           <div class="col-12 col-md-7">
//             <h1 class="healthy-food-section-heading">
//               Fresh, Healthy, Organic, Delicious Fruits
//             </h1>
//             <p class="healthy-food-section-description">
//               Say no to harmful chemicals and go fully organic with our range of
//               fresh fruits and veggies. Pamper your body and your senses with
//               the true and unadulterated gifts from mother nature. with the true
//               and unadulterated gifts from mother nature.
//             </p>
//             <button class="custom-button">Watch Video</button>
//           </div>
//         </div>
//       </div>
//     </div>
//     <div class="delivery-and-payment-section pt-5 pb-5" id="deliveryPaymentSection">
//       <div class="container">
//         <div class="row">
//           <div class="col-12 col-md-5 order-1 order-md-2">
//             <div class="text-center">
//               <img
//                 src="https://d2clawv67efefq.cloudfront.net/ccbp-responsive-website/delivery-payment-section-img.png"
//                 alt="Delivery and Payment"
//                 class="delivery-and-payment-section-img"
//               />
//             </div>
//           </div>
//           <div class="col-12 col-md-7 order-2 order-md-1">
//             <h1 class="delivery-and-payment-section-heading">
//               Delivery and Payment
//             </h1>
//             <p class="delivery-and-payment-section-description">
//               Enjoy hassle-free payment with the plenitude of payment options
//               available for you. Get live tracking and locate your food on a
//               live map. It's quite a sight to see your food arrive to your door.
//               Plus, you get a 5% discount on every order every time you pay
//               online.
//             </p>
//             <button class="custom-button">Order Now</button>
//             <div class="mt-3">
//               <img
//                 src="https://d2clawv67efefq.cloudfront.net/ccbp-responsive-website/visa-card-img.png"
//                 alt="Visa"
//                 class="payment-card-img"
//               />
//               <img
//                 src="https://d2clawv67efefq.cloudfront.net/ccbp-responsive-website/master-card-img.png"
//                 alt="Master Card"
//                 class="payment-card-img"
//               />
//               <img
//                 src="https://d2clawv67efefq.cloudfront.net/ccbp-responsive-website/paypal-card-img.png"
//                 alt="PayPal"
//                 class="payment-card-img"
//               />
//               <img
//                 src="https://d2clawv67efefq.cloudfront.net/ccbp-responsive-website/american-express-img.png"
//                 alt="American Express"
//                 class="payment-card-img"
//               />
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//     <div class="thanking-customers-section pt-5 pb-5">
//       <div class="container">
//         <div class="row">
//           <div class="col-12 col-md-7 d-flex flex-column justify-content-center">
//             <h1 class="thanking-customers-section-heading">
//               Thank you for being a valuable customer to us.
//             </h1>
//             <p class="thanking-customers-section-description">
//               We have a surprise gift for you
//             </p>
//             <div class="d-md-none">
//               <img
//                 src="https://d2clawv67efefq.cloudfront.net/ccbp-responsive-website/thanking-customers-section-img.png"
//                   alt="Error"
//                 class="thanking-customers-section-img"
//               />
//             </div>
//             <div>
//               <button type="button" class="custom-button" data-toggle="modal" data-target="#exampleModal">
//                 Redeem Gift
//               </button>
//               <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
//                 <div class="modal-dialog mt-5">
//                   <div class="modal-content">
//                     <div class="modal-header">
//                       <h5 class="modal-title thanking-customers-section-modal-title" id="exampleModalLabel">
//                         Gift Voucher
//                       </h5>
//                       <button type="button" class="close" data-dismiss="modal" aria-label="Close">
//                         <span aria-hidden="true">&times;</span>
//                       </button>
//                     </div>
//                     <div class="modal-body">
//                       <img
//                         src="https://d2clawv67efefq.cloudfront.net/ccbp-responsive-website/gift-voucher-img.png"
//                         alt="Gift Voucher"
//                         class="w-100"
//                       />
//                     </div>
//                     <div class="modal-footer">
//                       <button type="button" class="btn btn-secondary" data-dismiss="modal">
//                         Close
//                       </button>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//           <div class="col-12 col-md-5 d-none d-md-block">
//             <img
//               src="https://d2clawv67efefq.cloudfront.net/ccbp-responsive-website/thanking-customers-section-img.png"
//                alt="Error"
//               class="thanking-customers-section-img"
//             />
//           </div>
//         </div>
//       </div>
//     </div>
//     <div class="follow-us-section pt-5 pb-5" id="followUsSection">
//       <div class="container">
//         <div class="row">
//           <div class="col-12">
//             <h1 class="follow-us-section-heading">Follow Us</h1>
//           </div>
//           <div class="col-12">
//             <div class="d-flex flex-row justify-content-center">
//               <div class="follow-us-icon-container">
//                 <i class="fab fa-twitter icon"></i>
//               </div>
//               <div class="follow-us-icon-container">
//                 <i class="fab fa-instagram icon"></i>
//               </div>
//               <div class="follow-us-icon-container">
//                 <i class="fab fa-facebook icon"></i>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//     <div class="footer-section pt-5 pb-5">
//       <div class="container">
//         <div class="row">
//           <div class="col-12 text-center">
//             <img
//               src="https://d2clawv67efefq.cloudfront.net/ccbp-responsive-website/food-munch-logo-light.png"
//               alt="Error"
//               class="food-munch-logo"
//             />
//             <h1 class="footer-section-mail-id">orderfood@foodmunch.com</h1>
//             <p class="footer-section-address">
//               123 Ayur Vigyan Nagar, New Delhi, India.
//             </p>
//           </div>
//         </div>
//       </div>
//     </div> 




//       </>)




// //     </>
// //  )

// export default Projects


import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import "bootstrap/dist/css/bootstrap.min.css";
// Bootstrap JS (includes Popper) is required for interactive components like the navbar collapse
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "./index.css";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

const Projects = () => {

  const [showModal, setShowModal] = useState(false);

  const openModal = () => setShowModal(true);
  const closeModal = () => setShowModal(false);


  return (
    <>
      {/* Navbar */}

      <nav className="navbar navbar-expand-lg navbar-light  fixed-top">
        <div className="container-fluid">
          <Link to="/Home"> <button className="custom-button1">
            Back
          </button></Link>
          <a className="navbar-brand" href="#">
            <img
              src="https://d2clawv67efefq.cloudfront.net/ccbp-responsive-website/food-munch-img.png"
              className="food-munch-logo"
              alt="Food Munch Logo"
            />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav ms-auto">
              <a className="nav-link active" id="navItem1" href="#wcuSection">
                Why Choose Us?
              </a>
              <a className="nav-link" href="#exploreMenuSection" id="navItem2">
                Explore Menu
              </a>
              <a
                className="nav-link"
                href="#deliveryPaymentSection"
                id="navItem3"
              >
                Delivery & Payment
              </a>
              <a className="nav-link" href="#followUsSection" id="navItem4">
                Follow Us
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Banner Section */}
      <div className="banner-section-bg-container d-flex justify-content-center flex-column">
        <div className="text-center">
          <h1 className="banner-heading mb-3">Get Delicious Food Anytime</h1>
          <p className="banner-caption mb-4">Eat Smart & Healthy</p>
          <button className="custom-button">View Menu</button>
          <button className="custom-outline-button">Order Now</button>
        </div>
      </div>

      {/* Why Choose Us Section */}
      <div className="wcu-section pt-5 pb-5" id="wcuSection">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h1 className="wcu-section-heading">Why Choose Us?</h1>
              <p className="wcu-section-description">
                We use both original recipes and classic versions of famous food
                items.
              </p>
            </div>

            {/* Cards */}
            {[
              {
                img: "https://d2clawv67efefq.cloudfront.net/ccbp-responsive-website/food-serve.png",
                title: "Food Service",
                desc: `Experience fine dining at the comfort of your home. All our orders are carefully packed and arranged to give you nothing less than perfect.`,
              },
              {
                img: "https://d2clawv67efefq.cloudfront.net/ccbp-responsive-website/fruits-img.png",
                title: "Fresh Food",
                desc: `The Fresh Food group provides fresh-cut fruits and vegetables directly picked from our partner farms and farm houses so that you always get them tree to plate.`,
              },
              {
                img: "https://d2clawv67efefq.cloudfront.net/ccbp-responsive-website/offers-img.png",
                title: "Best Offers",
                desc: (
                  <>
                    Food Coupons & Offers upto <span className="offers">50% OFF</span> and Exclusive Promo Codes on All Online Food Orders.
                  </>
                ),
              },
            ].map((card, idx) => (
              <div key={idx} className="col-12 col-md-4">
                <div className="wcu-card p-3 mb-3">
                  <img src={card.img} className="wcu-card-image" alt={card.title} />
                  <h1 className="wcu-card-title mt-3">{card.title}</h1>
                  <p className="wcu-card-description">{card.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Explore Menu Section */}
      <div className="explore-menu-section pt-5 pb-5" id="exploreMenuSection">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h1 className="menu-section-heading">Explore Menu</h1>
            </div>

            {[
              {
                img: "https://d2clawv67efefq.cloudfront.net/ccbp-responsive-website/em-ginger-fried-img.png",
                title: "Non-Veg Starters",
              },
              {
                img: "https://d2clawv67efefq.cloudfront.net/ccbp-responsive-website/em-veg-starters-img.png",
                title: "Veg Starters",
              },
              {
                img: "https://d2clawv67efefq.cloudfront.net/ccbp-responsive-website/em-soup-img.png",
                title: "Soups",
              },
              {
                img: "https://d2clawv67efefq.cloudfront.net/ccbp-responsive-website/em-grilled-seafood-img.png",
                title: "Fish & Sea food",
              },
              {
                img: "https://d2clawv67efefq.cloudfront.net/ccbp-responsive-website/em-hyderabadi-biryani-img.png",
                title: "Main Course",
              },
              {
                img: "https://d2clawv67efefq.cloudfront.net/ccbp-responsive-website/em-mushroom-noodles-img.png",
                title: "Noodles",
              },
              {
                img: "https://d2clawv67efefq.cloudfront.net/ccbp-responsive-website/em-gluten-img.png",
                title: "Salads",
              },
              {
                img: "https://d2clawv67efefq.cloudfront.net/ccbp-responsive-website/em-coffee-bourbon-img.png",
                title: "Desserts",
              },
            ].map((menu, idx) => (
              <div key={idx} className="col-12 col-md-6 col-lg-3">
                <div className="menu-item-card shadow p-3 mb-3">
                  <img src={menu.img} className="menu-item-image w-100" alt={menu.title} />
                  <h1 className="menu-card-title">{menu.title}</h1>
                  <a href="#" className="menu-item-link">
                    View All
                    <svg
                      width="16px"
                      height="16px"
                      viewBox="0 0 16 16"
                      className="bi bi-arrow-right"
                      fill="#d0b200"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8z"
                      />
                    </svg>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Healthy Food Section */}
      <div className="healthy-food-section pt-5 pb-5">
        <div className="container">
          <div className="row">
            <div className="col-12 col-md-5 text-center">
              <img
                src="https://d2clawv67efefq.cloudfront.net/ccbp-responsive-website/healthy-food-plate-img.png"
                className="healthy-food-section-img"
                alt="Healthy Food"
              />
            </div>
            <div className="col-12 col-md-7">
              <h1 className="healthy-food-section-heading">
                Fresh, Healthy, Organic, Delicious Fruits
              </h1>
              <p className="healthy-food-section-description">
                Say no to harmful chemicals and go fully organic with our range
                of fresh fruits and veggies. Pamper your body and your senses
                with the true and unadulterated gifts from mother nature.
              </p>
              <button className="custom-button">Watch Video</button>
            </div>
          </div>
        </div>
      </div>

      {/* Delivery & Payment Section */}
      <div
        className="delivery-and-payment-section pt-5 pb-5"
        id="deliveryPaymentSection"
      >
        <div className="container">
          <div className="row">
            <div className="col-12 col-md-5 order-1 order-md-2 text-center">
              <img
                src="https://d2clawv67efefq.cloudfront.net/ccbp-responsive-website/delivery-payment-section-img.png"
                className="delivery-and-payment-section-img"
                alt="Delivery"
              />
            </div>
            <div className="col-12 col-md-7 order-2 order-md-1">
              <h1 className="delivery-and-payment-section-heading">
                Delivery and Payment
              </h1>
              <p className="delivery-and-payment-section-description">
                Enjoy hassle-free payment with the plenitude of payment options
                available for you. Get live tracking and locate your food on a
                live map. It's quite a sight to see your food arrive to your
                door. Plus, you get a 5% discount on every order every time you
                pay online.
              </p>
              <button className="custom-button">Order Now</button>
              <div className="mt-3">
                {[
                  "visa-card-img.png",
                  "master-card-img.png",
                  "paypal-card-img.png",
                  "american-express-img.png",
                ].map((imgName, idx) => (
                  <img
                    key={idx}
                    src={`https://d2clawv67efefq.cloudfront.net/ccbp-responsive-website/${imgName}`}
                    className="payment-card-img"
                    alt={imgName}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Thanking Customers Section */}
      <div className="thanking-customers-section pt-5 pb-5">
        <div className="container">
          <div className="row">
            <div className="col-12 col-md-7 d-flex flex-column justify-content-center">
              <h1 className="thanking-customers-section-heading">
                Thank you for being a valuable customer to us.
              </h1>
              <p className="thanking-customers-section-description">
                We have a surprise gift for you
              </p>
              <div className="d-md-none">
                <img
                  src="https://d2clawv67efefq.cloudfront.net/ccbp-responsive-website/thanking-customers-section-img.png"
                  className="thanking-customers-section-img"
                  alt="Gift"
                />
              </div>
              <div>
                <button className="custom-button" onClick={openModal}>
                  Redeem Gift
                </button>
                {/* Modal */}
                {showModal && (
                  <div className="modal show d-block" tabIndex="-1">
                    <div className="modal-dialog mt-5">
                      <div className="modal-content">
                        <div className="modal-header">
                          <h5
                            className="thanking-customers-section-modal-title"
                            id="exampleModalLabel"
                          >
                            Gift Voucher
                          </h5>
                          <button
                            type="button"
                            className="btn-close"
                            onClick={closeModal}
                          ></button>
                        </div>
                        <div className="modal-body">
                          <img
                            src="https://d2clawv67efefq.cloudfront.net/ccbp-responsive-website/gift-voucher-img.png"
                            className="w-100"
                            alt="Gift Voucher"
                          />
                        </div>
                        <div className="modal-footer">
                          <button
                            type="button"
                            className="btn btn-secondary"
                            onClick={closeModal}
                          >
                            Close
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
            <div className="col-12 col-md-5 d-none d-md-block">
              <img
                src="https://d2clawv67efefq.cloudfront.net/ccbp-responsive-website/thanking-customers-section-img.png"
                className="thanking-customers-section-img"
                alt="Gift"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Follow Us Section */}
      <div className="follow-us-section pt-5 pb-5" id="followUsSection">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h1 className="follow-us-section-heading">Follow Us</h1>
            </div>
            <div className="col-12">
              <div className="d-flex flex-row justify-content-center">
                <div className="follow-us-icon-container">
                  <i className="fab fa-twitter icon"></i>
                </div>
                <div className="follow-us-icon-container">
                  <i className="fab fa-instagram icon"></i>
                </div>
                <div className="follow-us-icon-container">
                  <i className="fab fa-facebook icon"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Section */}
      <div className="footer-section pt-5 pb-5">
        <div className="container">
          <div className="row">
            <div className="col-12 text-center">
              <img
                src="https://d2clawv67efefq.cloudfront.net/ccbp-responsive-website/food-munch-logo-light.png"
                className="food-munch-logo"
                alt="Food Munch"
              />
              <h1 className="footer-section-mail-id">orderfood@foodmunch.com</h1>
              <p className="footer-section-address">
                123 Ayur Vigyan Nagar, New Delhi, India.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Projects

