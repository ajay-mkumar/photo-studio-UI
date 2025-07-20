import Footer from "./components/Footer/Footer";
import HireUsComponent from "./components/HireUs/HireUsComponent";
import HomePage from "./components/Homepage/HomePage";
import NavBar from "./components/Navbar/NavBar";
import { HIRE_US, HOMEPAGE } from "./constants/constants";
import { useModal } from "./context/ModalContext";
import { ModalProvider } from "./context/ModalProvider";

function AppContent() {
  const { modal } = useModal();

  return (
    <>
      <NavBar />
      {modal === HOMEPAGE && <HomePage />}
      {modal === HIRE_US && <HireUsComponent />}
      <Footer />
    </>
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
