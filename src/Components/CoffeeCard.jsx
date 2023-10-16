/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
const CoffeeCard = ({coffee}) => {

    const {_id, name,supplier,taste,category,photo} = coffee;

    const handleDelete = _id => {
        console.log(_id)
    }

    return (
        <div>
            <div className="card w-[500px] card-side bg-base-100 shadow-xl">
                <figure><img src={photo} alt="Movie" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{name}</h2>
                    <p>{supplier}</p>
                    <p>{taste}</p>
                    <p>{category}</p>
                </div>
                <div className="card-actions justify-end">
                    <div className="btn-group">
                        <button className="btn btn-active">View</button>
                        <button className="btn btn-secondary">Edit</button>
                        <button onClick={ () => handleDelete(_id)} className="btn btn-success">Delete</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CoffeeCard;