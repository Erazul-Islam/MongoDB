const Banner = () => {
    return (
        <div>
            <img className="h-[600px] relative w-full" src="/src/Components/images/more/3.png" alt="" />
            <div className="absolute top-96 ml-[900px]">
                <h1 className="text-2xl">Would you like a Cup of Delicious Coffee?</h1>
                <p>Its coffee time - Sip & Savor - Relaxation in every sip! Get the nostalgia back!! <br /> Your companion of every moment!!! Enjoy the beautiful moments and make them memorable.</p>
                <button className="btn btn-accent">Learn More</button>
            </div>
        </div>
    );
};

export default Banner;