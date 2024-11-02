import { useEffect } from "react";
import AdminPageNavbar from "../../components/Navbar/AdminPageNavbar"
import { useDispatch, useSelector } from "react-redux"
import { fetchUsers } from "../../redux/userSlice";

const Users = () => {
  const dispatch = useDispatch();
  const users = useSelector(state => state.user.users);

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  const userEdit = (data) => {console.log(data)};
  const userDelete = (data) => {console.log(data)};

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
                    <th scope="col" className="px-6 py-3 text-start text-s font-medium uppercase">Name</th>
                    <th scope="col" className="px-6 py-3 text-start text-s font-medium uppercase">Email</th>
                    <th scope="col" className="px-6 py-3 text-start text-s font-medium uppercase">Role</th>
                    <th scope="col" className="px-6 py-3 text-start text-s font-medium uppercase">Edit</th>
                    <th scope="col" className="px-6 py-3 text-start text-s font-medium uppercase">Delete</th>
                  </tr>
                </thead>
            
                <tbody className="divide-y divide-black">
                  {users?.data?.map((data) => (
                    <tr key={data._id}>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">{data.name}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">{data.email}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">{data.role}</td>
                      <td className="px-6 py-4 whitespace-nowrap justify-center text-sm font-medium">
                        <button type="button" className="primary-btn" onClick={() => userEdit(data._id)}>Edit</button>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap justify-center text-sm font-medium">
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

export default Users