import React from 'react'
import  '../components/userlist.css';
import { useSelector, useDispatch} from 'react-redux';
import {ProfileHover} from '../redux/actions/action'


const UserList = () => {

    const UserList  = useSelector((state) =>state.users)
    const Dispatch = useDispatch();
  return (
    <div>
       <div className="container">
          
            <table className="table table-borderless table-responsive w-100 ">
                <thead>
                    <tr >
                        <th >Name</th>
                        <th>Status</th>
                        <th>Access</th>
                        
                    </tr>
                </thead>
                <tbody>
                    {UserList && UserList.map(user =>
                        <tr key={user.id}>
                            <td ><div  onMouseEnter={() => Dispatch(ProfileHover(user.id))} className="nameandimage"><img  className="imageround" src={user.image} width="50" height="50"></img><div className="username">{user.firstName} <br></br> {user.email}</div></div></td>
                            <td> <select className="dropdwonactive">
                            <option value="option 1">Inactive</option>
                            <option value="option 2">Active</option>
                            </select></td>
                            <td><select className="dropdwonrole">
                            <option value="option 1">Manager</option>
                            <option value="option 2">Owner</option>
                            <option value="option 2">Read</option>
                            </select></td>
                           <td><i className="bi bi-trash deleteicon"></i></td> 
                        </tr>
                    )}
                </tbody>
                {console.log(useSelector((state) =>state.selectedid))}
            </table>

        
    </div>
    </div>
  )
}

export default UserList
