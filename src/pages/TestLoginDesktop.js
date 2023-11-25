const TestLoginDesktop = () => {
  return (
    <div className="relative bg-silver w-full h-[969px] overflow-hidden flex flex-row items-center justify-start text-left text-29xl text-white font-inter">
      <div className="bg-iris-80 w-[1126px] h-[969px] overflow-hidden shrink-0 flex flex-col items-end justify-center py-0 px-[178px] box-border">
        <div className="bg-gray-100 [backdrop-filter:blur(48px)] w-[746px] h-[613px] flex flex-col items-start justify-start pt-[138px] px-[88px] pb-[104px] box-border gap-[40px]">
          <div className="w-[311px] h-[223px] flex flex-col items-start justify-start gap-[1px]">
            <div className="relative leading-[120%] font-semibold">
              <p className="m-0">{`Lorem ipsum `}</p>
              <p className="m-0">{`dolor si `}</p>
              <p className="m-0">amet</p>
            </div>
            <div className="relative leading-[100%] font-semibold text-darkslategray-100">
              consectetur
            </div>
          </div>
          <div className="relative text-lg leading-[150%] text-darkslategray-100 inline-block w-[347px]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </div>
        </div>
      </div>
      <div className="bg-white w-[794px] h-[969px] flex flex-col items-start justify-start py-40 px-[154px] box-border gap-[48px] text-13xl text-darkslategray-100">
        <div className="flex flex-col items-start justify-start gap-[8px] h-[83px] ml-[33px]">
          <b className="relative leading-[150%] inline-block w-[347px]">
            Hello
          </b>
          <div className="relative text-lg leading-[150%] inline-block w-[347px]">
            Enter your email and password to login.
          </div>
        </div>
        <div className="rounded-2xl w-[480px] flex flex-col items-center justify-start pt-8 px-8 pb-12 box-border gap-[48px] text-base">
          <div className="self-stretch rounded-2xl flex flex-col items-start justify-start gap-[24px]">
            <div className="self-stretch flex flex-col items-start justify-start gap-[8px]">
              <div className="self-stretch relative leading-[100%] font-semibold">
                Email
              </div>
              <div className="self-stretch rounded-lg bg-gray-200 flex flex-row items-center justify-start p-4 border-[1px] border-solid border-thistle">
                <div className="flex-1 relative leading-[24px]">
                  johndoe@test.com
                </div>
              </div>
            </div>
            <div className="self-stretch flex flex-col items-start justify-start gap-[8px]">
              <div className="self-stretch relative leading-[100%] font-semibold">
                Password
              </div>
              <div className="self-stretch rounded-lg bg-gray-200 flex flex-row items-center justify-start p-4 gap-[8px] border-[1px] border-solid border-thistle">
                <div className="flex-1 h-3 flex flex-row items-center justify-start gap-[4px]">
                  <div className="relative rounded-[50%] bg-darkslateblue w-2 h-2" />
                  <div className="relative rounded-[50%] bg-darkslateblue w-2 h-2" />
                  <div className="relative rounded-[50%] bg-darkslateblue w-2 h-2" />
                  <div className="relative rounded-[50%] bg-darkslateblue w-2 h-2" />
                  <div className="relative rounded-[50%] bg-darkslateblue w-2 h-2" />
                  <div className="relative rounded-[50%] bg-darkslateblue w-2 h-2" />
                  <div className="relative rounded-[50%] bg-darkslateblue w-2 h-2" />
                  <div className="relative rounded-[50%] bg-darkslateblue w-2 h-2" />
                </div>
                <img
                  className="relative w-6 h-6 overflow-hidden shrink-0"
                  alt=""
                  src="/eye--off1.svg"
                />
              </div>
            </div>
            <div className="self-stretch flex flex-row items-start justify-between">
              <div className="flex flex-row items-center justify-start gap-[8px]">
                <img
                  className="relative w-4 h-4 overflow-hidden shrink-0"
                  alt=""
                  src="/checkbox--default1.svg"
                />
                <div className="relative leading-[100%]">Remember me</div>
              </div>
              <div className="relative [text-decoration:underline] leading-[100%] text-right">
                Forgot password?
              </div>
            </div>
            <div className="self-stretch flex flex-row items-start justify-start gap-[24px] text-center text-white">
              <div className="flex-1 rounded-lg bg-iris-80 flex flex-row items-center justify-center p-4">
                <div className="flex-1 relative leading-[100%] font-semibold">
                  Login
                </div>
              </div>
              <div className="flex-1 rounded-lg flex flex-row items-center justify-center p-4 text-darkslategray-100 border-[1px] border-solid border-darkslategray-100">
                <div className="flex-1 relative leading-[100%] font-semibold">
                  Sign Up
                </div>
              </div>
            </div>
          </div>
          <div className="self-stretch flex flex-col items-center justify-start gap-[16px] text-center text-sm">
            <div className="self-stretch relative leading-[100%]">
              Or, login with
            </div>
            <div className="self-stretch flex flex-row items-start justify-center gap-[16px]">
              <div className="flex-1 rounded flex flex-row items-start justify-center py-3 px-4 border-[1px] border-solid border-thistle">
                <div className="relative leading-[100%] font-medium">
                  Facebook
                </div>
              </div>
              <div className="flex-1 rounded flex flex-row items-start justify-center py-3 px-4 border-[1px] border-solid border-thistle">
                <div className="relative leading-[100%] font-medium">
                  Linked In
                </div>
              </div>
              <div className="flex-1 rounded flex flex-row items-start justify-center py-3 px-4 border-[1px] border-solid border-thistle">
                <div className="relative leading-[100%] font-medium">
                  Google
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestLoginDesktop;
