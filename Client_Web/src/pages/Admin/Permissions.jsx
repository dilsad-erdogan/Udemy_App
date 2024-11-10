import { useEffect } from "react";
import AdminPageNavbar from "../../components/Navbar/AdminPageNavbar"
import { useDispatch, useSelector } from "react-redux"
import { fetchPermissions } from "../../redux/permissionSlice";
import { fetchUsers } from "../../redux/userSlice";

const Permissions = () => {
  const dispatch = useDispatch();
  const permissions = useSelector(state => state.permission.permissions);
  const users = useSelector(state => state.user.users);

  useEffect(() => {
    dispatch(fetchPermissions());
    dispatch(fetchUsers());
  }, [dispatch]);

  const getUserName = (id) => {
    const user = users?.data?.find(u => u._id === id);
    return user ? user.name : "Unknown User";
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
                    <th scope="col" className="px-6 py-3 text-start text-s font-medium uppercase">Title</th>
                    <th scope="col" className="px-6 py-3 text-start text-s font-medium uppercase">Description</th>
                    <th scope="col" className="px-6 py-3 text-start text-s font-medium uppercase">Price</th>
                    <th scope="col" className="px-6 py-3 text-start text-s font-medium uppercase">Video Png</th>
                    <th scope="col" className="px-6 py-3 text-start text-s font-medium uppercase">Video Url</th>
                    <th scope="col" className="px-6 py-3 text-start text-s font-medium uppercase">Permission Status</th>
                  </tr>
                </thead>
            
                <tbody className="divide-y divide-black">
                  {permissions?.data?.map((data) => (
                    <tr key={data._id}>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">{getUserName(data.user_id)}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">{data.title}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">{data.description.length > 20 ? `${data.description.substring(0, 20)}...` : data.description}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">{data.price}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">{data.video_png.length > 20 ? `${data.video_png.substring(0, 20)}...` : data.video_png}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">{data.video_url.length > 20 ? `${data.video_url.substring(0, 20)}...` : data.video_url}</td>
                      <td className="px-6 py-4 whitespace-nowrap justify-center text-sm font-medium">
                        <button type="button" className="primary-btn mr-2">Approval</button>
                        <button type="button" className="primary-btn ml-2">Disapproval</button>
                      </td>
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

export default Permissions