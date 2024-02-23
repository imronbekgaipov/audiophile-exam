import { Outlet } from "react-router-dom";
import Nav from "../components/shared/Nav";
import Footer from "../components/shared/Footer";
function RootLayout() {
  return (
    <>
      <Navbar />
      <main className="max-container">
        <Outlet />
      </main>
      <Footer />
    </>
  );
}

export default RootLayout;
