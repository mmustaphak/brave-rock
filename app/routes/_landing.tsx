import email from "../images/email.svg";
import website from "../images/website.svg";
import logo from "../images/logo.png";
import { HiOutlineUserCircle } from "react-icons/hi";
import { Link, NavLink, Outlet, redirect } from "react-router";
import { supabase } from "~/supabase";

export async function clientLoader() {
  const { data, error } = await supabase.auth.getUser();
  console.log(error?.message);
  if (!data.user) {
    return redirect("/signin");
  }
}
export default function Home() {
  const navLink = [
    { label: "Arena", to: "." },
    { label: "Bookings", to: "bookings" },
    { label: "History", to: "history" },
    { label: "Help", to: "help" },
  ];
  const renderedNavLinks = navLink.map(({ label, to }) => (
    <NavLink
      to={"/" + to}
      className={({ isActive }) =>
        isActive ? "border-b-2 border-b-green py-3 font-semibold" : "text-muted-foreground!"
      }
    >
      {label}
    </NavLink>
  ));
  return (
    <>
      <header className="bg-primary flex justify-between items-center px-6">
        <Link to={"/"}>
          <img src={logo} />
        </Link>
        <nav className="flex items-center gap-x-6 text-muted-foreground">{renderedNavLinks}</nav>
        <HiOutlineUserCircle className="size-8 text-green" />
      </header>

      <Outlet />

      <footer className="bg-secondary text-muted-foreground font-medium">
        <div className="flex container flex-wrap gap-x-40 w-full items-center px-6 py-12">
          <div>
            <Link to={"/"}>
              <img src={logo} />
            </Link>
            <p className="mt-4 max-w-100">
              Elevating the game through professional venue discovery and seamless digital bookings.
            </p>
            <div className="flex gap-x-2 mt-2">
              <Link to="/">
                <img src={website} alt="" />
              </Link>
              <a href="mailto:customersupport@velocitypitch.com">
                <img src={email} alt="" />
              </a>
            </div>
          </div>
          <div>
            <p className="text-[#191C1E] font-semibold">Support</p>
            <div className="grid gap-y-2 mt-4 text-sm">
              <p>Support Center</p>
              <p>Booking Policy</p>
              <p>Terms of Service</p>
              <p>Privacy Policy</p>
            </div>
          </div>
        </div>
        <hr />
        <div className="container px-6 py-12 flex justify-between">
          <p>© {new Date().getFullYear()}Pitch Velocity. All rights reserved.</p>
          <p>English (UK) GBP (£)</p>
        </div>
      </footer>
    </>
  );
}
