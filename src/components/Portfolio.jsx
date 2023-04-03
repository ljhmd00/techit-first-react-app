import PortfolioCard from "./PortfolioCard";
import projectData from "../projectData.json";

const Portfolio = () => {
    return (
        <ul className="bg-indigo-100 max-w-screen-xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 justify-items-center gap-8 py-8">
            {projectData.map((v, i) => {
                return (
                    <PortfolioCard
                        key={i}
                        projectImg={v.projectImg}
                        projectTitle={v.projectTitle}
                        projectContents={v.projectContents}
                    />
                );
            })}
        </ul>
    );
};

export default Portfolio;
