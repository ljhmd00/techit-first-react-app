import { Link } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import ProjectModal from "./ProjectModal";

const PortfolioCard = (props) => {
    return (
        <div>
            <li className="bg-purple-200 w-60 h-72 rounded-xl text-center">
                <div className="bg-yellow-100 w-full h-1/2 object-cover rounded-t-xl flex justify-center">
                    <img className="items-center w-full" src={props.projectImg} alt="projectImg" />
                </div>
                <div className="text-xl font-bold mt-2 mx-2">{props.projectTitle}</div>
                <div className="mt-2 mx-2">{props.projectContents}</div>
                <Link to={`/project${props.projectNum}`}>
                    <button className="mt-8 bg-red-400 rounded-md p-2">프로젝트 보기</button>
                </Link>
            </li>
            <Routes>
                <Route
                    path={`/project${props.projectNum}`}
                    element={
                        <ProjectModal
                            projectImg={props.projectImg}
                            projectTitle={props.projectTitle}
                            projectContents={props.projectContents}
                            projectNum={props.projectNum}
                        />
                    }
                ></Route>
            </Routes>
        </div>
    );
};
export default PortfolioCard;
