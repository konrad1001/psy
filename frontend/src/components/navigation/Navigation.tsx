interface NavigationProps {
  content: any;
}

function Navigation({ content }: NavigationProps) {
  return (
    <div className="flex items-center justify-between bg-white px-64 py-8 text-black outline-1">
      <div>Logo placeholder</div>

      <div className="flex">
        <NavBarButton label="Home" />
        <NavBarButton label="About" />
        <NavBarButton label="Contact" />
      </div>
    </div>
  );
}

export default Navigation;

function NavBarButton({ label }: { label: string }) {
  return (
    <button className="mx-2 px-4 py-2 text-black hover:text-emerald-500">
      {label}
    </button>
  );
}
