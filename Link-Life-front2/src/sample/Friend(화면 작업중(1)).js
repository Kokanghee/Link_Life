import React from "react";
import NavbarFull_onlyFriend from "./NavbarFull_onlyFriend";

import { useState } from "react";
import { FiPlusCircle } from "react-icons/fi";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";

import Modal from "./Modal";
import Tabs from "./Tabs";
import picture_hoon from "../images/hoon.jpg";

const Friend = () => {
  // modal을 위한 state
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      <div
        className=""
        style={{
          minHeight: "900px", // 배경 크기(최소 높이)
        }}
      >
        {/* 친구 화면 왼쪽(left)&오른쪽(right)로 나누기 위한 flex */}
        <div className="flex">
          {/* 0. 친구 화면 - 왼쪽(left) 영역 -> 인물소개, 타임라인 */}
          <div className="w-full h-screen">
            {/* 0. 제목(Title) - 친구 */}
            <div className="py-8 px-11">
              <h1 className="text-3xl font-bold text-black">친구</h1>
            </div>

            {/* ******* 친구 리스트 (가로 한세트 start) ******** */}
            <div
              className="flex h-full hover:bg-blue-100"
              style={{
                height: "130px",
                padding: "15px 0px 15px 0px",
                margin: "0px 30px",
                borderBottom: "1px solid #cfcfcf",
              }}
            >
              {/* 1. 인물 소개(이름, 서버시간부터 가장 가까운 일정 및 시간) */}
              <div
                className="flex"
                style={{
                  width: "380px",
                  height: "100px",
                  marginLeft: "14px",
                  backgroundColor: "white",
                }}
              >
                {/* 사진 */}
                <div
                  className="flex items-center justify-center"
                  style={{
                    height: "100px",
                    width: "100px",
                    padding: "10px",
                  }}
                >
                  <img
                    src={picture_hoon}
                    alt="인물 사진"
                    style={{
                      height: "80px",
                      width: "80px",
                      borderRadius: "50%",
                      objectFit: "cover",
                    }}
                  />
                </div>

                {/* 이름, 날짜 */}
                <div>
                  <div
                    className="flex justify-between p-2"
                    style={{
                      height: "60px",
                      width: "280px",
                    }}
                  >
                    <span className="text-xl font-bold">차훈</span>
                    <span className="text-sm text-gray-400">
                      2025.02.09 (D-456)
                    </span>
                  </div>
                  <div
                    className="pl-2 text-sm text-gray-400"
                    style={{
                      height: "40px",
                      width: "280px",
                    }}
                  >
                    2025학년도 전기 학위수여식
                  </div>
                </div>

                {/* 일정 */}
              </div>

              {/* 2. 타임라인 */}
              <div
                style={{
                  width: "750px", // 배경이미지 크기(너비)
                  height: "100px", // 배경이미지 크기(높이)
                  border: "1px solid #CFCFCF",
                  marginLeft: "44px",
                  backgroundColor: "white",
                }}
              >
                <div className="flex w-full h-full">
                  <div className="flex items-center w-8 h-full hover:bg-blue-200">
                    <MdChevronLeft className="w-8 h-8 text-gray-400 hover:text-gray-500" />
                  </div>

                  {/* 타임라인 설계 영역(핵심 영역) */}
                  <div className="w-full h-full hover:bg-green-100"></div>

                  <div className="flex items-center w-8 h-full hover:bg-blue-200">
                    <MdChevronRight className="w-8 h-8 text-gray-400 hover:text-gray-500" />
                  </div>
                </div>
              </div>
            </div>
            {/* ******* 친구 리스트 (가로 한세트 end) ******** */}

            {/* 이벤트중 하나를 눌렀을 때 해당 주석과 같은 방향으로 진행되야 함 */}
            {/* <div
              style={{
                width:'715px', // 배경이미지 크기(너비)
                height:'65px', // 배경이미지 크기(높이)
                border: '1px solid #CFCFCF',
                marginLeft: '44px',
              }}
              onClick={(event) => {
                event.preventDefault();
                setModalOpen(true);
              }}
              >
                <a href=''>
                  <div className='flex items-center justify-center w-full h-full bg-gray-100 hover:bg-gray-200'>
                    <FiPlusCircle className='w-10 h-10' />
                  </div>
                </a>
              </div> */}
          </div>

          {/* 0. 친구 화면 -  우측(right) 영역 -> 타임라인 및 해시태그 */}
          <div
            className="flex h-screen"
            style={{
              width: "500px",
            }}
          >
            {/* 1. 우측(right) 하단 -> D-day 영역 (일정상 가장 가까운 D-day 5개 항목) */}
            <div
              className=""
              style={{
                border: "1px solid #CFCFCF",
                background: "white",
                width: "320px",
                height: "240px",
                marginLeft: "30px",
                position: "fixed",
                marginTop: "560px",
              }}
            >
              <div className="flex justify-between w-full h-12 pl-2">
                <div className="p-1">
                  <div className="text-sm font-bold">기술고시 1차 시험</div>
                  <div className="text-sm">2023.11.26(토)</div>
                </div>
                <div>
                  <div className="flex items-center justify-center w-16 h-12 font-bold text-orange-600">
                    D-10
                  </div>
                </div>
              </div>
              <div className="flex justify-between w-full h-12 pl-2">
                <div className="p-1">
                  <div className="text-sm font-bold">프로젝트 발표</div>
                  <div className="text-sm">2023.11.30(목)</div>
                </div>
                <div>
                  <div className="flex items-center justify-center w-16 h-12 font-bold text-orange-600">
                    D-14
                  </div>
                </div>
              </div>
              <div className="flex justify-between w-full h-12 pl-2">
                <div className="p-1">
                  <div className="text-sm font-bold">결혼식</div>
                  <div className="text-sm">2023.12.12(화)</div>
                </div>
                <div>
                  <div className="flex items-center justify-center w-16 h-12 font-bold text-orange-600">
                    D-26
                  </div>
                </div>
              </div>
              <div className="flex justify-between w-full h-12 pl-2">
                <div className="p-1">
                  <div className="text-sm font-bold">교회세례</div>
                  <div className="text-sm">2023.12.24(일)</div>
                </div>
                <div>
                  <div className="flex items-center justify-center w-16 h-12 font-bold text-orange-600">
                    D-38
                  </div>
                </div>
              </div>
              <div className="flex justify-between w-full h-12 pl-2">
                <div className="p-1">
                  <div className="text-sm font-bold">SAFFY 결과 발표</div>
                  <div className="text-sm">2023.12.25(월)</div>
                </div>
                <div>
                  <div className="flex items-center justify-center w-16 h-12 font-bold text-orange-600">
                    D-39
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* --------------------------- 이벤트 눌렀을 때 modal 영역 ---------------------------------- */}
      </div>
    </>
  );
};

export default Friend;
