import { useState } from "react";
import { useRouter } from "next/router";
import { toast } from "react-toastify";

const ResetPassword = (props) => {
  const router = useRouter();
  const { resetToken } = router.query;
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfimPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false)

  const toggleButtonShowAndHide = () => {
    setShowPassword((priview)=>!priview) 
  }
  const resetPassword = async () => {
    if (password === "" && confirmPassword === "") {
      toast.error("Password and confirm password is required");
    } else if (password === "") {
      toast.error("Password is required");
    } else if (confirmPassword === "") {
      toast.error("ConfirmPassword is required");
    } else {
      if (password === confirmPassword) {
        try {
          const response = await fetch(`/api/auth/user/setpassword`, {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              token: resetToken,
            },
            body: JSON.stringify({ confirmPassword }),
          });
          const json= await response.json();
          if (response.ok) {
            toast("Set your password!");
            router.push('/login');
          } else {
            // Handle login errord
            toast.error(json.error);
          }
        } catch (error) {
          console.error("An error occurred during login:", error);
          toast.error("Check internet your divice");
        }
      } else {
        toast.error("Passwords do not match");
      }
    }
  };

  return (
    <>
      <section className="text-gray-600 body-font mb-64">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-col text-center w-full mb-12">
            <h1
              className={`sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-${
                props.mode === "light" ? 900 : 200
              }`}
            >
              Reset Password
            </h1>
          </div>
          <div className="flex lg:w-2/3 w-full sm:flex-row flex-col mx-auto px-8 sm:space-x-4 sm:space-y-0 space-y-4 sm:px-0 items-end">
            <div className="relative flex-grow w-full">
              <label
                htmlFor="password"
                className={`leading-7 text-sm text-gray-${
                  props.mode === "light" ? 900 : 200
                }`}
              >
                Password
              </label>
              <input
                type={showPassword?'text':"password"}
                id="password"
                name="password"
                className={`w-full bg-gray-${
                  props.mode === "light" ? 100 : 500
                } bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-transparent focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-${
                  props.mode === "light" ? 900 : 100
                } py-1 px-3 leading-8 transition-colors duration-200 ease-in-out`}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                min={6}
                required
              />
            </div>
            <div className="relative flex-grow w-full">
              <label
                htmlFor="confirm-password"
                className={`leading-7 text-sm text-gray-${
                  props.mode === "light" ? 900 : 200
                }`}
              >
                Confirm Password
              </label>
              <input
                type={showPassword?'text':'password'}
                id="confirm-password"
                name="confirmPassword"
                className={`w-full bg-gray-${
                  props.mode === "light" ? 100 : 500
                }  bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-transparent focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-${
                  props.mode === "light" ? 900 : 100
                } py-1 px-3 leading-8 transition-colors duration-200 ease-in-out`}
                value={confirmPassword}
                onChange={(e) => setConfimPassword(e.target.value)}
                min={6}
                required
              />
            </div>
            <div className="relative flex-grow  ">
                <button className={`ml-2 text-sm py-3 px-3 bg-indigo-400 text-white rounded-md font-medium cursor-pointer`} id='click_show_hide'  onClick={toggleButtonShowAndHide} >  {showPassword ? 'Hide' : 'Show'}</button>
            </div>
            <button
              className="text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg"
              onClick={() => resetPassword()}
            >
              Submit
            </button>
          </div>
        </div>
      </section>
    </>
  );
};




export default ResetPassword;

