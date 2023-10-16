const Footer = () => {
    return (
        <div>
            <div className="relative">
                <img src="/src/Components/images/more/13.jpg" className="h-[500px] w-full" alt="" />
                <div className="flex pb-4 absolute bottom-4 pl-64">
                    <div>
                        <div className="text-[#1B1A1A]">
                            <img className="w-20 mt-4" src="/src/Components/images/more/logo1.png" alt="" />
                            <h1 className="mt-4 text-[#331A15] text-3xl">Espresso Emporium</h1>
                            <p className="mt-4">Always ready to be your friend. Come & Contact with us to share your <br /> memorable moments, to share with your best companion.</p>
                            <div className="flex mt-4 gap-8">
                                <img src="/src/Components/images/Group 24.png" alt="" />
                                <img src="/src/Components/images/facebook-3-2 1.png" alt="" />
                                <img src="/src/Components/images/instagram-2016-5 1.png" alt="" />
                                <img src="/src/Components/images/linkedin-icon-2 1.png" alt="" />
                            </div>
                            <p className="text-[#331A15] mt-4">Get in Touch</p>
                            <div className="flex mt-4 gap-4">
                                <img src="/src/Components/images/Frame (1).png" alt="" />
                                <p>info@gmail.com</p>
                            </div>
                            <div className="flex  mt-4 gap-4">
                                <img src="/src/Components/images/Frame.png" alt="" />
                                <p>+88 01533 333 333</p>
                            </div>
                            <div className="flex  mt-4 gap-4">
                                <img src="/src/Components/images/Frame (2).png" alt="" />
                                <p>72, Wall street, King Road, Dhaka</p>
                            </div>
                        </div>
                    </div>
                    <div className="mt-24 pl-[300px]">
                        <p className="text-[#331A15] text-2xl">Connect with Us</p>
                        <div className="">
                            <input className="w-[500px] pt-5 h-8 rounded bg-[#fff]" placeholder="Name" type="text" name="" id="" /><br />
                            <input className="w-[500px] pt-5 h-8 rounded bg-[#fff]" type="text" placeholder="Email" name="" id="" /><br />
                            <input className="w-[500px] pt-5 h-[130px] rounded bg-[#fff]" placeholder="Message" type="text" name="" id="" /><br />
                        </div>
                        <button className="btn mt-8 bg-[lightgray] hover:bg-green-500 text-[#331A15] rounded-3xl border-[#331A15]">Send Message</button>
                    </div>
                </div>
            </div>
            <div className="relative">
                <img className="" src="/src/Components/images/Rectangle 17.png" alt="" />
                <p className="text-[#fff] absolute  bottom-3 ml-[700px]">Copyright Espresso Emporium ! All Rights Reserved</p>
            </div>
        </div>
    );
};

export default Footer;