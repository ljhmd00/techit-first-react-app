import { Link } from "react-router-dom";

function ProjectModal(props) {
    return (
        <div className="h-screen w-full fixed left-0 top-0 flex justify-center items-center bg-black bg-opacity-70 text-center">
            <div className="bg-white rounded min-w-[400px]">
                <div className="border-b px-4 py-2 flex justify-center items-center ">
                    <ul className="flex-col justify-center items-center ">
                        <li className="w-[300px]">
                            <img src={props.projectImg} alt="projectImg" />
                        </li>
                        <li>{props.projectTitle}</li>
                        <li>{props.projectContents}</li>
                        <Link to="/">
                            <button className="mt-5 bg-red-400 px-3 py-1 rounded-lg">닫기</button>
                        </Link>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default ProjectModal;
