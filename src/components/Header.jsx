import logo from "../assets/logo.svg";

function Header() {
  return (
    <div className="h-screen flex items-center justify-center">
      <div className="bg-red-400 flex flex-row w-1/4 h-fit gap-x-40 p-4 rounded-xl">
        <div>
          <p className="text-xs mb-1 ml-2 text-white">My balance</p>
          <h2 className="font-bold ml-2 text-white">$921.48</h2>
        </div>
        <img src={logo} alt="Logo image" className="h-10" />
      </div>
    </div>
  );
}

export default Header;
