const TestLoginMobile = () => {
  return (
    <div className="relative rounded-3xl bg-whitesmoke shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] w-full h-[926px] overflow-hidden text-left text-13xl text-darkslategray-100 font-inter">
      <div className="absolute top-[0px] left-[0px] bg-white w-[428px] h-[926px]" />
      <div className="absolute top-[0px] left-[0px] rounded-t-3xl rounded-b-none [background:linear-gradient(180deg,_rgba(255,_255,_255,_0.62),_rgba(255,_255,_255,_0.8))] w-[428px] h-[926px]" />
      <div className="absolute top-[83px] left-[24px] flex flex-col items-start justify-start gap-[8px]">
        <b className="relative leading-[150%] inline-block w-[347px]">Hello</b>
        <div className="relative text-lg leading-[150%] inline-block w-[347px]">
          Enter your email and password to login.
        </div>
      </div>
      <div className="absolute top-[182px] left-[24px] rounded-2xl w-[380px] flex flex-col items-center justify-start pt-8 px-0 pb-6 box-border gap-[24px] text-[24px]">
        <div className="self-stretch relative leading-[100%] font-semibold">
          Login
        </div>
        <div className="self-stretch rounded-2xl flex flex-col items-start justify-start gap-[24px] text-base">
          <div className="self-stretch flex flex-col items-start justify-start gap-[8px]">
            <div className="self-stretch relative leading-[100%] font-semibold">
              Email
            </div>
            <div className="self-stretch rounded-lg bg-gray-200 flex flex-row items-center justify-start p-4 border-[1px] border-solid border-darkslategray-200">
              <div className="flex-1 relative leading-[24px]">
                johndoe@test.com
              </div>
            </div>
          </div>
          <div className="self-stretch flex flex-col items-start justify-start gap-[8px]">
            <div className="self-stretch relative leading-[100%] font-semibold">
              Password
            </div>
            <div className="self-stretch rounded-lg bg-gray-200 flex flex-row items-center justify-start p-4 gap-[8px] border-[1px] border-solid border-darkslategray-200">
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
                src="/eye--off.svg"
              />
            </div>
          </div>
          <div className="self-stretch flex flex-row items-start justify-between">
            <div className="flex flex-row items-center justify-start gap-[8px]">
              <img
                className="relative w-4 h-4 overflow-hidden shrink-0"
                alt=""
                src="/checkbox--default.svg"
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
              <div className="relative leading-[100%] font-medium">Google</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestLoginMobile;
