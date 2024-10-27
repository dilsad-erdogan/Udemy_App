import { useDispatch, useSelector } from "react-redux"
import { PiEmptyBold } from "react-icons/pi";
import { FaTrashAlt } from "react-icons/fa";
import { removeFromCart } from "../../redux/cartSlice";
import StudentPageNavbar from "../../components/Navbar/StudentPageNavbar";

const Cart = () => {
    const cart = useSelector(state => state.cart);
    const dispatch = useDispatch();

    return (
        <main className="overflow-x-hidden bg-white text-dark">
            <StudentPageNavbar />

            <div className="container mx-auto py-8 min-h-96 px-4 md:px-16 lg:px-24">
                {cart.videos.length > 0 ?
                    <div>
                        <h3 className="text-2xl font-semibold mb-4">SHOPPING CART</h3>

                        <div className="flex flex-col md:flex-row justify-between space-x-10 mt-8">
                            <div className="md:w-2/3">
                                <div className="flex justify-between border-b items-center mb-4 text-xs font-bold">
                                    <p>PRODUCTS</p>

                                    <div className="flex space-x-8">
                                        <p>PRICE</p>
                                        <p>SUBTOTAL</p>
                                        <p>REMOVE</p>
                                    </div>
                                </div>

                                <div>
                                    {cart.videos.map((video) => (
                                        <div key={video._id} className="flex items-center justify-between p-3 border-b">
                                            <div className="md:flex items-center space-x-4">
                                                <img src={video.videoPng} alt="" className="w-16 h-16 object-contain rounded" />

                                                <div className="flex-1 ml-4">
                                                    <h3 className="text-lg font-semibold">{video.title}</h3>
                                                </div>
                                            </div>

                                            <div className="flex space-x-12 items-center">
                                                <p>${video.price}</p>

                                                <p>${video.price.toFixed(2)}</p>

                                                <button className="text-primary" onClick={() => dispatch(removeFromCart(video._id))}>
                                                    <FaTrashAlt />
                                                </button>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div className="md:w-1/3 bg-white p-6 rounded-lg shadow-md border">
                                <h3 className="text-sm font-semibold mb-5">CART TOTAL</h3>

                                <div className="flex justify-between mb-5 border-b pb-1">
                                    <span className="text-sm">Total Items:</span>
                                    <span>{cart.totalQuantity}</span>
                                </div>

                                <div className="flex justify-between mb-4">
                                    <span>Total Price:</span>
                                    <span>${cart.totalPrice.toFixed(2)}</span>
                                </div>

                                <button className="w-full bg-primary text-white py-2">Buy Them All</button>
                            </div>
                        </div>
                    </div>
                    :
                    <div className="flex flex-col justify-center items-center text-center gap-3 mb-4">
                        <PiEmptyBold className="h-96 w-96 text-red-500" />
                        <h4 className="text-xl font-semibold text-red-500">Your cart is empty</h4>
                        <p className="font-semibold text-gray-600">Add something to make me happy</p>
                    </div>
                }
            </div>
        </main>
    )
}

export default Cart