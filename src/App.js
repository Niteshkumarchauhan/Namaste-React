import React from "react";
import ReactDOM from "react-dom/client";
const Header = () => {
  return (
    <div className="header">
      <div className="logo-container">
        <img
          className="logo"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDWkwvV-TfSUhtbhTA65c-wlCv12vVnhDJv2JkigMiww&s"
          alt="Restaurant Logo"
        />
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

const RestaurantCard = (props) => {
  const { restaurant } = props;
  const { image_url, name, cuisines, rating, cost_for_two, delivery_time } =
    restaurant;

  return (
    <div className="res-card" style={{ backgroundColor: "#f0f0f0" }}>
      <img className="res-logo" alt={name} src={image_url} />
      <h3>{name}</h3>
      <h4>{cuisines.join(", ")}</h4>
      <h4>⭐ {rating} stars</h4>
      <h4>₹{cost_for_two} for two</h4>
      <h4>{delivery_time}</h4>
    </div>
  );
};

const resObj = {
  status: "success",
  total_results: 15,
  restaurants: [
    {
      id: 1,
      name: "Sagar Corner",
      cuisines: ["Andhra", "South Indian", "Street Food", "Punjabi"],
      area: "Aminabad",
      city: "Lucknow",
      address: "Shop No. 15, Aminabad, Lucknow, Uttar Pradesh",
      rating: 4.3,
      rating_count: 4575,
      cost_for_two: 700,
      delivery_time: "21 mins",
      veg_status: "Non-Veg",
      discount_offer: "50% OFF up to ₹100",
      is_open: true,
      image_url:
        "https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=660&h=400&fit=crop",
      menu: [
        {
          item: "Gulab Jamun",
          price: 129,
        },
        {
          item: "Cheese Burger",
          price: 349,
        },
        {
          item: "Masala Dosa",
          price: 99,
        },
      ],
    },
    {
      id: 2,
      name: "Burger Foods",
      cuisines: ["Biryani", "Mexican", "Chinese", "Continental"],
      area: "Indira Nagar",
      city: "Lucknow",
      address: "Shop No. 40, Indira Nagar, Lucknow, Uttar Pradesh",
      rating: 3.6,
      rating_count: 4535,
      cost_for_two: 600,
      delivery_time: "36 mins",
      veg_status: "Non-Veg",
      discount_offer: "Flat ₹125 OFF",
      is_open: false,
      image_url:
        "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/e0839ff574213e6f35b3899ebf1fc597",
      menu: [
        {
          item: "Veg Fried Rice",
          price: 249,
        },
        {
          item: "Gulab Jamun",
          price: 149,
        },
        {
          item: "Ice Cream Sundae",
          price: 149,
        },
        {
          item: "Cold Coffee",
          price: 179,
        },
      ],
    },
    {
      id: 3,
      name: "Zaika Bar & Kitchen",
      cuisines: ["Street Food", "Bakery", "Chaat"],
      area: "Vikas Nagar",
      city: "Lucknow",
      address: "Shop No. 50, Vikas Nagar, Lucknow, Uttar Pradesh",
      rating: 3.1,
      rating_count: 630,
      cost_for_two: 600,
      delivery_time: "41 mins",
      veg_status: "Non-Veg",
      discount_offer: null,
      is_open: true,
      image_url:
        "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/85ccae4e3576f9330af102c46ca85395",
      menu: [
        {
          item: "Veg Manchurian",
          price: 179,
        },
        {
          item: "Chicken Biryani",
          price: 199,
        },
        {
          item: "Dal Makhani",
          price: 399,
        },
        {
          item: "Paneer Butter Masala",
          price: 159,
        },
      ],
    },
    {
      id: 4,
      name: "Bawarchi Darbar",
      cuisines: ["Fast Food", "Rolls"],
      area: "Vinay Khand",
      city: "Lucknow",
      address: "Shop No. 3, Vinay Khand, Lucknow, Uttar Pradesh",
      rating: 3.7,
      rating_count: 3993,
      cost_for_two: 150,
      delivery_time: "52 mins",
      veg_status: "Pure Veg",
      discount_offer: "Flat ₹125 OFF",
      is_open: true,
      image_url:
        "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/d0450ce1a6ba19ea60cd724471ed54a8",
      menu: [
        {
          item: "Spring Rolls",
          price: 299,
        },
        {
          item: "Rasmalai",
          price: 349,
        },
        {
          item: "Tandoori Roti",
          price: 179,
        },
        {
          item: "Butter Naan",
          price: 199,
        },
        {
          item: "Ice Cream Sundae",
          price: 149,
        },
        {
          item: "Chole Bhature",
          price: 149,
        },
      ],
    },
    {
      id: 5,
      name: "Sultan Kitchen",
      cuisines: ["Fast Food", "Thai", "Rolls", "Street Food"],
      area: "Vikas Nagar",
      city: "Lucknow",
      address: "Shop No. 22, Vikas Nagar, Lucknow, Uttar Pradesh",
      rating: 4.6,
      rating_count: 4311,
      cost_for_two: 800,
      delivery_time: "22 mins",
      veg_status: "Veg & Non-Veg",
      discount_offer: "20% OFF up to ₹80",
      is_open: true,
      image_url:
        "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/535fc9f9c135f7982317bbb6a64a1ffc",
      menu: [
        {
          item: "Pav Bhaji",
          price: 399,
        },
        {
          item: "Paneer Butter Masala",
          price: 179,
        },
        {
          item: "Veg Fried Rice",
          price: 149,
        },
        {
          item: "Butter Naan",
          price: 99,
        },
        {
          item: "Momos (Veg)",
          price: 229,
        },
      ],
    },
    {
      id: 6,
      name: "Delhi House",
      cuisines: ["South Indian", "Momos", "Rajasthani", "Street Food"],
      area: "Vikas Nagar",
      city: "Lucknow",
      address: "Shop No. 49, Vikas Nagar, Lucknow, Uttar Pradesh",
      rating: 3.3,
      rating_count: 3062,
      cost_for_two: 400,
      delivery_time: "27 mins",
      veg_status: "Veg & Non-Veg",
      discount_offer: "50% OFF up to ₹100",
      is_open: true,
      image_url:
        "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/2b4f62d606d1b2bfba9ba9e5386fabb7",
      menu: [
        {
          item: "Chicken Tikka",
          price: 179,
        },
        {
          item: "Butter Naan",
          price: 349,
        },
        {
          item: "Momos (Veg)",
          price: 249,
        },
        {
          item: "Veg Manchurian",
          price: 299,
        },
        {
          item: "Margherita Pizza",
          price: 299,
        },
      ],
    },
    {
      id: 7,
      name: "Sagar Hub",
      cuisines: ["Mexican", "Biryani", "Continental"],
      area: "Gomti Nagar",
      city: "Lucknow",
      address: "Shop No. 13, Gomti Nagar, Lucknow, Uttar Pradesh",
      rating: 4.0,
      rating_count: 3437,
      cost_for_two: 250,
      delivery_time: "38 mins",
      veg_status: "Non-Veg",
      discount_offer: null,
      is_open: true,
      image_url:
        "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/f01666ac73626461d7455d9c24005cd4",
      menu: [
        {
          item: "Rasmalai",
          price: 399,
        },
        {
          item: "Gulab Jamun",
          price: 349,
        },
        {
          item: "Momos (Veg)",
          price: 199,
        },
        {
          item: "Cheese Burger",
          price: 349,
        },
      ],
    },
    {
      id: 8,
      name: "Zaika Dhaba",
      cuisines: ["Beverages", "Pizza", "Momos"],
      area: "Charbagh",
      city: "Lucknow",
      address: "Shop No. 9, Charbagh, Lucknow, Uttar Pradesh",
      rating: 4.1,
      rating_count: 3275,
      cost_for_two: 800,
      delivery_time: "47 mins",
      veg_status: "Pure Veg",
      discount_offer: null,
      is_open: true,
      image_url:
        "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/18d8b8fb6bac8063a6fa886e20148110",
      menu: [
        {
          item: "Mutton Rogan Josh",
          price: 399,
        },
        {
          item: "Cheese Burger",
          price: 99,
        },
        {
          item: "Momos (Veg)",
          price: 299,
        },
      ],
    },
    {
      id: 9,
      name: "Sultan Palace",
      cuisines: ["Chaat", "Momos"],
      area: "Aminabad",
      city: "Lucknow",
      address: "Shop No. 16, Aminabad, Lucknow, Uttar Pradesh",
      rating: 4.5,
      rating_count: 1104,
      cost_for_two: 500,
      delivery_time: "50 mins",
      veg_status: "Pure Veg",
      discount_offer: "Flat ₹125 OFF",
      is_open: false,
      image_url:
        "https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?w=660&h=400&fit=crop",
      menu: [
        {
          item: "Mutton Rogan Josh",
          price: 149,
        },
        {
          item: "Chole Bhature",
          price: 179,
        },
        {
          item: "Masala Dosa",
          price: 129,
        },
        {
          item: "Cold Coffee",
          price: 179,
        },
        {
          item: "Chicken Tikka",
          price: 229,
        },
      ],
    },
    {
      id: 10,
      name: "Pizza Zone",
      cuisines: ["Desserts", "Beverages", "Italian", "Andhra"],
      area: "Vinay Khand",
      city: "Lucknow",
      address: "Shop No. 9, Vinay Khand, Lucknow, Uttar Pradesh",
      rating: 3.5,
      rating_count: 412,
      cost_for_two: 200,
      delivery_time: "36 mins",
      veg_status: "Veg & Non-Veg",
      discount_offer: null,
      is_open: false,
      image_url:
        "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/5116a385bac0548e06c33c08350fbf11",
      menu: [
        {
          item: "Gulab Jamun",
          price: 229,
        },
        {
          item: "Tandoori Roti",
          price: 159,
        },
        {
          item: "Chicken Biryani",
          price: 349,
        },
        {
          item: "Margherita Pizza",
          price: 159,
        },
        {
          item: "Paneer Butter Masala",
          price: 199,
        },
      ],
    },
    {
      id: 11,
      name: "Urban Bites",
      cuisines: ["Street Food", "Thai", "Mexican"],
      area: "Vinay Khand",
      city: "Lucknow",
      address: "Shop No. 30, Vinay Khand, Lucknow, Uttar Pradesh",
      rating: 4.0,
      rating_count: 713,
      cost_for_two: 500,
      delivery_time: "20 mins",
      veg_status: "Pure Veg",
      discount_offer: "50% OFF up to ₹100",
      is_open: true,
      image_url:
        "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=660&h=400&fit=crop",
      menu: [
        {
          item: "Tandoori Roti",
          price: 399,
        },
        {
          item: "Chole Bhature",
          price: 159,
        },
        {
          item: "Dal Makhani",
          price: 299,
        },
        {
          item: "Momos (Veg)",
          price: 179,
        },
        {
          item: "Veg Fried Rice",
          price: 149,
        },
        {
          item: "Gulab Jamun",
          price: 99,
        },
      ],
    },
    {
      id: 12,
      name: "Annapurna Bhavan",
      cuisines: ["Chaat", "Mughlai", "Bakery", "Awadhi"],
      area: "Chowk",
      city: "Lucknow",
      address: "Shop No. 12, Chowk, Lucknow, Uttar Pradesh",
      rating: 3.1,
      rating_count: 4005,
      cost_for_two: 150,
      delivery_time: "55 mins",
      veg_status: "Pure Veg",
      discount_offer: "50% OFF up to ₹100",
      is_open: false,
      image_url:
        "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/56c9ab92bd79745fd152a30fa2525426",
      menu: [
        {
          item: "Paneer Butter Masala",
          price: 159,
        },
        {
          item: "Cold Coffee",
          price: 179,
        },
        {
          item: "Tandoori Roti",
          price: 159,
        },
        {
          item: "Chicken Tikka",
          price: 99,
        },
        {
          item: "Butter Naan",
          price: 399,
        },
        {
          item: "Cheese Burger",
          price: 229,
        },
      ],
    },
    {
      id: 13,
      name: "Local Kitchen",
      cuisines: ["Thai", "Mexican", "Italian"],
      area: "Alambagh",
      city: "Lucknow",
      address: "Shop No. 36, Alambagh, Lucknow, Uttar Pradesh",
      rating: 3.1,
      rating_count: 414,
      cost_for_two: 200,
      delivery_time: "29 mins",
      veg_status: "Pure Veg",
      discount_offer: "Buy 1 Get 1",
      is_open: true,
      image_url:
        "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/b14cd9fc40129fcfb97aa7e621719d07",
      menu: [
        {
          item: "Pav Bhaji",
          price: 199,
        },
        {
          item: "Cold Coffee",
          price: 99,
        },
        {
          item: "Butter Naan",
          price: 399,
        },
        {
          item: "Veg Manchurian",
          price: 229,
        },
      ],
    },
    {
      id: 14,
      name: "Annapurna Zone",
      cuisines: ["Continental", "Healthy Food", "South Indian", "Fast Food"],
      area: "Mahanagar",
      city: "Lucknow",
      address: "Shop No. 31, Mahanagar, Lucknow, Uttar Pradesh",
      rating: 3.4,
      rating_count: 3385,
      cost_for_two: 250,
      delivery_time: "47 mins",
      veg_status: "Veg & Non-Veg",
      discount_offer: "Buy 1 Get 1",
      is_open: true,
      image_url:
        "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/af33b81798b11deba338e94b7585d348",
      menu: [
        {
          item: "Dal Makhani",
          price: 349,
        },
        {
          item: "Veg Fried Rice",
          price: 349,
        },
        {
          item: "Cold Coffee",
          price: 249,
        },
        {
          item: "Momos (Veg)",
          price: 249,
        },
        {
          item: "Paneer Butter Masala",
          price: 349,
        },
        {
          item: "Chole Bhature",
          price: 99,
        },
      ],
    },
    {
      id: 15,
      name: "Karnataka Cafe",
      cuisines: ["Street Food", "Chinese", "North Indian"],
      area: "Charbagh",
      city: "Lucknow",
      address: "Shop No. 38, Charbagh, Lucknow, Uttar Pradesh",
      rating: 3.7,
      rating_count: 2126,
      cost_for_two: 450,
      delivery_time: "53 mins",
      veg_status: "Veg & Non-Veg",
      discount_offer: "Flat ₹125 OFF",
      is_open: true,
      image_url:
        "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/bdcd233971b7c81bf77e1fa4471280eb",
      menu: [
        {
          item: "Butter Naan",
          price: 399,
        },
        {
          item: "Veg Manchurian",
          price: 229,
        },
        {
          item: "Veg Fried Rice",
          price: 159,
        },
        {
          item: "Dal Makhani",
          price: 99,
        },
        {
          item: "Tandoori Roti",
          price: 229,
        },
        {
          item: "Momos (Veg)",
          price: 159,
        },
      ],
    },
  ],
};
const Body = () => {
  return (
    <div className="body">
      <div className="search">Search</div>
      <div className="res-container">
        {resObj.restaurants.map((restaurant) => (
          <RestaurantCard key={restaurant.id} restaurant={restaurant} />
        ))}
      </div>
    </div>
  );
};
const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Body />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
