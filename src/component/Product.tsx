import { useEffect, useState } from "react";
import { productInterface } from "../interface";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/cartSlice";

const products: productInterface[] = [
    {
        "id": 1,
        "title": "iPhone 9",
        "description": "An apple mobile which is nothing like apple",
        "price": 549,
        "discountPercentage": 12.96,
        "rating": 4.69,
        "amount": 1,
        "brand": "Apple",
        "category": "phone",
        "thumbnail": "https://i.dummyjson.com/data/products/1/thumbnail.jpg",
    },
    {
        "id": 2,
        "title": "iPhone X",
        "description": "SIM-Free, Model A19211 6.5-inch Super Retina HD display with OLED technology A12 Bionic chip with ...",
        "price": 899,
        "discountPercentage": 17.94,
        "rating": 4.44,
        "amount": 1,
        "brand": "Apple",
        "category": "phone",
        "thumbnail": "https://i.dummyjson.com/data/products/2/thumbnail.jpg",
    },
    {
        "id": 3,
        "title": "Samsung Universe 9",
        "description": "Samsung's new variant which goes beyond Galaxy to the Universe",
        "price": 1249,
        "discountPercentage": 15.46,
        "rating": 4.09,
        "amount": 1,
        "brand": "Samsung",
        "category": "phone",
        "thumbnail": "https://i.dummyjson.com/data/products/3/thumbnail.jpg",
    },
    {
        "id": 4,
        "title": "OPPOF19",
        "description": "OPPO F19 is officially announced on April 2021.",
        "price": 280,
        "discountPercentage": 17.91,
        "rating": 4.3,
        "amount": 1,
        "brand": "OPPO",
        "category": "phone",
        "thumbnail": "https://i.dummyjson.com/data/products/4/thumbnail.jpg",
    },
    {
        "id": 5,
        "title": "Huawei P30",
        "description": "Huawei’s re-badged P30 Pro New Edition was officially unveiled yesterday in Germany and now the device has made its way to the UK.",
        "price": 499,
        "discountPercentage": 10.58,
        "rating": 4.09,
        "amount": 1,
        "brand": "Huawei",
        "category": "phone",
        "thumbnail": "https://i.dummyjson.com/data/products/5/thumbnail.jpg",
    },
    {
        "id": 6,
        "title": "MacBook Pro",
        "description": "MacBook Pro 2021 with mini-LED display may launch between September, November",
        "price": 1749,
        "discountPercentage": 11.02,
        "rating": 4.57,
        "amount": 1,
        "brand": "Apple",
        "category": "laptop",
        "thumbnail": "https://i.dummyjson.com/data/products/6/thumbnail.png",
    },
    {
        "id": 7,
        "title": "Samsung Galaxy Book",
        "description": "Samsung Galaxy Book S (2020) Laptop With Intel Lakefield Chip, 8GB of RAM Launched",
        "price": 1499,
        "discountPercentage": 4.15,
        "rating": 4.25,
        "amount": 1,
        "brand": "Samsung",
        "category": "laptop",
        "thumbnail": "https://i.dummyjson.com/data/products/7/thumbnail.jpg",
    },
    {
        "id": 8,
        "title": "Microsoft Surface Laptop 4",
        "description": "Style and speed. Stand out on HD video calls backed by Studio Mics. Capture ideas on the vibrant touchscreen.",
        "price": 1499,
        "discountPercentage": 10.23,
        "rating": 4.43,
        "amount": 1,
        "brand": "Microsoft Surface",
        "category": "laptop",
        "thumbnail": "https://i.dummyjson.com/data/products/8/thumbnail.jpg",
    },
    {
        "id": 9,
        "title": "Infinix INBOOK",
        "description": "Infinix Inbook X1 Ci3 10th 8GB 256GB 14 Win10 Grey – 1 Year Warranty",
        "price": 1099,
        "discountPercentage": 11.83,
        "rating": 4.54,
        "amount": 1,
        "brand": "Infinix",
        "category": "laptop",
        "thumbnail": "https://i.dummyjson.com/data/products/9/thumbnail.jpg",
    },
    {
        "id": 10,
        "title": "HP Pavilion 15-DK1056WM",
        "description": "HP Pavilion 15-DK1056WM Gaming Laptop 10th Gen Core i5, 8GB, 256GB SSD, GTX 1650 4GB, Windows 10",
        "price": 1099,
        "discountPercentage": 6.18,
        "rating": 4.43,
        "amount": 1,
        "brand": "HP Pavilion",
        "category": "laptop",
        "thumbnail": "https://i.dummyjson.com/data/products/10/thumbnail.jpeg",
    },
];

function Product() {
    const dispatch = useDispatch();
    const [category, setCategory] = useState<string>("all");
    const [filterProduct, setFilterProduct] = useState<productInterface[]>([]);

    const handelAdd = (id: number) => {
        const get_selected_roduct: productInterface = filterProduct.filter((product) => product.id === id)[0];
        dispatch(addToCart(get_selected_roduct));
    }

    useEffect(() => {
        if (category === "all") {
            setFilterProduct(products);
        } else if (category === "price range") {
            setFilterProduct(products.sort((a, b) => a.price > b.price ? 1 : -1).map((product) => product));
        } else if (category === "phone") {
            setFilterProduct(products.filter((product) => product.category === category));
        } else if (category === "rating") {
            setFilterProduct(products.sort((a, b) => a.rating < b.rating ? 1 : -1));
        } else if (category === "laptop") {
            setFilterProduct(products.filter((product) => product.category === category));
        }
    }, [category]);

    return (
        <div className="w-full h-auto p-10 mt-20">
            <div className="w-fit p-1 flex items-center mb-10 ml-2 border-b-2 shadow-lg shadow-orange-200">
                <h1 className="text-lg md:text-xl font-bold font-serif mr-3">Filter
                    <span className="ml-2"><i className="fas fa-filter text-orange-500"></i></span>
                </h1>
                <select className="p-1 w-[150px] border-none outline-none cursor-pointer" onChange={(e) => setCategory(e.target.value)}>
                    <option value="all" selected className="text-sm md:text-lg">All</option>
                    <option value="phone" className="text-sm md:text-lg">Phone</option>
                    <option value="laptop" className="text-sm md:text-lg">Laptop</option>
                    <option value="price range" className="text-sm md:text-lg">Price range</option>
                    <option value="rating" className="text-sm md:text-lg">Ratings</option>
                </select>
            </div>
            <div className="w-fill h-auto flex justify-center items-center flex-wrap">
                {
                    filterProduct?.map((product) => {
                        return (
                            <div className="w-[280px] h-[360px] sm:w-[300px] sm:h-[370px] shadow-xl  p-3 rounded-md m-2" key={product.id}>
                                <div className="w-full h-[200px]">
                                    <img src={product.thumbnail} alt={product.brand} className="w-full h-full object-cover shadow-lg shadow-orange-400" />
                                </div>
                                <div className="mt-5 pl-3 space-y-2">
                                    <p className="font-sarif text-md"><span className="text-md font-bold mr-2">Name:</span>{product.brand}</p>
                                    <p className="font-sarif text-md"><span className="text-md font-bold mr-2">Price:</span>{product.price}</p>
                                </div>
                                <div className="w-full mt-4 mb-2">
                                    <button className="ml-3 p-[6px] md:p-2 bg-orange-500 text-white font-serif font-medium md:font-bold rounded-sm border-2 hover:bg-white hover:text-orange-500 hover:border-2 border-orange-500 transition-all shadow-lg " onClick={() => handelAdd(product.id)}>Add to Cart</button>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Product;