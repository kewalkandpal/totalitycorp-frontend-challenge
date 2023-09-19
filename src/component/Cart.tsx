import { useSelector } from "react-redux";
import { productInterface } from "../interface";
import { RootState } from "../redux/store";
import { useDispatch } from "react-redux";
import { decrement, increment, removeCart } from "../redux/cartSlice";
import { Link } from "react-router-dom";

function Cart() {
    const dispatch = useDispatch();

    const products: productInterface[] = useSelector((product: RootState) => product.userCart.cart);

    function removeProduct(id: number) {
        dispatch(removeCart(id));
    }

    function handelIncrement(id: number) {
        dispatch(increment(id));
    }

    function handelDecrement(id: number) {
        dispatch(decrement(id));
    }

    if (products.length < 1) {
        return <div className="mt-28 text-center">
            <h1 className="text-md md:text-xl font-serif">Your cart is empty</h1>
            <Link to="/"><button className="pl-4 pr-4 pt-2 pb-2 text-sm md:text-[16px] mt-4 bg-orange-500 text-white border-2 rounded-md font-medium hover:bg-white hover:text-orange-500 hover:border-2 border-orange-500 transition-all shadow-lg">Go back</button></Link>
        </div>
    }
    return (
        <div className="w-full h-auto p-10 mt-12">
            <div className="w-full flex md:flex-row flex-col md:justify-end items-center md:items-center p-3 mb:8">
                <Link to="/checkout">
                    <button className="p-[6px] md:p-[8px] text-sm md:text-[16px] bg-orange-500 text-white border-2 rounded-md font-medium hover:bg-white hover:text-orange-500 hover:border-2 border-orange-500 transition-all shadow-lg">Proceed to checkout </button>
                </Link>
            </div>
            <div className="w-full flex justify-center items-center flex-wrap">
                {
                    products?.map((product) => {
                        return (
                            <div className="w-[280px] h-[440px] md:w-[600px] md:h-[280px] p-3 flex md:flex-row flex-col shadow-xl bg-white m-2 rounded-md" key={product.id}>
                                <div className="w-full h-[180px] md:w-[300px] md:h-full">
                                    <img src={product.thumbnail} alt={product.brand} className="w-full h-full object-cover shadow-lg shadow-orange-400" />
                                </div>
                                <div className="w-full md:w-[300px] md:ml-5 p-2 md:p-0 mt-2 md:mt-0">
                                    <p className="text-xl md:text-2xl font-serif font-bold">{product.brand}</p>
                                    <p className="space-x-2 text-yellow-600 mt-2 mb-1">{Array(Math.round(product.rating)).fill(0).map((_, id) => {
                                        return <i className="fa-regular fa-star text-sm" key={id}></i>
                                    })}</p>
                                    <p className="text-gray-600 text-sm md:text-md">{product.description.slice(0, 60)}</p>
                                    <h2 className="font-mono text-xl md:text-2xl mt-2 mb-2"><i className="fa-solid fa-indian-rupee-sign text-md"></i> {product.price}</h2>
                                    <div className="flex items-center">
                                        <div className="flex space-x-5 text-xl">
                                            <p className="cursor-pointer shadow-md" onClick={() => handelDecrement(product.id)}><i className="fa-solid fa-arrow-down text-md"></i></p>
                                            <p className="font-bold font-mono text-[15px] md:text-[18px]">{product.amount}</p>
                                            <p className="cursor-pointer shadow-md" onClick={() => handelIncrement(product.id)}><i className="fa-solid fa-arrow-up text-md"></i></p>
                                        </div>
                                        <button className="p-1 md:p-2 text-sm md:text-[16px] bg-red-500 hover:bg-red-600 transition-all text-white ml-6 rounded-sm" onClick={() => removeProduct(product.id)}>Remove</button>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Cart;