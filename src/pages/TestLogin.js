import React, { useState } from 'react';
import './styles.css';

const TestLogin = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [rememberMe, setRememberMe] = useState(false);
    const [loading, setLoading] = useState(false);
    const [emailError, setEmailError] = useState('');
    const [passwordError, setPasswordError] = useState('');

    const handleLogin = () => {
        // Form validation
        if (!email.trim()) {
          setEmailError('Email is required');
          return;
        } else {
          setEmailError('');
        }
    
        if (!password.trim()) {
          setPasswordError('Password is required');
          return;
        } else {
          setPasswordError('');
        }
    
        // Add your login logic here
        setLoading(true);
    
        // Simulate a login request (remove this in your actual implementation)
        setTimeout(() => {
          setLoading(false);
          // Handle success or show error
        }, 2000);
      };

      const handleEmailChange = (e) => {
        setEmail(e.target.value);
        setEmailError(''); // Clear email error when user types
      };
    
      const handlePasswordChange = (e) => {
        setPassword(e.target.value);
        setPasswordError(''); // Clear password error when user types
      };

      const handleSSOLogin = (provider) => {
        // Simulate a loading state during SSO login
        setLoading(true);
    
        // Simulate a test scenario for SSO login
        setTimeout(() => {
          setLoading(false);
          alert(`Simulating SSO login with ${provider} (This is just a test message)`);
        }, 2000); // Adjust the timeout as needed
      };

  const handleRememberMeChange = () => {
    setRememberMe(!rememberMe);
  };

  const handleSignUp = () => {
    // Add your sign-up logic here
    alert('You Already Sign Up');
  };
  return (
    <div className="relative bg-whitesmoke w-full h-[969px] overflow-hidden text-left text-13xl text-darkslategray-100 font-inter">
      {/* Common UI Elements */}
      {/* ... */}

      {/* Web Version */}
      <div className="lg:flex hidden">
        {/* ... Web specific content */}

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
                <input
            type="text"
            value={email}
            onChange={handleEmailChange}
            className="flex-1 relative leading-[24px] bg-transparent border-none outline-none"
          />               
              </div>
            </div>
            {emailError && (
          <div className="self-stretch text-red-500 text-sm">
            {emailError}
          </div>
        )}
            <div className="self-stretch flex flex-col items-start justify-start gap-[8px]">
              <div className="self-stretch relative leading-[100%] font-semibold">
                Password
              </div>
              <div className="self-stretch rounded-lg bg-gray-200 flex flex-row items-center justify-start p-4 border-[1px] border-solid border-thistle">
                <input
            type="password"
            value={password}
            onChange={handlePasswordChange}
            className="flex-1 h-3 flex flex-row items-center justify-start gap-[4px] bg-transparent border-none outline-none"
          />              
              </div>
            </div>
            {passwordError && (
          <div className="self-stretch text-red-500 text-sm">
            {passwordError}
          </div>
        )} 
            <div className="self-stretch flex flex-row items-start justify-between">
              <div className="flex flex-row items-center justify-start gap-[8px]">
              <input
            type="checkbox"
            checked={rememberMe}
            onChange={handleRememberMeChange}
            className="relative w-4 h-4 overflow-hidden shrink-0"
          />
                <div className="relative leading-[100%]">Remember me</div>
              </div>
              <div className="relative [text-decoration:underline] leading-[100%] text-right">
                <a href='#'>Forgot password?</a> 
              </div>
            </div>
            <div className="self-stretch flex flex-row items-start justify-start gap-[24px] text-center text-white">
              <button
          onClick={handleLogin}
          className="flex-1 rounded-lg bg-iris-80 flex flex-row items-center justify-center p-4 text-white"
          disabled={loading}
        >
            {loading ? 'Logging in...' : 'Login'}
        </button>
        
        <div className="flex-1 rounded-lg flex flex-row items-center justify-center p-4 text-darkslategray-100 border-[1px] border-solid ">
  <button
    onClick={handleSignUp}
    className="focus:outline-none"
    style={{ backgroundColor: 'white', border: 'none' }}
  >
    <div className="flex-1 relative leading-[100%] font-semibold">
      Sign Up
    </div>
  </button>
</div>

            </div>
          </div>
          
          <div className="self-stretch flex flex-col items-center justify-start gap-[16px] text-center text-sm">
            <div className="self-stretch relative leading-[100%]">
              Or, login with
            </div>
            <div className="self-stretch flex flex-row items-start justify-center gap-[16px]">
      <div
        className={`flex-1 rounded flex flex-row items-start justify-center py-3 px-4 border-[1px] border-solid border-thistle cursor-pointer ${
          loading ? 'opacity-50 pointer-events-none' : '' // Disable button during loading
        }`}
        onClick={() => handleSSOLogin('Facebook')}
      >
        <div className="relative leading-[100%] font-medium">Facebook</div>
      </div>
      <div
        className={`flex-1 rounded flex flex-row items-start justify-center py-3 px-4 border-[1px] border-solid border-thistle cursor-pointer ${
          loading ? 'opacity-50 pointer-events-none' : '' // Disable button during loading
        }`}
        onClick={() => handleSSOLogin('LinkedIn')}
      >
        <div className="relative leading-[100%] font-medium">LinkedIn</div>
      </div>
      <div
        className={`flex-1 rounded flex flex-row items-start justify-center py-3 px-4 border-[1px] border-solid border-thistle cursor-pointer ${
          loading ? 'opacity-50 pointer-events-none' : '' // Disable button during loading
        }`}
        onClick={() => handleSSOLogin('Google')}
      >
        <div className="relative leading-[100%] font-medium">Google</div>
      </div>
    </div>
          </div>
        </div>
      </div>
    </div>
      </div>

      {/* Mobile Version */}
      <div className="lg:hidden">
        {/* ... Mobile specific content */}
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
              <input
            type="text"
            value={email}
            onChange={handleEmailChange}
            className="flex-1 relative leading-[24px] bg-transparent border-none outline-none"
          />                  
            </div>
          </div>
          {emailError && (
          <div className="self-stretch text-red-500 text-sm">
            {emailError}
          </div>
        )}
          <div className="self-stretch flex flex-col items-start justify-start gap-[8px]">
            <div className="self-stretch relative leading-[100%] font-semibold">
              Password
            </div>
            
            <div className="self-stretch rounded-lg bg-gray-200 flex flex-row items-center justify-start p-4 gap-[8px] border-[1px] border-solid border-darkslategray-200">
              <div className="flex-1 h-3 flex flex-row items-center justify-start gap-[4px]">
              <input
            type="password"
            value={password}
            onChange={handlePasswordChange}
            className="flex-1 h-3 flex flex-row items-center justify-start gap-[4px] bg-transparent border-none outline-none"
          /> 
          
              </div>
            </div>
          </div>
          {passwordError && (
          <div className="self-stretch text-red-500 text-sm">
            {passwordError}
          </div>
        )} 
          <div className="self-stretch flex flex-row items-start justify-between">
            <div className="flex flex-row items-center justify-start gap-[8px]">
            <input
            type="checkbox"
            checked={rememberMe}
            onChange={handleRememberMeChange}
            className="relative w-4 h-4 overflow-hidden shrink-0"
          />
              <div className="relative leading-[100%]">Remember me</div>
            </div>
            <div className="relative [text-decoration:underline] leading-[100%] text-right">
                <a href='#'>Forgot password?</a> 
              </div>
          </div>
          <div className="self-stretch flex flex-row items-start justify-start gap-[24px] text-center text-white">
              <button
          onClick={handleLogin}
          className="flex-1 rounded-lg bg-iris-80 flex flex-row items-center justify-center p-4 text-white"
          disabled={loading}
        >
            {loading ? 'Logging in...' : 'Login'}
        </button>
            <div className="flex-1 rounded-lg flex flex-row items-center justify-center p-4 text-darkslategray-100 border-[1px] border-solid border-darkslategray-100">
              <div className="flex-1 relative leading-[100%] font-semibold">
              <button
    onClick={handleSignUp}
    className="focus:outline-none"
    style={{ backgroundColor: 'white', border: 'none' }}
  >
    <div className="flex-1 relative leading-[100%] font-semibold">
      Sign Up
    </div>
  </button>              
  </div>
            </div>
          </div>
        </div>
        <div className="self-stretch flex flex-col items-center justify-start gap-[16px] text-center text-sm">
          <div className="self-stretch relative leading-[100%]">
            Or, login with
          </div>
          <div className="self-stretch flex flex-row items-start justify-center gap-[16px]">
          <div
        className={`flex-1 rounded flex flex-row items-start justify-center py-3 px-4 border-[1px] border-solid border-thistle cursor-pointer ${
          loading ? 'opacity-50 pointer-events-none' : '' // Disable button during loading
        }`}
        onClick={() => handleSSOLogin('Facebook')}
      >
        <div className="relative leading-[100%] font-medium">Facebook</div>
      </div>
      <div
        className={`flex-1 rounded flex flex-row items-start justify-center py-3 px-4 border-[1px] border-solid border-thistle cursor-pointer ${
          loading ? 'opacity-50 pointer-events-none' : '' // Disable button during loading
        }`}
        onClick={() => handleSSOLogin('LinkedIn')}
      >
        <div className="relative leading-[100%] font-medium">LinkedIn</div>
      </div>
      <div
        className={`flex-1 rounded flex flex-row items-start justify-center py-3 px-4 border-[1px] border-solid border-thistle cursor-pointer ${
          loading ? 'opacity-50 pointer-events-none' : '' // Disable button during loading
        }`}
        onClick={() => handleSSOLogin('Google')}
      >
        <div className="relative leading-[100%] font-medium">Google</div>
      </div>
          </div>
        </div>
      </div>
    </div>
      </div>
    </div>
  );
};

export default TestLogin;
