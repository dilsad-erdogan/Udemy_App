import { useEffect, useState } from "react";
import AdminPageNavbar from "../../components/Navbar/AdminPageNavbar"
import { useDispatch, useSelector } from "react-redux"
import { deleteUser, fetchUsers } from "../../redux/userSlice";
import Modal from "../../components/Modal";
import UserEdit from "../../components/Edits/UserEdit";
import { MdOutlineEditCalendar, MdDelete } from "react-icons/md";

const Users = () => {
  const dispatch = useDispatch();
  const users = useSelector(state => state.user.users);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedUser, setSelectedUser] = useState('');

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  const userEdit = (data) => {
    setSelectedUser(data);
    setIsModalOpen(true);
  };

  const userDelete = async (userId) => {
    await dispatch(deleteUser(userId));
    dispatch(fetchUsers());
  };

  return (
    <main className="overflow-x-hidden bg-white text-dark">
      <AdminPageNavbar />

      <div className="py-24 flex justify-center text-center">
        <div className="w-full overflow-x-auto">
          <table className="w-11/12 max-w-4xl mx-auto">
            <thead className="border-b-2 border-black">
              <tr>
                <th scope="col" className="p-3 text-sm font-bold items-center mt-5">Name</th>
                <th scope="col" className="p-3 text-sm font-bold items-center mt-5">Email</th>
                <th scope="col" className="p-3 text-sm font-bold items-center mt-5">Role</th>
                <th scope="col" className="p-3 text-sm font-bold items-center mt-5">Actions</th>
              </tr>
            </thead>
            
            <tbody className="divide-y divide-black">
              {users?.data?.map((data) => (
                <tr key={data._id}>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">{data.name}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">{data.email}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">{data.role === "67227987d6d3c54d653c3826" ? <span>Student</span> : (data.role === "67227a6ed6d3c54d653c3830" ? <span>Teacher</span> : <span>Admin</span>)}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-2xl flex justify-center gap-2">
                    <MdOutlineEditCalendar onClick={() => userEdit(data._id)} />
                    <MdDelete onClick={() => userDelete(data._id)} />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <Modal isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen}>
          <UserEdit id={selectedUser}/>
      </Modal>
    </main>
  )
}

export default Users