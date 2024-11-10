import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchRoles } from "../../redux/roleSlice";
import { updateUserRole } from "../../redux/userSlice";
import { useNavigate } from "react-router-dom";

const UserEdit = ({ id }) => {
    const dispatch = useDispatch();
    const roles = useSelector(state => state.role.roles);
    const [selectedRole, setSelectedRole] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        dispatch(fetchRoles());
    }, [dispatch]);

    const handleSubmit = (e) => {
        e.preventDefault();
        const newRole = {
            role: selectedRole
        };

        dispatch(updateUserRole({id: id, data: newRole}));
        navigate('/admin');
    };

    if (!roles) return <div>Loading...</div>;

    return (
        <div className="container mx-auto py-8 px-4 md:px-16 lg:px-24">
          <form onSubmit={handleSubmit} className="mt-5">
            <div className="flex flex-col p-4 space-y-4">
              <label className="block text-xl font-semibold mb-2">Select Role</label>
              
              {roles?.data?.map((role) => (
                <div key={role._id} className="flex items-center space-x-2">
                    <input type="radio" id={role._id} name="role" value={role._id} checked={selectedRole === role._id} onChange={() => setSelectedRole(role._id)} />
                    <label htmlFor={role._id} className="text-xl">{role.name}</label>
                </div>
              ))}

              <button type="submit" className="primary-btn max-w-[250px]">Update Role</button>
            </div>
          </form>
        </div>
    );
}

export default UserEdit;