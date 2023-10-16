import { useEffect, useState } from "react";
import BannerLayout from "./BannerLayout";

const Banner2 = () => {

    const [data, setData] = useState([])

    useEffect(() => {
        fetch('banner.json')
            .then(res => res.json())
            .then(data => setData(data))
    })


    return (
        <div>
            <div>
                <div>
                    {
                        data.map((logo) => <BannerLayout key={logo.id} logo={logo}></BannerLayout>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Banner2;