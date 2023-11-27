import logo from "../assets/logo.svg";

function Header() {
  return (
    <>
      <div className="bg-red-400 flex flex-row w-1/7 h-fit gap-x-40 p-4 rounded-xl">
        <div className="mb-2 md:mb-0">
          <p className="text-xs mb-1 ml-2 text-white">My balance</p>
          <h2 className="font-bold ml-2 text-white">$921.48</h2>
        </div>
        <img src={logo} alt="Logo image" className="h-10 md:h-auto" />
      </div>
    </>
  );
}

export default Header;
