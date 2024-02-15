import React from 'react'
import { Link } from 'react-router-dom'
import ScrollToTop from '../../UI/ScrollToTop'

const ITHalls = () => {
    return (
        <div>
            <ScrollToTop />
            <div className="w-[561px] h-[81px] absolute top-12 left-[500px]  bg-[#0060E4] border
        rounded-3xl text-white text-center font-['Poppins'] text-5xl font-bold p-3 border-[#0060E4]">
                المدرجات
            </div>
            <img src="images/ITHalls/undraw_Programmer_re_owql 1.png" className="absolute top-[200px] left-[520px]" />
            <div className="h-screen mb-28">
                <div className="w-[352px] h-[479px] absolute mb-[272px]">
                    <div className="w-[370px] h-[79px] absolute top-[190px] left-[235px] bg-[#00439F] border
                rounded-3xl text-white text-center font-['Poppins'] text-5xl font-bold p-3 border-[#00439F]">
                        مدرج 2
                    </div>
                    <div className="w-[370px] h-[79px] absolute top-[330px] left-[235px] bg-[#00439F] border
                rounded-3xl text-white text-center font-['Poppins'] text-5xl font-bold p-3 border-[#00439F]">
                        مدرج 4
                    </div>
                    <div className="w-[370px] h-[79px] absolute top-[470px] left-[235px] bg-[#00439F] border
                rounded-3xl text-white text-center font-['Poppins'] text-5xl font-bold p-3 border-[#00439F]">
                        مدرج 6
                    </div>
                    <div className="w-[370px] h-[79px] absolute top-[610px] left-[235px] bg-[#00439F] border
                rounded-3xl text-white text-center font-['Poppins'] text-5xl font-bold p-3 border-[#00439F]">
                        مدرج 8
                    </div>
                </div>
                <div className="w-[352px] h-[479px] absolute mb-[272px] right-[443px]">
                    <div className="w-[370px] h-[79px] absolute top-[190px] left-[235px] bg-[#00439F] border
                rounded-3xl text-white text-center font-['Poppins'] text-5xl font-bold p-3 border-[#00439F]">
                        مدرج 1
                    </div>
                    <div className="w-[370px] h-[79px] absolute top-[330px] left-[235px] bg-[#00439F] border
                rounded-3xl text-white text-center font-['Poppins'] text-5xl font-bold p-3 border-[#00439F]">
                        مدرج 3
                    </div>
                    <Link to={"itHallsDevices5"}>
                        <div className="w-[370px] h-[79px] absolute top-[470px] left-[235px] bg-[#00439F] border
                rounded-3xl text-white text-center font-['Poppins'] text-5xl font-bold p-3 border-[#00439F]">
                            مدرج 5
                        </div>
                    </Link>
                    <div className="w-[370px] h-[79px] absolute top-[610px] left-[235px] bg-[#00439F] border
                rounded-3xl text-white text-center font-['Poppins'] text-5xl font-bold p-3 border-[#00439F]">
                        مدرج 7
                    </div>
                </div>
                <div className="w-[561px] h-[79px] absolute top-[720px] left-[500px]  bg-[#00439F] border
            rounded-3xl text-white text-center font-['Poppins'] text-5xl font-bold p-4 border-[#00439F]">
                    مدرج 9
                </div>
            </div>
        </div>
    )
}

export default ITHalls