import { useState } from "react";
import { useNavigate } from "react-router-dom";

const ID = "leeq312";
const PASSWORD = "rmafks28**";

function Login() {
  const navigate = useNavigate();

  const handleLogin = () => {
    if (id === ID && password === PASSWORD) {
      navigate("/main");
    } else {
      alert("아이디 또는 비밀번호가 일치하지 않습니다.");
    }
  };

  const [id, setId] = useState("");
  const [password, setPassword] = useState("");

  const handleIdChange = (e) => {
    setId(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  return (
    <>
      <p className="text-4xl font-bold mb-8">경기도 행정포털</p>

      <img
        src="https://i.namu.wiki/i/2KupGLAwK-xh9-5qmMyzpVtPbHVxxrKsZqw175mPj7P03txNc6m64K2hgq_RxtuOLlEV7ibVkoBXNci-KszC2hbfJZ5blqmsu6uteLNnfGHL-efkTFq05Z4qGRvRO7XUf9cCDop8NNJ-DcbXw6fOyg.svg"
        alt="logo"
      />
      <div className="mt-8">
        <p className="text-2xl">로그인을 해 주세요.</p>
        <form className="mt-8 flex items-center justify-center gap-8">
          <input
            className="border-2 border-gray-300 rounded-md p-2"
            type="text"
            placeholder="아이디"
            value={id}
            onChange={handleIdChange}
          />
          <input
            className="border-2 border-gray-300 rounded-md p-2"
            type="password"
            placeholder="비밀번호"
            value={password}
            onChange={handlePasswordChange}
          />
          <button
            className="bg-blue-500 text-white p-2 rounded-md w-24"
            onClick={handleLogin}
          >
            로그인
          </button>
        </form>
      </div>
    </>
  );
}

export default Login;
