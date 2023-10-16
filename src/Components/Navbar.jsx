import { NavLink } from "react-router-dom";

const Navbar = () => {
    return (
        <div>
            <img className="h-28 relative w-full" src="/src/Components/images/more/15.jpg" alt="" />
            <div className="flex ml-[680px] absolute gap-6 top-5">
                <NavLink to='/addcoffee'>Add</NavLink>
                <NavLink to='/update'>Update</NavLink>
                <img className="w-[70px] h-[90px]" src="/src/Components/images/more/logo1.png" alt="" />
                <h1 className="text-[#fff] pt-5 text-3xl">Espresso Emporium</h1>
            </div>
        </div>
    );
};

export default Navbar;