import { Form, Link, redirect } from "react-router";
import { supabase } from "~/supabase";
import bolt from "../images/bolt-signup.svg";
import backgroundImage from "../images/signup-background.jpg";
import logo from "../images/logo.png";
import timer from "../images/timer.svg";
import type { Route } from "./+types/_index";

export async function clientAction({ request }: Route.ClientActionArgs) {
  const { email, password } = Object.fromEntries(await request.formData()) as Record<
    string,
    string
  >;
  const { data, error } = await supabase.auth.signUp({ email, password });
  if (error) {
    console.error(error);
    return { errorMessage: "Failed to Create user" };
  }
  return redirect("/");
}

export default function SignUp() {
  return (
    <div className="flex h-screen text-white">
      <div
        className="container flex flex-col justify-center gap-y-6 bg-cover px-16 py-8 bg-no-repeat w-full"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      >
        <div>
          <img src={logo} />
          <p className="uppercase text-4xl font-extrabold mt-4 text-nowrap">Elevate your game</p>
        </div>
        <p>
          Join the Pitch Velocity community to unlock professional-grade facility booking and
          performance tracking.
        </p>
        <div>
          <div className="flex items-center text-xs">
            <img src={timer} className="size-8" alt="" />
            <div className="ml-4">
              <p className="font-extrabold">Booking History</p>
              <p>Track every match and session with a detailed digital log of your pitch time.</p>
            </div>
          </div>
          <div className="flex mt-4 items-center text-xs">
            <img src={bolt} className="size-8" alt="" />
            <div className="ml-4">
              <p className="font-extrabold">Faster Checkout</p>
              <p>Secure your slot in seconds with real-time availability.</p>
            </div>
          </div>
        </div>
      </div>
      <div className="self-start px-16 justify-center min-h-screen container text-foreground flex flex-col">
        <p className="font-bold text-4xl">Create Account</p>
        <p className="text-muted-foreground mt-2 text-xs">
          Ready for kick-off? Enter your details below.
        </p>
        <Form method="POST" className="text-sm mt-8">
          <label>Full Name</label>
          <br />
          <input
            name="name"
            type="text"
            placeholder="Cristiano Ronaldo"
            className="mt-2 py-2 px-4 border rounded-full broder-[#BCCBB9] placeholder:text-[#6B7280] w-full"
            required
          />
          <label className="inline-block mt-4">Email Address</label>
          <br />
          <input
            name="email"
            type="email"
            placeholder="coach@pitchvelocity.com"
            className="mt-2 py-2 px-4 border rounded-full broder-[#BCCBB9] placeholder:text-[#6B7280] w-full"
            required
          />
          <label className="inline-block mt-4">Password</label>
          <input
            name="password"
            type="password"
            placeholder="Min. 8 characters"
            className="mt-2 py-2 px-4 border rounded-full broder-[#BCCBB9] placeholder:text-[#6B7280] w-full"
            required
          />
          <label className="inline-block mt-4">Team Name</label>
          <br />
          <input
            name="team-name"
            type="text"
            placeholder="Velocity Striker"
            className="mt-2 py-2 px-4 border rounded-full broder-[#BCCBB9] placeholder:text-[#6B7280] w-full"
            required
          />
          <div className="mt-4">
            <input type="checkbox" />
            <label htmlFor="" className="ml-2 text-xs font-semibold">
              I agree to the <Link to=".">Terms of service</Link> and{" "}
              <Link to=".">Privacy Policy</Link>
            </label>
          </div>
          <button type="submit" className="btn btn-primary mt-4">
            Create Account &rarr;
          </button>
        </Form>
        <hr className="mt-6" />
        <p className="text-center mt-4">
          Already have an account?{" "}
          <Link to="/signin" className="font-semibold">
            Sign In
          </Link>
        </p>
      </div>
    </div>
  );
}
