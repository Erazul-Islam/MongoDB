const BannerLayout = ({logo}) => {
    console.log(logo)
    const {img,name,description} = logo || {}
    return (
        <div>
            <div>
                <img src={img} alt="" />
                <h1>{name}</h1>
                <p>{description}</p>
            </div>
        </div>
    );
};

export default BannerLayout;