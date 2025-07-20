import HireUsComponent from "./components/HireUsComponent";
import HomePage from "./components/HomePage";
import NavBar from "./components/NavBar";
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
