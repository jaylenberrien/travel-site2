import {Link} from "react-router-dom";
import { useLogout } from "../hooks/useLogout";
 
export default function Nav(){
  return(
    <div className="flex bg-black text-white">
      <div className="justify-start p-4">Travel Site</div>

      <div className="flex mx-auto">
          <Link to="/search">
              <div className="p-4">Discover</div>
          </Link>
          <Link to="/about">
              <div className="p-4">About</div>
          </Link>
      </div>
      <div class='drop-container' >  
        <div className="p-5 bg-gray-600 rounded-full m-2" ></div>
        <div class='drop-menu'>  
          <div class='drop-container'>
            <Link to='/account'>
              <div>Account</div>
            </Link>  
          </div>
          <div class='drop-container'>
            <div onClick={useLogout()}>Logout</div>
          </div>
        </div>
      </div>

      
    </div>

  )
}

