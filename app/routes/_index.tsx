import { MdOutlineStadium } from "react-icons/md";
import logo from "../images/logo.png";
import backgroundImage from "../images/landing-page-background.jpg";
import { HiOutlineBolt } from "react-icons/hi2";
import { Form, Link } from "react-router";
import { FcGoogle } from "react-icons/fc";
import { FaApple } from "react-icons/fa";
function Login() {
  return (
    <div className="flex h-screen text-white">
      <div
        className="container flex flex-col justify-between bg-cover px-16 py-8 bg-no-repeat w-full"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      >
        <div>
          <img src={logo} />
          <p className="uppercase text-5xl mt-4">
            Take your
            <br /> game to
            <br /> the next level
          </p>
        </div>
        <div>
          <div className="flex items-center">
            <MdOutlineStadium />
            <div>
              <p>Elite Facilities</p>
              <p>Enjoy access to top-quality approved football pitches across Gombe</p>
            </div>
          </div>
          <div className="flex items-center">
            <HiOutlineBolt />
            <div>
              <p>Instant Booking</p>
              <p>Secure your slot in seconds with real-time availability.</p>
            </div>
          </div>
        </div>
      </div>
      <div className="px-16 py-8 container text-foreground flex flex-col justify-center">
        <p className="font-bold text-4xl">Welcome Back</p>
        <p className="text-muted-foreground mt-2">Sign in to manage your booking and team.</p>
        <Form className="mt-8">
          <label>Email Address</label>
          <br />
          <input
            type="email"
            placeholder="coach@pitchvelocity.com"
            className="mt-2 py-2 px-4 border rounded-full broder-[#BCCBB9] placeholder:text-[#6B7280] w-full"
          />
          <label className="mt-4 block">Password</label>
          <input
            type="password"
            placeholder="••••••••"
            className="mt-2 py-2 px-4 border rounded-full broder-[#BCCBB9] placeholder:text-[#6B7280] w-full"
          />
          <div className="mt-4">
            <input type="checkbox" />
            <label htmlFor="" className="ml-2 font-semibold">
              Remember this device
            </label>
          </div>
          <button type="submit" className="btn btn-primary mt-8">
            Sign In &rarr;
          </button>
          <div className="flex items-center mt-6">
            <hr className="w-full" />
            <p className="uppercase text-xs font-semibold text-center w-full whitespace-nowrap text-grey">
              Or continue with
            </p>
            <hr className="w-full" />
          </div>
        </Form>
        <div className="flex justify-center gap-x-4 mt-6">
          <button className="flex items-center border-grey border w-full rounded-2xl justify-center py-2 gap-x-2">
            <FcGoogle />
            <p>Google</p>
          </button>
          <button className="flex items-center border-grey border w-full rounded-2xl justify-center py-2 gap-x-2">
            <FaApple />
            <p>Apple</p>
          </button>
        </div>
        <p className="text-center mt-4">
          Don't have an account? <Link to="register">Create account</Link>
        </p>
      </div>
    </div>
  );
}
export default Login;
