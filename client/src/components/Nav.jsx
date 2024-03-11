import {Link} from "react-router-dom";
 
export default function Nav(){
  return(
    <div className="flex bg-black text-white">
        <div className="justify-start p-4">Travel Site</div>

        <div className="flex mx-auto">
            <Link to="/">
                <div className="p-4">Discover</div>
            </Link>
            <Link to="/about">
                <div className="p-4">About</div>
            </Link>
        </div>
        <div>
            <Link to="/account">
                <div className="p-5 bg-gray-600 rounded-full m-2" ></div>
            </Link>
          </div>
    </div>

  )
}

