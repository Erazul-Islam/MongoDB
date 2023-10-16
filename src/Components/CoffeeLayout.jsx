import { useEffect, useState } from "react";
import CoffeeCard from "./CoffeeCard";

const CoffeeLayout = () => {

    const [data, setdata] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/addcoffee')
            .then(res => res.json())
            .then(data => setdata(data))
    }, [])


    return (
        <div className="flex gap-10">
           {
            data.map(coffee => <CoffeeCard key={coffee._id} coffee={coffee}></CoffeeCard>)
           }
        </div>
    );
};

export default CoffeeLayout;