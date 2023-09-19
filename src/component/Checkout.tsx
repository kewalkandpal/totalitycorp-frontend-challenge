import { useSelector } from "react-redux";
import { RootState } from "../redux/store";
import { Link } from "react-router-dom";
import { productInterface } from "../interface";

function Checkout() {
    const products: productInterface[] = useSelector((product: RootState) => product.userCart.cart);
    const total: number = products.reduce((total, curItem) => total += (curItem.price * curItem.amount), 0);

    return (
        <div className="w-full h-auto mt-24 flex items-center flex-col p-2">
            <h2 className="p-1 mb-8 text-lg md:text-xl font-bold font-serif underline underline-offset-4 text-orange-500">Payment Details</h2>
            <div className="w-[80%] h-auto">
                <table className="w-full h-full text-center">
                    <thead>
                        <tr className="border-b-2">
                            <th className="p-1 text-sm md:text-lg">Item</th>
                            <th className="p-1 text-sm md:text-lg">Name</th>
                            <th className="p-1 text-sm md:text-lg">Quantity</th>
                            <th className="p-1 text-sm md:text-lg">Price</th>
                            <th className="p-1 text-sm md:text-lg">Total</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            products?.map((product) => {
                                return (
                                    <tr key={product.id}>
                                        <td className="p-1 text-sm md:text-md flex justify-center items-center"><img src={product.thumbnail} alt={product.brand} className="w-[50px] h-[50px] object-cover" /></td>
                                        <td className="p-1 text-sm md:text-md">{product.brand}</td>
                                        <td className="p-1 text-sm md:text-md">{product.amount}</td>
                                        <td className="p-1 text-sm md:text-md">{product.price}</td>
                                        <td className="p-1 text-sm md:text-md">{product.price * product.amount}</td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table>
                <div className="w-full border-t-2 mt-5 text-right">
                    <h1 className="mt-2 text-lg md:text-xl font-bold">Total <span className="ml-2 text-[17px] md:text-lg"><i className="fa-solid fa-indian-rupee-sign text-sm md:text-lg"></i> {total} /-</span></h1>
                    <Link to="/"><button className="p-[6px] md:p-[8px] text-sm md:text-[16px] mt-4 bg-orange-500 text-white border-2 rounded-md font-medium hover:bg-white hover:text-orange-500 hover:border-2 border-orange-500 transition-all shadow-lg">Proceed to payment</button></Link>
                </div>
            </div>
        </div>
    )
}

export default Checkout;