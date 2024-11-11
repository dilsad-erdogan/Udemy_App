import { useEffect } from "react";
import AdminPageNavbar from "../../components/Navbar/AdminPageNavbar"
import { useDispatch, useSelector } from "react-redux"
import { fetchPurchases } from "../../redux/purchaseSlice";
import { fetchUsers } from "../../redux/userSlice";
import { fetchVideos } from "../../redux/videoSlice";

const Purchases = () => {
  const dispatch = useDispatch();
  const purchases = useSelector(state => state.purchase.purchases);
  const users = useSelector(state => state.user.users);
  const videos = useSelector(state => state.video.videos);

  useEffect(() => {
    dispatch(fetchPurchases());
    dispatch(fetchUsers());
    dispatch(fetchVideos());
  }, [dispatch]);

  const getUserName = (id) => {
    const user = users?.data?.find(u => u._id === id);
    return user ? user.name : "Unknown User";
  };

  const getUserVideo = (id) => {
    const video = videos?.data?.find(v => v._id === id);
    return video ? video.title : "Unknown Video";
  };

  return (
    <main className="overflow-x-hidden bg-white text-dark">
      <AdminPageNavbar />

      <div className="py-24 flex justify-center text-center">
        <div className="w-full overflow-x-auto">
          <table className="w-11/12 max-w-4xl mx-auto">
            <thead className="border-b-2 border-black">
              <tr>
                <th scope="col" className="p-3 text-sm font-bold items-center mt-5">User</th>
                <th scope="col" className="p-3 text-sm font-bold items-center mt-5">Video</th>
              </tr>
            </thead>
            
            <tbody className="divide-y divide-black">
              {purchases?.data?.map((data) => (
                <tr key={data._id}>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">{getUserName(data.user_id)}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">{getUserVideo(data.video_id)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </main>
  )
}

export default Purchases