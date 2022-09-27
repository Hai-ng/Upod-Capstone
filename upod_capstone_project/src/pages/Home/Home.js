import React, { useEffect } from 'react'
import HomeCarousel from '../../templates/HomeTemplate/Layout/HomeCarousel/HomeCarousel';

import { useDispatch, useSelector } from 'react-redux'
import { callApi_getListDeviceType } from '../../redux/actions/QuanLyDeviceTypeAction';

import { Fragment } from 'react'
import Slider from "react-slick";

export default function Home() {

    const { arrDeviceType } = useSelector(state => state.QuanLyDeviceTypeReducer);

    const dispatch = useDispatch();

    // console.log("list device type name", arrDeviceType);

    useEffect(() => {
        const action = callApi_getListDeviceType();
        dispatch(action);
    }, [])

    console.log("ar device type:", arrDeviceType);

    const renderDeviceType = () => {
        return arrDeviceType.map((dtype, index) => {
            return <div key={index}>
                <p>
                    {dtype.device_type_name}
                </p>
                <p>
                    {dtype.desciption}
                </p>
                <p>
                    {dtype.create_date}
                </p>
            </div>
        })
    }


    return (
        <div>
            {/* {renderDeviceType()} */}
            <HomeCarousel />
            <h1 className="text-5xl font-bold underline">
                UPOD
            </h1>
            <div className="flex">
                <nav className="w-32 flex flex-col items-center h-screen bg-teal">
                    <div className="my-4 w-24 pb-4 border-b border-teal-lighter text-center">
                        <a href="#" className="no-underline font-semibold block text-red-400">
                            <span className="block text-teal-lighter">
                                <svg width={24} height={24} viewBox="0 0 24 24">
                                    <path d="M10,20V14H14V20H19V12H22L12,3L2,12H5V20H10Z" />
                                </svg>
                            </span>
                            Home
                        </a>
                    </div>
                    <div className="mx-auto">
                        <Slider>
                            {renderDeviceType()}
                        </Slider>


                    </div>
                    <div className="my-4 w-24 pb-4 border-b border-teal-lighter text-center">
                        <a href="#" className="no-underline block text-teal-lighter hover:text-red-400">
                            <span className="block text-teal-dark">
                                <svg width={24} height={24} viewBox="0 0 24 24">
                                    <path d="M12,4A4,4 0 0,1 16,8A4,4 0 0,1 12,12A4,4 0 0,1 8,8A4,4 0 0,1 12,4M12,14C16.42,14 20,15.79 20,18V20H4V18C4,15.79 7.58,14 12,14Z" />
                                </svg>
                            </span>
                            Profile
                        </a>
                    </div>
                    <div className="my-4 w-24 pb-4 border-b border-teal-lighter text-center">
                        <a href="#" className="no-underline block text-teal-lighter hover:text-red-400">
                            <span className="block text-teal-dark">
                                <svg width={24} height={24} viewBox="0 0 24 24">
                                    <path d="M11.5,22C11.64,22 11.77,22 11.9,21.96C12.55,21.82 13.09,21.38 13.34,20.78C13.44,20.54 13.5,20.27 13.5,20H9.5A2,2 0 0,0 11.5,22M18,10.5C18,7.43 15.86,4.86 13,4.18V3.5A1.5,1.5 0 0,0 11.5,2A1.5,1.5 0 0,0 10,3.5V4.18C7.13,4.86 5,7.43 5,10.5V16L3,18V19H20V18L18,16M19.97,10H21.97C21.82,6.79 20.24,3.97 17.85,2.15L16.42,3.58C18.46,5 19.82,7.35 19.97,10M6.58,3.58L5.15,2.15C2.76,3.97 1.18,6.79 1,10H3C3.18,7.35 4.54,5 6.58,3.58Z" />
                                </svg>
                            </span>
                            Notifications
                        </a>
                    </div>
                </nav>
            </div>
        </div>
    )
}
