import { useDispatch } from "react-redux"
import { addToCart } from "../redux/cartSlice"

const ExplanationCard = ({ data }) => {
    const dispatch = useDispatch();

    const handleAddToCart = (e, data) => {
        e.stopPropagation()
        e.preventDefault()
        dispatch(addToCart(data));
        alert('Video Added Succesfully!');
    };

    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="flex flex-col justify-center gap-4 sm:pl-3 pt-12 sm:pt-0 text-center sm:text-left">
                <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold">{data.title}</h1>
                <p className="text-xl sm:text-3xl lg:text-xl font-bold text-right">{data.teacher}</p>
                <p className="text-xl sm:text-3xl lg:text-xl font-bold text-right">${data.price}</p>
                <p className="text-xl sm:text-3xl lg:text-xl font-bold break-words">{data.description}</p>
            </div>

            <div className="flex flex-col gap-5">
                <img src={data.videoUrl} alt="" className="w-[300px] sm:w-[500px] mx-auto" />
                <button className="primary-btn mt-5" onClick={(e) => handleAddToCart(e, data)}>Add to Cart</button>
            </div>

        </div> 
    )
}

export default ExplanationCard