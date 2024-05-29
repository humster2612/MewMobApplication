//это если что классовая компонента 
import React, { useEffect } from "react";
import styles from './users.module.css';
import axios from "axios";
import userPhoto from '../../assets/images/60af1abf02c8c-bpfull.jpg';

class Users extends React.Component{
    componentDidMount(){
      axios.get("https://social-network.samuraijs.com/api/1.0/users")
      .then(response =>{
      this.props.setUsers(response.data.items);        
      })
    }
    
    render(){
      return (
          <div>
      
          <button onClick={this.getUsers}>Get Users</button>
      
            {this.props.users && this.props.users.map(u => (
              <div key={u.id}>
                <span>
                  <div>
                    <img src={u.photos.small !=null ? u.photos.small:userPhoto} className={styles.userPhoto} />
                  </div>
                  <div>
                    {u.followed
                      ? <button onClick={() => { this.props.unfollow(u.id) }}>Unfollow</button>
                      : <button onClick={() => { this.props.follow(u.id) }}>Follow</button>}
                  </div>
                </span>
                <span>
                  <span>
                    <div>{u.fullName}</div>
                    <div>{u.status}</div>
                  </span>
                  <span>
                    <div>{"u.location.country"}</div>
                    <div>{"u.location.city"}</div>
                  </span>
                </span>
              </div>
            ))}
          </div>
      )
  }
}
                

      
       



// Пустой массив зависимостей означает, что useEffect вызывается только при монтировании компонента

// useEffect(() => {
// getUsers();
// }, []);


    


export default Users;
