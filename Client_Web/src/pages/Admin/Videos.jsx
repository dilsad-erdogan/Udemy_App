import AdminPageNavbar from "../../components/Navbar/AdminPageNavbar"
import { useDispatch, useSelector } from "react-redux"
import { deleteVideo, fetchVideos } from "../../redux/videoSlice";
import { useEffect } from "react";
import { fetchUsers } from "../../redux/userSlice";
import { MdDelete } from "react-icons/md";

const Videos = () => {
  const dispatch = useDispatch();
  const videos = useSelector(state => state.video.videos);
  const users = useSelector(state => state.user.users);

  useEffect(() => {
    dispatch(fetchVideos());
    dispatch(fetchUsers());
  }, [dispatch]);

  const getTeacherName = (teacherId) => {
    const teacher = users?.data?.find(t => t._id === teacherId);
    return teacher ? teacher.name : "Unknown Teacher";
  };
  
  const videoDelete = async (data) => {
    await dispatch(deleteVideo(data));
    dispatch(fetchVideos());
  };

  return (
    <main className="overflow-x-hidden bg-white text-dark">
      <AdminPageNavbar />

      <div className="py-24 flex justify-center text-center">
        <div className="w-full overflow-x-auto">
          <table className="w-11/12 max-w-4xl mx-auto">
            <thead className="border-b-2 border-black">
              <tr>
                <th scope="col" className="p-3 text-sm font-bold items-center mt-5">Title</th>
                <th scope="col" className="p-3 text-sm font-bold items-center mt-5">Description</th>
                <th scope="col" className="p-3 text-sm font-bold items-center mt-5">Teacher</th>
                <th scope="col" className="p-3 text-sm font-bold items-center mt-5">Price</th>
                <th scope="col" className="p-3 text-sm font-bold items-center mt-5">Video Png</th>
                <th scope="col" className="p-3 text-sm font-bold items-center mt-5">Video Url</th>
                <th scope="col" className="p-3 text-sm font-bold items-center mt-5">Delete</th>
              </tr>
            </thead>
            
            <tbody className="divide-y divide-black">
              {videos?.data?.map((data) => (
                <tr key={data._id}>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">{data.title}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">{data.description.length > 20 ? `${data.description.substring(0, 20)}...` : data.description}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">{getTeacherName(data.teacher_id)}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">{data.price}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">{data.video_png.length > 20 ? `${data.video_png.substring(0, 20)}...` : data.video_png}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">{data.video_url.length > 20 ? `${data.video_url.substring(0, 20)}...` : data.video_url}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-2xl">
                    <MdDelete onClick={() => videoDelete(data._id)} />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </main>
  )
}

export default Videos