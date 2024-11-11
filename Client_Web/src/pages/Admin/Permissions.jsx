import { useEffect } from "react";
import AdminPageNavbar from "../../components/Navbar/AdminPageNavbar"
import { useDispatch, useSelector } from "react-redux"
import { fetchPermissions, updatePermission } from "../../redux/permissionSlice";
import { addVideo } from "../../redux/videoSlice";
import { fetchUsers } from "../../redux/userSlice";
import { FcApproval, FcHighPriority, FcCancel } from "react-icons/fc";

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

  const approval = async (data) => {
    const newPermission = {
      permission_status: true
    };

    const newVideo = {
      teacher_id: data.user_id,
      title: data.title,
      description: data.description,
      video_png: data.video_png,
      video_url: data.video_url,
      price: data.price
    };

    await dispatch(updatePermission({id: data._id, data: newPermission}));
    await dispatch(addVideo(newVideo));
    dispatch(fetchPermissions());
  };

  const disapproval = async (id) => {
    const newPermission = {
      permission_status: false
    };

    await dispatch(updatePermission({id: id, data: newPermission}));
    dispatch(fetchPermissions());
  };

  return (
    <main className="overflow-x-hidden bg-white text-dark">
      <AdminPageNavbar />

      <div className="py-24 flex justify-center text-center">
        <div className="w-full overflow-x-auto">
          <table className="w-11/12 max-w-4xl mx-auto">
            <thead className="border-b-2 border-black">
              <tr>
                <th scope="col" className="p-3 text-sm font-medium items-center mt-5">Status</th>
                <th scope="col" className="p-3 text-sm font-medium items-center mt-5">User</th>
                <th scope="col" className="p-3 text-sm font-medium items-center mt-5">Title</th>
                <th scope="col" className="p-3 text-sm font-medium items-center mt-5">Description</th>
                <th scope="col" className="p-3 text-sm font-medium items-center mt-5">Price</th>
                <th scope="col" className="p-3 text-sm font-medium items-center mt-5">Video Png</th>
                <th scope="col" className="p-3 text-sm font-medium items-center mt-5">Video Url</th>
                <th scope="col" className="p-3 text-sm font-medium items-center mt-5">Permission Status</th>
              </tr>
            </thead>
              
            <tbody className="divide-y divide-black">
              {permissions?.data?.map((data) => (
                <tr key={data._id}>
                  <td className="px-6 py-4 whitespace-nowrap text-2xl">{data.permission_status === true ? (<FcApproval />) : (data.permission_status === false ? (<FcHighPriority />) : (<FcCancel />))}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">{getUserName(data.user_id)}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">{data.title}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">{data.description.length > 20 ? `${data.description.substring(0, 20)}...` : data.description}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">{data.price}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">{data.video_png.length > 20 ? `${data.video_png.substring(0, 20)}...` : data.video_png}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">{data.video_url.length > 20 ? `${data.video_url.substring(0, 20)}...` : data.video_url}</td>
                  {data.permission_status !== null ? (
                    <td className="px-6 py-4 whitespace-nowrap justify-center text-sm font-medium">
                      <button type="button" className="disabled-btn" disabled>Approval</button>
                      <button type="button" className="disabled-btn" disabled>Disapproval</button>
                    </td>
                  ) : (
                    <td className="px-6 py-4 whitespace-nowrap justify-center text-sm font-medium">
                      <button type="button" className="primary-btn mr-2" onClick={() => approval(data)}>Approval</button>
                      <button type="button" className="primary-btn ml-2" onClick={() => disapproval(data._id)}>Disapproval</button>
                    </td>
                  )}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </main>
  )
}

export default Permissions