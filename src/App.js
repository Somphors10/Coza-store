
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home1 from './pages/Home1';
import Layout from './pages/Layout';
import Home2 from './pages/Home2';
import Home3 from './pages/Home3';
import Shop from './pages/Shop';
import Feature from './pages/Feature';
import Blog from './pages/Blog';
import About from './pages/About';
import Contact from './pages/Contact';
import Wishlist from './pages/Wishlist';
import Cart from './pages/Cart';
import Navbar from './componets/Navbar';
import Shopblog from './componets/Shopblog';
import Footer from './componets/Footer';
import AllProduct from './componets/AllProduct';
import BlogBlog from './componets/BlogBlog';
import ContactFile from './componets/ContactFile';
import Aboutblog from './componets/Aboutblog';
import Map from './componets/Map';
import HeaderBlog from './componets/HeaderBlog';
import HeaderAbout from './componets/HeaderAbout';
import OurBlog from './componets/OurBlog';
import FeatureForm from './componets/FeatureForm';
import DetailBlogCard from './componets/DetailBlogCard';
import ContactEnd from './componets/ContactEnd';
import CategoryProduct from './componets/CategoryProduct';
import CategoryPro from './componets/CategoryPro';
import { WishlistProvider } from './componets/WishlistProvider';
import { CartProvider } from './componets/CartProvider';
import { ThemeProvider } from './componets/ThemeProvider';
import './theme-overrides.css';

function App() {
  return (
    <ThemeProvider>
    <CartProvider>
    <WishlistProvider>
      <BrowserRouter>
        <Routes path="/" element={<Layout />}>
          <Route index element={<Home1 />} />
          <Route path="/home1" element={<Home1 />} />
          <Route path="/home2" element={<Home2 />} />
          <Route path="/home3" element={<Home3 />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/wishlist" element={<Wishlist />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/feature" element={<Feature />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/navbar" element={<Navbar />} />
          <Route path="/shopblog" element={<Shopblog />} />
          <Route path="/footer" element={<Footer />} />
          <Route path="/allproduct" element={<AllProduct />} />
          <Route path="/blogblog" element={<BlogBlog />} />
          <Route path="/contactfile" element={<ContactFile />} />
          <Route path="/aboutblog" element={<Aboutblog />} />
          <Route path="/map" element={<Map />} />
          <Route path="/headerBlog" element={<HeaderBlog />} />
          <Route path="/heaerAbout" element={<HeaderAbout />} />
          <Route path="ourBlog" element={<OurBlog />} />
          <Route path="/featureForm" element={<FeatureForm />} />
          <Route path="/detailBlogCard" element={<Navigate to="/blog/post/1" replace />} />
          <Route path="/blog/post/:postId" element={<DetailBlogCard />} />
          <Route path="/contantEnd" element={<ContactEnd />} />
          <Route path="/categoryProduct" element={<CategoryProduct />} />
          <Route path="/categoryPro" element={<CategoryPro />} />
        </Routes>
      </BrowserRouter>
    </WishlistProvider>
    </CartProvider>
    </ThemeProvider>
  );
}

export default App;