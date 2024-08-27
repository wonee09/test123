import React, { useState } from "react";
import { Link } from "react-router-dom";

const Main = () => {
  const [menu, setMenu] = useState("");

  return (
    <main>
      <div className="flex">
        <nav className="w-1/4 h-screen bg-gray-800 text-white p-4">
          <ul>
            <li className="mb-4">
              <Link
                to="#"
                className="hover:text-gray-400"
                onClick={(e) => {
                  e.preventDefault();

                  setMenu("개인정보 처리방침");
                }}
              >
                개인정보 처리방침
              </Link>
            </li>
            <li className="mb-4">
              <Link
                to="#"
                className="hover:text-gray-400"
                onClick={(e) => {
                  e.preventDefault();

                  setMenu("샘플 페이지");
                }}
              >
                샘플 페이지
              </Link>
            </li>
            <li className="mb-4">
              <Link
                className="hover:text-gray-400"
                onClick={(e) => {
                  e.preventDefault();

                  setMenu("차세대 인사 복무");
                }}
              >
                차세대 인사 복무
              </Link>
            </li>
            <li className="mb-4">
              <Link
                to="#"
                className="hover:text-gray-400"
                onClick={(e) => {
                  e.preventDefault();

                  setMenu("메뉴 3");
                }}
              >
                메뉴 3
              </Link>
            </li>
          </ul>
        </nav>
        <section className="w-3/4 p-8">
          <h1 className="text-4xl font-bold mb-4">아티클 제목</h1>
          <p className="text-lg leading-relaxed mb-16">
            여기에 아티클 내용이 들어갑니다. 이 텍스트는 예시 텍스트입니다.
            Tailwind CSS를 사용하여 스타일링된 페이지입니다. 좌측에는 여러
            메뉴로 이루어진 nav바가 있으며, 그 중 하나는 '차세대 인사 복무'
            메뉴입니다.
          </p>

          {menu === "차세대 인사 복무" && (
            <div className="flex flex-col gap-4">
              <button
                className="bg-blue-500 text-white p-2 rounded-md h-16"
                onClick={() => {
                  const confirm = window.confirm("출근하시겠습니까?");
                  if (confirm) {
                    alert("출근 처리가 완료되었습니다.");
                  }
                }}
              >
                출근하기
              </button>
              <button
                className="bg-red-500 text-white p-2 rounded-md h-16"
                onClick={() => {
                  const confirm = window.confirm("퇴근하시겠습니까?");
                  if (confirm) {
                    alert("퇴근 처리가 완료되었습니다.");
                  }
                }}
              >
                퇴근하기
              </button>
            </div>
          )}
        </section>
      </div>
    </main>
  );
};

export default Main;
