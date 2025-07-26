import Footer from "./components/Footer/Footer";
import HireUsComponent from "./components/HireUs/HireUsComponent";
import HomePage from "./components/Homepage/HomePage";
import MobileHeader from "./components/Homepage/MobileHeader";
import MobileNavBar from "./components/Navbar/MobileNavBar";
import NavBar from "./components/Navbar/NavBar";
import Portfolio from "./components/Portfolio/Portfolio";
import { HIRE_US, HOMEPAGE, PORTFOLIO } from "./constants/constants";
import { useModal } from "./context/ModalContext";
import { ModalProvider } from "./context/ModalProvider";

function AppContent() {
  const { modal } = useModal();

  return (
    <div className="min-h-screen flex flex-col pb-16">
      <main className="flex-grow">
      <MobileHeader />
      <NavBar />
      {modal === HOMEPAGE && <HomePage />}
      {modal === HIRE_US && <HireUsComponent />}
      {modal === PORTFOLIO && <Portfolio />}
      <MobileNavBar />
      </main>
      <Footer />
    </div>
  );
}
function App() {
  return (
    <ModalProvider defaultModal={HOMEPAGE}>
      <AppContent />
    </ModalProvider>
  );
}

export default App;
