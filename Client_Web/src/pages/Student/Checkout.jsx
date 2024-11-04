import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { FaAngleDown, FaAngleUp } from "react-icons/fa";
import StudentPageNavbar from "../../components/Navbar/StudentPageNavbar";
import { addPurchase } from "../../redux/purchaseSlice";
import { clearCart } from "../../redux/cartSlice";

const Checkout = () => {
    const [billingToggle, setBillingToggle] = useState(true);
    const [paymentToggle, setPaymentToggle] = useState(true);
    const [paymentMethod, setPaymentMethod] = useState("cod");
    
    const dispatch = useDispatch();
    const cart = useSelector(state => state.cart);
    const navigate = useNavigate();

    const handleOrder = () => {
        cart.videos.forEach(video => {
            const newOrder = {
                user_id: JSON.parse(localStorage.getItem('user')).user._id,
                video_id: video._id
            };
            dispatch(addPurchase(newOrder));
        });

        dispatch(clearCart());
        alert('Your order has been received!');
        navigate('/student');
    }
    
    return (
        <main className="overflow-x-hidden bg-white text-dark">
            <StudentPageNavbar />

            <div className="container mx-auto py-8 min-h-96 px-4 md:px-16 lg:px-24">
                <h3 className="text-2xl font-semibold mb-4">CHECKOUT</h3>

                <div className="flex flex-col md:flex-row justify-between space-x-10 mt-8">
                    <div className="md:w-2/3">
                        <div className="border p-2 mb-6 space-y-4">
                            <div className="flex items-center justify-between" onClick={() => setBillingToggle(!billingToggle)}>
                                <h3 className="text-lg font-semibold mb-2">Billing Information</h3>
                                {billingToggle ? <FaAngleDown /> : <FaAngleUp />}
                            </div>

                            <div className={`space-y-4 ${billingToggle ? "" : "hidden"}`}>
                                <label className="block text-gray-700">Name</label>
                                <input type="text" name="name" placeholder="Enter Name" className="w-full px-3 py-2 border" />
                            </div>

                            <div className={`space-y-4 ${billingToggle ? "" : "hidden"}`}>
                                <label className="block text-gray-700">Email</label>
                                <input type="text" name="email" placeholder="Enter Email" className="w-full px-3 py-2 border" />
                            </div>
                            
                            <div className={`space-y-4 ${billingToggle ? "" : "hidden"}`}>
                                <label className="block text-gray-700">Phone</label>
                                <input type="text" name="phone" placeholder="Enter Phone" className="w-full px-3 py-2 border" />
                            </div>
                        </div>

                        <div className="border p-2 mb-6 space-y-4">
                            <div className="flex items-center justify-between" onClick={() => setPaymentToggle(!paymentToggle)}>
                                <h3 className="text-lg font-semibold mb-2">Payment Method</h3>
                                {billingToggle ? <FaAngleDown /> : <FaAngleUp />}
                            </div>

                            <div className={`space-y-4 ${paymentToggle ? "" : "hidden"}`}>
                                <div className="flex items-center mb-2">
                                    <input type="radio" name="payment" checked={paymentMethod === "cod"} onChange={() => setPaymentMethod("cod")} />
                                    <label className="block text-gray-700 ml-2">Cash on Delivery</label>
                                </div>
                            </div>

                            <div className={`space-y-4 ${paymentToggle ? "" : "hidden"}`}>
                                <div className="flex items-center mb-2">
                                    <input type="radio" name="payment" checked={paymentMethod === "dc"} onChange={() => setPaymentMethod("dc")} />
                                    <label className="block text-gray-700 ml-2">Debit Card</label>
                                </div>

                                {paymentMethod === "dc" && (
                                    <div className="bg-gray-100 p-4 rounded-lg mb-4">
                                        <h3 className="text-xl font-semibold mb-4">Debit Card Information</h3>

                                        <div className="mb-4">
                                            <label className="block text-gray-700 font-semibold mb-2">Card Number</label>
                                            <input type="text" placeholder="Enter Card Number" className="border p-2 w-full rounded" required />
                                        </div>

                                        <div className="mb-4">
                                            <label className="block text-gray-700 font-semibold mb-2">Card Holder Name</label>
                                            <input type="text" placeholder="Enter Card Holder Name" className="border p-2 w-full rounded" required />
                                        </div>
                                        
                                        <div className="mb-4 flex justify-between">
                                            <div className="w-1/2 mr-2">
                                                <label className="block text-gray-700 font-semibold mb-2">Expire Date</label>
                                                <input type="text" placeholder="MM/YY" className="border p-2 w-full rounded" required />
                                            </div>

                                            <div className="w-1/2 ml-2">
                                                <label className="block text-gray-700 font-semibold mb-2">CVV</label>
                                                <input type="text" placeholder="CVV" className="border p-2 w-full rounded" required />
                                            </div>
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>

                    <div className="md:w-1/3 bg-white p-6 rounded-lg shadow-md border">
                        <h3 className="text-lg font-semibold mb-4">Order Summary</h3>

                        <div className="space-y-4">
                            {cart?.videos?.map(product => (
                                <div key={product._id} className="flex justify-between">
                                    <div className="flex items-center">
                                        <img src={product.video_png} alt={product.title} className="w-16 object-contain rounded" />

                                        <div className="ml-4">
                                            <h4 className="text-md font-semibold">{product.title}</h4>
                                        </div>
                                    </div>

                                    <div className="text-gray-800">
                                        ${product.price}
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div className="mt-4 border-t pt-4">
                            <div className="flex justify-between">
                                <span>Total Price:</span>
                                <span className="font-semibold">${cart.totalPrice.toFixed(2)}</span>
                            </div>
                        </div>

                        <button className="w-full bg-red-600 text-white py-2 mt-6 hover:bg-red-800" onClick={handleOrder}>Place Order</button>
                    </div>
                </div>
            </div>        
        </main>
    )
}

export default Checkout