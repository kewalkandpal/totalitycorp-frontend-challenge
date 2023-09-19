import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { RootState } from "../redux/store";
import { auth } from "../firebase/firebase";

function Navbar() {
    const total: number = useSelector((product: RootState) => product.userCart.cart).length;
    const image: string = useSelector((user: RootState) => user?.userCart?.image);
    const user: any = useSelector((user: RootState) => user.userCart.user);

    function logOut() {
        auth.signOut();
    }

    return (
        <nav className="w-full h-[100px] md:h-10 flex justify-center items-center flex-col md:flex-row p-10 bg-white shadow-md fixed top-0 left-0 right-0 bottom-0">
            <Link to="/">
                <h1 className="text-lg md:text-xl font-serif cursor-pointer shadow-sm mt-2">Shopping <span className="text-orange-500 font-extrabold text-xl md:text-2xl">Point</span></h1>
            </Link>
            <div className="flex-1 flex justify-end items-center mr-5 mt-3 mb-2 md:mb-0">
                <h2 className="font-bold capitalize">{user.displayName}</h2>
                <img src={image} alt="img" id="myimg" className="w-[30px] h-[30px] md:w-[40px] md:h-[40px] object-cover rounded-full ml-5 mr-5" />
                <button className="p-[5px] md:p-[8px] text-[12px] md:text-[14px] bg-orange-500 text-white border-2 rounded-md font-medium hover:bg-white hover:text-orange-500 hover:border-2 border-orange-500 transition-all shadow-lg" onClick={() => logOut()}>Log Out</button>
                <div className="cursor-pointer relative ml-5">
                    <Link to="/cart">
                        <i className="fa-sharp fa-solid fa-cart-shopping text-orange-500 text-3xl md:text-4xl"></i>
                        <p className="absolute top-[-18px] left-2 text-xl md:text-2xl font-sarif font-bold shadow-md">{total}</p>
                    </Link>
                </div>
            </div>
        </nav>
    )
}

export default Navbar;