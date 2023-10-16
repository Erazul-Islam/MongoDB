const Update = () => {
    return (
        <div>
            <div className="ml-64 mr-64 rounded bg-[#F4F3F0]">
                <h1 className="text-center pt-8 text-3xl">Add New Coffee</h1>
                <p className="text-center">It is a long established fact that a reader will be distraceted by the readable content of a page when looking at its layout. <br /> The point of using Lorem Ipsum is that it has a more-or-less normal <br /> distribution of letters, as opposed to using Content here.</p>
                <form className="pl-36 mt-8 pb-8 pr-36">
                    <div className="flex justify-between">
                        <div>
                            <div>
                                <span className="">Name</span><br />
                                <input className="w-96 mt-2 h-10 rounded bg-[#fff]" type="text" />
                            </div>
                            <div>
                                <span className="">Name</span><br />
                                <input className="w-96 mt-2 h-10 rounded bg-[#fff]" type="text" />
                            </div>
                            <div>
                                <span className="">Name</span><br />
                                <input className="w-96 mt-2 h-10 rounded bg-[#fff]" type="text" />
                            </div>
                        </div>
                        <div>
                            <div>
                                <span className="">Name</span><br />
                                <input className="w-96 mt-2 h-10 rounded bg-[#fff]" type="text" />
                            </div>
                            <div>
                                <span className="">Name</span><br />
                                <input className="w-96 mt-2 h-10 rounded bg-[#fff]" type="text" />
                            </div>
                            <div>
                                <span className="">Name</span><br />
                                <input className="w-96 mt-2 h-10 rounded bg-[#fff]" type="text" />
                            </div>
                        </div>
                    </div>
                    <div>
                        <p>Photo</p>
                        <input className="w-full h-10 rounded bg-[#fff]" type="text" />
                        <button className="btn w-full h-12 mt-4 hover:bg-orange-600 bg-[#D2B48C] border-none text-[#331A15]">Update Coffee</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Update;