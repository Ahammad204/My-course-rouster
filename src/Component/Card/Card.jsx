/* eslint-disable react/jsx-key */
import { useEffect } from "react";
import { useState } from "react";
import Cart from "../Cart/Cart";

import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Card = () => {

    const [cards, setCards] = useState([]);
    const [selectedCourse,setSelectedCourse] = useState([]);
    const [selectCredit,setSelectedCredit] = useState(0);
    const [totalPrice,setTotalPrice] = useState(0);
    const [remaining,setRemaining] = useState(20);

    useEffect(() => {

        fetch('course.json')
            .then(res => res.json())
            .then(data => setCards(data))


    }, [])

    const handleSelectCourse = (card) => {

        const isExist = selectedCourse.find(course => course.id == card.id)

        let limitCredit = card.course_credit;
        let totalPrice = card.course_price;
        

        if (isExist) {
            toast('This course already in your cart',  {
              position: 'top-right',
              autoClose: 6000, 
              hideProgressBar: false, 
              closeOnClick: true, 
              pauseOnHover: true, 
              draggable: true, 
            } );
          } else {

            selectedCourse.forEach(item => {

                limitCredit += item.course_credit;
                
            })

          

            selectedCourse.forEach(item => {

                totalPrice += item.course_price;
                
            })

           

            const remainingCredit = 20 - limitCredit;

            if(remainingCredit < 0){

                toast('Your running out of your credit limit',  {
                    position: 'top-right',
                    autoClose: 6000, 
                    hideProgressBar: false, 
                    closeOnClick: true, 
                    pauseOnHover: true, 
                    draggable: true, 
                  } );

            }
            else{
                
                setSelectedCredit(limitCredit)
                setRemaining(remainingCredit)
                setTotalPrice(totalPrice);
                setSelectedCourse([...selectedCourse, card]);

            }          
           
          }
        };

    return (
        <div className="container flex-row  lg:flex">
            <div className="cards-container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                {

                    cards.map(card => (
                    
                    <div className="w-72 h-auto  shadow-lg border-gray-300 m-4 grid">
                        <div className="img">
                            <img className="w-64 m-4" src={card.course_img} alt="" />
                        </div>
                        <h2 className="text-lg font-semibold ml-4">{card.course_name}</h2>
                        <p className="m-4 text-sm font-normal">{card.course_details}</p>
                        <div className="flex flex-col sm:flex-row gap-2">
                            <div className=" flex">
                                <img className="mr-1 w-6 h-6" src="https://i.ibb.co/1vWQy5R/dollar-sign.png" alt="" /> <span className="text-base font-medium">Price: {card.course_price}Tk.</span>
                            </div>
                            <div className="flex  mt-2 sm:mt-0">
                                <img className="mr-1 w-6 h-6" src="https://i.ibb.co/tQcC88M/Frame.png" alt="" /> <span className="text-base font-medium">Credit: {card.course_credit}hr</span>
                            </div>
                        </div>

            <button onClick={()=> handleSelectCourse(card)} className="bg-blue-500 hover:bg-blue-700
             text-white font-bold py-2 px-4 m-4 rounded-lg">Select</button>

                    </div>))


                }
            </div>
            <div className="cart">
            <Cart selectedCourse = {selectedCourse} selectCredit={selectCredit} totalPrice={totalPrice} remaining={remaining} ></Cart> 
            </div>
        </div>
    );
};

export default Card;