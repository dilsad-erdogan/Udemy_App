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

      <div className="flex flex-col mt-5">
        <div className="-m-1.5 overflow-x-auto">
          <div className="p-1.5 min-w-full inline-block align-middle">
            <div className="overflow-hidden">
              <table className="min-w-full divide-y divide-black">
                <thead>
                  <tr>
                    <th scope="col" className="px-6 py-3 text-start text-s font-medium uppercase">User</th>
                    <th scope="col" className="px-6 py-3 text-start text-s font-medium uppercase">Video</th>
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
        </div>
      </div>
    </main>
  )
}

export default Purchases