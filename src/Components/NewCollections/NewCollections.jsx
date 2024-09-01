import React, { useState } from 'react'
// import CollectionData from "../assets/new_collections"
const apiUrl = "http://ec2-13-232-237-129.ap-south-1.compute.amazonaws.com"
;
import Item from '../Item/Item'
import "./NewCollections.css"
import { useEffect } from 'react'
const NewCollections = () => {
    const [CollectionData, setCollectionData] = useState([]);
    useEffect(() => {
        fetch(`http://ec2-13-232-237-129.ap-south-1.compute.amazonaws.com:3000/newcollections`)
            .then((response) => response.json())
            .then((data) => setCollectionData(data));
    },[])
    return (
        <>
            <div className="NewCollections">
                <h1>NEW COLLECTIONS</h1>
                <hr />
                <div className="collections">
                    {CollectionData.map((item, i) => {

                        return <Item key={i} id={item.id} name={item.name} image={item.image} newPrice={item.new_price} oldPrice={item.old_price} />
                    })}
                </div>
            </div>
        </>
    )
}

export default NewCollections