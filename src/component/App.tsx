import { useEffect } from 'react';
import Navbar from './Navbar';
import Product from './Product';
import Cart from './Cart';
import { Routes, Route } from 'react-router-dom';
import Checkout from './Checkout';
import PageNotFound from './NotFound';
import LogIn from './LogIn';
import { useSelector } from 'react-redux';
import { RootState } from '../redux/store';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '../firebase/firebase';
import { useDispatch } from 'react-redux';
import { userLogIn, userLogOut } from '../redux/cartSlice';

function App() {
  const userActive = useSelector((user: RootState) => user.userCart.user);
  const dispatch = useDispatch();

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        dispatch(userLogIn({
          email: user.email,
          displayName: user.displayName
        }))
      } else {
        dispatch(userLogOut())
      }
    })
  }, [dispatch])
  return (
    <div className="w-full h-screen">
      {
        !userActive ? <LogIn /> : <>   <Navbar />
          <Routes>
            <Route path='/' element={<Product />} />
            <Route path='/cart' element={<Cart />} />
            <Route path='/checkout' element={<Checkout />} />
            <Route path='*' element={<PageNotFound />} />
          </Routes>
        </>
      }

    </div>
  );
}

export default App;
