import {Link} from "react-router-dom";

export default function Nav(){
    return(
        <div className="flex">
            <div className="justify-start">Travel Site</div>
            <div className="flex center">
                
                <Link to="/">
                    <div className="p-4">Home</div>
                </Link>
                <Link to="/about">
                    <div className="p-4">About</div>
                </Link>
            </div>
            <div className="bg-blue-400"></div>
        </div>

    )
}