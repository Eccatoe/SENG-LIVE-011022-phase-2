import React from 'react';


function ToyCard({name, image, likes, id}){
   return  (
   <div className="card">
        <h2>{name}</h2>
        <img src={image} alt="toy" className="toy-avatar"/>
        <p>{likes} likes</p>
        <button className="like-btn" id={id}>like</button> 
    </div>
   )}

export default ToyCard;