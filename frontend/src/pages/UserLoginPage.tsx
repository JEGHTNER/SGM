import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { guestLogin, userLogin } from '../api/auth';
import { GuestLoginInfo, UserLoginInfo } from '../types/GameType';
import { useDispatch } from 'react-redux';
import { userNicknameState } from '../store/user-slice';
import { httpStatusCode } from '../components/utils/http-status';

export default function UserLoginPage() {
    const [userNickname, setUserNickname] = useState<string>('');
    const [userPassword, setUserPassword] = useState<string>('');
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const login = async () => {
        if (userNickname === '' || userPassword === '') {
            alert('1글자 이상 입력해주세요.');
        } else {
            const userLoginInfo: UserLoginInfo = {
                nickname: userNickname,
                password: userPassword,
            };

            const res = await userLogin(userLoginInfo);
            if (res.status === httpStatusCode.OK) {
                console.log('로그인 성공');
                dispatch(userNicknameState(userLoginInfo.nickname));
                navigate('/selectchannel');
            } else {
                console.log('로그인 실패');
            }
        }
    };
    return (
        <section
            className="w-full h-full flex flex-col items-center justify-center"
            style={{
                backgroundImage:
                    'url(/src/assets/images/bg/background-main.png)',
            }}
        >
            <p className="text-[2.4vw]">게스트 로그인</p>
            <div className="relative w-[50%] flex justify-between my-[2vw]">
                <h5 className="w-[35%] text-white text-[3vw] text-start">
                    닉네임
                </h5>
                <input
                    className="w-[65%] border-[0.3vw] color-border-main rounded-[0.6vw] px-[2vw] py-[0.4vw] text-black bg-white text-[2.6vw]"
                    type="text"
                    value={userNickname}
                    onChange={(e) => {
                        setUserNickname(e.target.value);
                    }}
                />
            </div>
            <div className="relative w-[50%] flex justify-between">
                <h5 className="w-[35%] text-white text-[3vw] text-start">
                    비밀번호
                </h5>
                <input
                    className="w-[65%] border-[0.3vw] color-border-main rounded-[0.6vw] px-[2vw] py-[0.4vw] text-black bg-white text-[2.6vw]"
                    type="text"
                    value={userPassword}
                    onChange={(e) => {
                        setUserPassword(e.target.value);
                    }}
                />
            </div>

            <div
                className="flex justify-center w-[40%] mt-[1vw]"
                onClick={() => {
                    login();
                }}
            >
                <div className="border-[0.3vw] color-border-main rounded-[0.6vw] px-[2vw] py-[0.4vw] color-text-main bg-white text-[2.6vw] cursor-pointer hover:color-bg-main hover:text-white">
                    Guest
                </div>
            </div>
        </section>
    );
}
