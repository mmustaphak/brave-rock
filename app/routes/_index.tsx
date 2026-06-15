import { FaApple } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { Form, Link, redirect } from "react-router";
import bolt from "../images/bolt.svg";
import backgroundImage from "../images/landing-page-background.jpg";
import logo from "../images/logo.png";
import stadium from "../images/stadium.svg";
import type { Route } from "./+types/_index";
import { supabase } from "~/supabase";
export async function clientAction({ request }: Route.ClientActionArgs) {
  const { email, password } = Object.fromEntries(await request.formData()) as Record<
    string,
    string
  >;
  const { data, error } = await supabase.auth.signInWithPassword({ email, password });
  console.log(data, error);
  if (error) throw error;
  if (data) {
    console.log(data, error);
    return redirect("/main");
  }
}
function Login() {
  return (
    <div className="flex h-screen text-white">
      <div
        className="container flex flex-col justify-between bg-cover px-16 py-8 bg-no-repeat w-full"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      >
        <div>
          <img src={logo} />
          <p className="uppercase text-5xl font-extrabold mt-4">
            Take your
            <br /> game to
            <br /> the next level
          </p>
        </div>
        <div>
          <div className="flex items-center text-xs">
            <img src={stadium} className="size-8" alt="" />
            <div className="ml-4">
              <p className="font-extrabold">Elite Facilities</p>
              <p>Enjoy access to top-quality approved football pitches across Gombe</p>
            </div>
          </div>
          <div className="flex mt-4 items-center text-xs">
            <img src={bolt} className="size-8" alt="" />
            <div className="ml-4">
              <p className="font-extrabold">Instant Booking</p>
              <p>Secure your slot in seconds with real-time availability.</p>
            </div>
          </div>
        </div>
      </div>
      <div className="px-16 py-8 container text-foreground flex flex-col justify-center">
        <p className="font-bold text-4xl">Welcome Back</p>
        <p className="text-muted-foreground mt-2">Sign in to manage your booking and team.</p>
        <Form method="POST" className="mt-8 text-sm">
          <label>Email Address</label>
          <br />
          <input
            name="email"
            type="email"
            placeholder="coach@pitchvelocity.com"
            className="mt-2 py-2 px-4 border rounded-full broder-[#BCCBB9] placeholder:text-[#6B7280] w-full"
          />
          <div className="mt-4 flex">
            <label>Password</label>
            <Link to="/reset" className="font-semibold inline-block ml-auto">
              Forgot Password?
            </Link>
          </div>
          <input
            name="password"
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
          Don't have an account? <Link to="signup">Create account</Link>
        </p>
      </div>
    </div>
  );
}
export default Login;
