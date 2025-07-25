import { Home, User, Briefcase, Image } from "lucide-react";
import { useModal } from "../../context/ModalContext";
import { HIRE_US, HOMEPAGE } from "../../constants/constants";

function MobileNavBar() {
  const { toggleModal } = useModal();

  return (
    <div className="sm:hidden fixed bottom-0 left-0 right-0 m-5 z-50 rounded-xl bg-white shadow-lg border-t border-gray-200">
      <div className="flex justify-around items-center py-2">
        <NavItem
          icon={<Home />}
          label="Home"
          onClick={() => toggleModal(HOMEPAGE)}
        />
        <NavItem icon={<Briefcase />} label="Services" onClick={() => toggleModal(HIRE_US)} />
        <NavItem icon={<User />} label="About Us" />
        <NavItem icon={<Image />} label="Portfolio" />
      </div>
    </div>
  );
}
type NavItemProps = {
  icon: React.ReactNode;
  label: string;
  onClick?: () => void;
};

function NavItem({ icon, label, onClick }: NavItemProps) {
  return (
    <div className="flex flex-col items-center text-xs text-gray-600 hover:text-blue-500 cursor-pointer">
      <div className="w-6 h-6" onClick={onClick}>{icon}</div>
      <span className="text-xs">{label}</span>
    </div>
  );
}

export default MobileNavBar;
