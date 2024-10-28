import AdminPageNavbar from "../../components/Navbar/AdminPageNavbar"
import { useSelector } from "react-redux"

const userEdit = (data) => {console.log(data)};
const userDelete = (data) => {console.log(data)};

const Permissions = () => {
  const videos = useSelector(state => state.video);

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
                    <th scope="col" className="px-6 py-3 text-start text-s font-medium uppercase">Title</th>
                    <th scope="col" className="px-6 py-3 text-start text-s font-medium uppercase">Description</th>
                    <th scope="col" className="px-6 py-3 text-start text-s font-medium uppercase">Teacher</th>
                    <th scope="col" className="px-6 py-3 text-start text-s font-medium uppercase">Price</th>
                    <th scope="col" className="px-6 py-3 text-start text-s font-medium uppercase">Video Png</th>
                    <th scope="col" className="px-6 py-3 text-start text-s font-medium uppercase">Video Url</th>
                    <th scope="col" className="px-6 py-3 text-start text-s font-medium uppercase">Edit</th>
                    <th scope="col" className="px-6 py-3 text-start text-s font-medium uppercase">Delete</th>
                  </tr>
                </thead>
            
                <tbody className="divide-y divide-black">
                  {videos.videos.map((data) => (
                    <tr key={data._id}>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">{data.title}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">{data.description}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">{data.teacher}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">{data.price}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">{data.videoPng}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">{data.videoUrl}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-end text-sm font-medium">
                        <button type="button" className="primary-btn" onClick={() => userEdit(data._id)}>Edit</button>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-end text-sm font-medium">
                        <button type="button" className="primary-btn" onClick={() => userDelete(data._id)}>Delete</button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            
              <div className="flex justify-end mt-4">
                <button className="primary-btn">Add</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}

export default Permissions