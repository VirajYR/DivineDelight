import React, { useEffect, useState } from 'react'
// import ProductData from "../assets/data"
const apiUrl = "http://ec2-13-232-237-129.ap-south-1.compute.amazonaws.com"
;
import Item from '../Item/Item'
import "./Popular.css"

const Popular = () => {
    const [PopularInWomen, setPopularInWomen] = useState([]);
    useEffect(() => {
        fetch(`http://ec2-13-232-237-129.ap-south-1.compute.amazonaws.com:3000/popularinwomen`)
            .then((response) => response.json())
            .then((data) => setPopularInWomen(data));

    }, [])
    return (
        <>
            <div className="Popular">
                <h1>POPULAR IN WOMEN</h1>
                <hr />
                <div className="PopularItems">
                    {PopularInWomen.map((item, i) => {

                        return <Item key={i} id={item.id} name={item.name} image={item.image} newPrice={item.new_price} oldPrice={item.old_price} />
                    })}

                </div>
            </div>

        </>
    )
}

export default Popular