import { HiOutlineUserCircle } from "react-icons/hi";
import { Link, NavLink, Outlet, redirect, useNavigate } from "react-router";
import { supabase } from "~/supabase";

export async function clientLoader() {
  const { data, error } = await supabase.auth.getUser();
  console.log(error?.message);
  if (!data.user) {
    return redirect("/signin");
  }
}
export default function Home() {
  let navigate = useNavigate();
  return (
    <>
      <header>
        <Link to={"/"}>Pitch Velocity</Link>
        <nav>
          <NavLink to="/">Arenas</NavLink>
          <NavLink to="/">Bookings</NavLink>
          <NavLink to="/">History</NavLink>
          <NavLink to="/">Help</NavLink>
        </nav>
        <HiOutlineUserCircle />
      </header>
      <Outlet />
      <footer>
        {/* Logo goes here  */}
        <hr />
        <div>
          <p>© 2024 Pitch Velocity. All rights reserved.</p>
          <p>English (UK) GBP (£)</p>
        </div>
      </footer>
    </>
  );
}
