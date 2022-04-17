import React from "react";
import "../components/userlist.css";
import { useSelector, useDispatch } from "react-redux";
import { ProfileHover, ProfileHoverLeave ,DeleteItem } from "../redux/actions/action";
import CardHover from "./CardHover";
import { Lock, Trash2 } from "react-feather";
 /* userlist will show user data coming from reducer as intial state data 
  in table format and on hover dispatch 2 method onMouseEnter and onMouseLeave */
const UserList = () => {
  const UserList = useSelector((state) => state.users);
  const selectedid = useSelector((state) => state.selectedid);
  const Dispatch = useDispatch();

  return (
    <div>
      <div className="container1">
        <div className="container-table">
          <table className="table table-borderless table-responsive  ">
            <thead>
              <tr>
                <th>Name</th>
                <th>Status</th>
                <th>Access</th>
              </tr>
            </thead>
            <tbody>
              {UserList &&
                UserList.map((user) => (
                  <tr key={user.id}>
                    <td>
                      <div
                        onMouseEnter={() => Dispatch(ProfileHover(user.id))}
                        onMouseLeave={() => Dispatch(ProfileHoverLeave())}
                        className="nameandimage"
                      >
                        <img
                          className="imageround"
                          src={user.image}
                          width="50"
                          height="50"
                        ></img>
                        <div className="username">
                          {user.firstName} <br></br> {user.email}
                        </div>
                      </div>
                    </td>

                    <td>
                      {user.isActive ? (
                        <div className="activeclass">Active</div>
                      ) : (
                        <select className="dropdwonactive">
                          <option value="option 1">Inactive</option> {" "}
                          <option value="option 2">Active</option>
                        </select>
                      )}
                    </td>
                    <td>
                      {user.isActive ? (
                        <div className="ownerclass">Owner</div>
                      ) : (
                        <select className="dropdwonrole">
                            <option value="option 1">Manager</option>
                          <option value="option 2">Read</option>
                        </select>
                      )}
                    </td>

                    <td>
                      {user.isActive ? (
                        <i className="locksymbol">
                          <Lock />
                        </i>
                      ) : (
                        <i className="deleteicon"  onClick  ={()=> Dispatch(DeleteItem(user.id))}>
                          <Trash2 />
                        </i>
                        
                      )}
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
       
        {selectedid && <CardHover />}
      </div>
    </div>
  );
};

export default UserList;
