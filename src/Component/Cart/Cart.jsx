/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-key */


const Cart = ({selectedCourse,selectCredit,totalPrice,remaining}) => {
    return (
        <div className="">
            <div  className="mt-5 ml-4 w-72 h-auto shadow-lg">
                <p className="text-lg font-bold text-blue-500 m-4">Credit Hour Remaining {remaining} hr</p>
                <hr />
            <h1 className="text-xl font-bold text-center"> Course Name</h1>
                {
                    selectedCourse.map(course => (

                        <>
                        <li key={course.id} className="list-decimal text-base font-normal m-4">{course.course_name}</li>
                        </>

                    )) }

                <hr />
                <p  className="text-xl font-medium text-left m-4">Total Credit Hour: {selectCredit} hr</p>
                <hr />
                <p  className="text-xl font-medium text-left m-4" >Total Prices: {totalPrice} Tk.</p>

            </div>
            
        </div>
    );
};

export default Cart;