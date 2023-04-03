const PortfolioCard = (props) => {
    return (
        <li className="bg-purple-200 w-60 h-72 rounded-xl">
            <div className="bg-yellow-100 w-full h-1/2 object-cover rounded-t-xl">
                {props.projectImg}
            </div>
            <div className="text-xl font-bold mt-2 mx-2">{props.projectTitle}</div>
            <div className="mt-2 mx-2">{props.projectContents}</div>
        </li>
    );
};
export default PortfolioCard;
