const Header = () => {
    return (
        <header className="bg-blue-100 h-12 md:h-20">
            <div className="max-w-screen-xl mx-auto h-full flex justify-between items-center">
                <div>juhyeok's Portfolio</div>
                {/* <div>
                        <img className="w-20" src={youtube} alt="youtube" />
                    </div> */}
                <ul className="flex gap-2 md:gap-8 text-xs sm:text-sm md:text-base">
                    <li className="bg-indigo-400 btn-style">Introduce</li>
                    <li className="bg-purple-400 btn-style">Portfolio</li>
                    <li className="bg-blue-400 btn-style">Contact Me</li>
                </ul>
            </div>
        </header>
    );
};

export default Header;
