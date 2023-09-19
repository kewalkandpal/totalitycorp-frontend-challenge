import { Link } from "react-router-dom";

function PageNotFound() {
    return (
        <div className="mt-28 text-center">
            <h1 className="text-md md:text-5xl font-serif">404</h1>
            <p className="mt-2 text-lg md:text-xl">Page not found</p>
            <Link to="/"><button className="pl-4 pr-4 pt-2 pb-2 text-sm md:text-[16px] mt-4 bg-orange-500 text-white border-2 rounded-md font-medium hover:bg-white hover:text-orange-500 hover:border-2 border-orange-500 transition-all shadow-lg">Go back</button></Link>
        </div>
    )
}

export default PageNotFound;