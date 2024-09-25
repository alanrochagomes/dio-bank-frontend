import { Footer } from "./Footer/Footer";
import { Header } from "./Header/Header";

export const Layout = ({ children }: any) => {
  return (
    <>
      <Header
        isMenuOpen={false}
        toggleMenu={function (): void {
          throw new Error("Function not implemented.");
        }}
      />
      {children}
      <Footer />
    </>
  );
};
