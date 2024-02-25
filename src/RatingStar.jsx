import { useState } from "react";
import {FaStar} from "react-icons/fa"

export default function RatingStar({noOfStars}){

const [rating,setRating] = useState(0)
const [hover,setHover] = useState(0)


function handleClick(currentIndex){
    setRating(currentIndex)

}

function handleMouseEnter(currentIndex){
    setHover(currentIndex)
}

function handleMouseLeave(){
    setHover(rating)
}
    return (
        <div className="flex justify-center h-[50hv] bg-red-300">
            {[...Array(noOfStars)].map((items,index) => {
                console.log(index)
                index+=1
                return <FaStar 
                key={index}
                className={index <= (hover || rating) ? "text-yellow-300" : "text-black" }
                onClick={() => handleClick(index)}
                onMouseEnter={()=> handleMouseEnter(index)}
                onMouseLeave ={()=> handleMouseLeave()}
                size={50}
                />
                
            })}
        </div>

    )

}








