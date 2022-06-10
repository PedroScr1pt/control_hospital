import Navbar from "./PagInc/Navbar";
import HeadInc from "./PagInc/HeadInc";
export default function Layout({ children }) {
  return (
    <>
      <HeadInc />
      <Navbar />
      <main>{children}</main>
    </>
  );
}
