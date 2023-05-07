import { FcPlus } from "react-icons/fc";
import TableUser from "./TableUser";
import "./ManageUser.scss";
import { useEffect, useState } from "react";
import { getAllUsers } from "../../../services/apiServices";
import ModalCreateUser from "./ModalCreateUser";
import ModalUpdateUser from "./ModalUpdateUser";
import ModalViewUser from "./ModalViewUser";
import ModalDeleteUser from "./ModalDeleteUser";

const ManageUser = (props) => {
    const [showModalCreateUser, setShowModalCreateUser] = useState(false);
    const [showModalUpdateUser, setShowModalUpdateUser] = useState(false);
    const [showModalViewUser, setShowModalViewUser] = useState(false);
    const [showModalDeleteUser, setShowModalDeleteUser] = useState(false);

    const [listUsers, setListUsers] = useState([]);
    const [dataUpdate, setDataUpdate] = useState({});
    const [dataView, setDataView] = useState({});
    const [dataDelete, setDataDelete] = useState({});

    useEffect(() => {
        fetchListUsers();
    }, []);

    const fetchListUsers = async () => {
        const data = await getAllUsers();
        if (data && data.EC === 0) {
            setListUsers(data.DT);
        }
    };

    const handleUpdateUser = (user) => {
        setShowModalUpdateUser(true);
        setDataUpdate(user);
    };

    const handleViewUser = (user) => {
        setShowModalViewUser(true);
        setDataView(user);
    };

    const handleDeleteUser = (user) => {
        setShowModalDeleteUser(true);
        setDataDelete(user);
    };

    const resetDataUpdate = () => {
        setDataUpdate({});
    };

    const resetDataView = () => {
        setDataView({});
    };

    return (
        <>
            <div className="manage-user-container">
                <h5>Manage User</h5>
                <div className="user-content">
                    <div>
                        <button
                            className="btn btn-primary btn-add-new"
                            onClick={() => setShowModalCreateUser(true)}
                        >
                            <FcPlus /> Add new users
                        </button>
                    </div>
                    <div>
                        <TableUser
                            listUsers={listUsers}
                            handleUpdateUser={handleUpdateUser}
                            handleViewUser={handleViewUser}
                            handleDeleteUser={handleDeleteUser}
                        />
                    </div>
                    <ModalCreateUser
                        show={showModalCreateUser}
                        setShow={setShowModalCreateUser}
                        fetchListUsers={fetchListUsers}
                    />
                    <ModalUpdateUser
                        show={showModalUpdateUser}
                        setShow={setShowModalUpdateUser}
                        dataUpdate={dataUpdate}
                        resetDataUpdate={resetDataUpdate}
                        fetchListUsers={fetchListUsers}
                    />
                    <ModalViewUser
                        show={showModalViewUser}
                        setShow={setShowModalViewUser}
                        dataView={dataView}
                        resetDataView={resetDataView}
                    />
                    <ModalDeleteUser
                        show={showModalDeleteUser}
                        setShow={setShowModalDeleteUser}
                        dataDelete={dataDelete}
                        fetchListUsers={fetchListUsers}
                    />
                </div>
            </div>
        </>
    );
};

export default ManageUser;
