import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowDown, faArrowsUpDown, faArrowUp, faFilter, faSearch, faShuffle, faUpDown, faUpload } from "@fortawesome/free-solid-svg-icons";
import Progresscircle from "./Progressbar";
import "../css/Searchbar.css";
const Searchbar=()=>{
    return(
        <>
            <div className="main_searchcontainer">
                <div className="actual_searchbar">
                    <div className="searchbar_item">
                        <FontAwesomeIcon icon={faSearch}/> <input className="input_bar" type="search" name="" id="" placeholder="Search questions" />
                    </div>
                    <div className="searchbar_item"><FontAwesomeIcon icon={faArrowUp}/> <FontAwesomeIcon icon={faArrowDown}/></div>
                    <div className="searchbar_item"><FontAwesomeIcon icon={faFilter}/></div>
                </div>
                <div className="problemSolved">
                    <Progresscircle solved={600} total={3586}/>
                    <p className="text_cont">600/3586 Solved</p>
                    <FontAwesomeIcon icon={faShuffle}/>
                </div>
            </div>
        </>
    );
}
export default Searchbar;