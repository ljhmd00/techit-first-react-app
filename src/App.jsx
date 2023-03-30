// import youtube from "./images/youtube.png";

function App() {
    return (
        <div className="bg-red-100 min-h-screen">
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
            <main>
                {/* Introduce */}
                <div className="bg-green-100 max-w-screen-xl mx-auto h-96 flex justify-center items-center">
                    소개하는 내용
                </div>
                <ul className="bg-indigo-100 max-w-screen-xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 justify-items-center gap-8 py-8">
                    <li className="bg-purple-200 w-60 h-72 rounded-xl">
                        <div className="bg-yellow-100 w-full h-1/2 object-cover rounded-t-xl">
                            프로젝트 이미지
                        </div>
                        <div className="text-xl font-bold mt-2 mx-2">프로젝트 제목</div>
                        <div className="mt-2 mx-2">프로젝트 간략한 설명</div>
                    </li>
                    <li className="bg-purple-200 w-60 h-72 rounded-xl">
                        <div className="bg-yellow-100 w-full h-1/2 object-cover rounded-t-xl">
                            프로젝트 이미지
                        </div>
                        <div className="text-xl font-bold mt-2 mx-2">프로젝트 제목</div>
                        <div className="mt-2 mx-2">프로젝트 간략한 설명</div>
                    </li>
                    <li className="bg-purple-200 w-60 h-72 rounded-xl">
                        <div className="bg-yellow-100 w-full h-1/2 object-cover rounded-t-xl">
                            프로젝트 이미지
                        </div>
                        <div className="text-xl font-bold mt-2 mx-2">프로젝트 제목</div>
                        <div className="mt-2 mx-2">프로젝트 간략한 설명</div>
                    </li>
                    <li className="bg-purple-200 w-60 h-72 rounded-xl">
                        <div className="bg-yellow-100 w-full h-1/2 object-cover rounded-t-xl">
                            프로젝트 이미지
                        </div>
                        <div className="text-xl font-bold mt-2 mx-2">프로젝트 제목</div>
                        <div className="mt-2 mx-2">프로젝트 간략한 설명</div>
                    </li>
                    <li className="bg-purple-200 w-60 h-72 rounded-xl">
                        <div className="bg-yellow-100 w-full h-1/2 object-cover rounded-t-xl">
                            프로젝트 이미지
                        </div>
                        <div className="text-xl font-bold mt-2 mx-2">프로젝트 제목</div>
                        <div className="mt-2 mx-2">프로젝트 간략한 설명</div>
                    </li>
                    <li className="bg-purple-200 w-60 h-72 rounded-xl">
                        <div className="bg-yellow-100 w-full h-1/2 object-cover rounded-t-xl">
                            프로젝트 이미지
                        </div>
                        <div className="text-xl font-bold mt-2 mx-2">프로젝트 제목</div>
                        <div className="mt-2 mx-2">프로젝트 간략한 설명</div>
                    </li>
                    <li className="bg-purple-200 w-60 h-72 rounded-xl">
                        <div className="bg-yellow-100 w-full h-1/2 object-cover rounded-t-xl">
                            프로젝트 이미지
                        </div>
                        <div className="text-xl font-bold mt-2 mx-2">프로젝트 제목</div>
                        <div className="mt-2 mx-2">프로젝트 간략한 설명</div>
                    </li>
                    <li className="bg-purple-200 w-60 h-72 rounded-xl">
                        <div className="bg-yellow-100 w-full h-1/2 object-cover rounded-t-xl">
                            프로젝트 이미지
                        </div>
                        <div className="text-xl font-bold mt-2 mx-2">프로젝트 제목</div>
                        <div className="mt-2 mx-2">프로젝트 간략한 설명</div>
                    </li>
                </ul>
                <div className="bg-gray-100 max-w-screen-xl mx-auto h-96 flex justify-center items-center">
                    내연락처
                </div>
            </main>
            <footer className="max-x-screen-xl mx-auto flex justify-end py-1 md:py-2">
                2023. Designed by, lee
            </footer>
        </div>
    );
}

export default App;
