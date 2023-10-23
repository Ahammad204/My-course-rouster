# Live link

Live Link : https://sage-stardust-2ffdab.netlify.app/

*** Three Features of project


- Display a list of available courses with their details, including the course name, price, and credit hours.
- Allow users to select courses and add them to the cart, which displays the selected courses, the total price, the total credit hours, and the remaining credit hours.
- Notify users when they try to add a course that exceeds their credit limit or when they try to add a course that is already in their cart.


******Discuss how I managed the state in My project.

In the project I used the useState hook to control the state of the application. Specifically, I used it to keep track of course document status, courses selected, credit selected, total value, and remaining credits. Each time the user selects a course, I add the corresponding course to the selected course list and update the selected credits, total value, and remaining credits I also used a useEffect hook to retrieve data from In a JSON file I update the state of the class documents . Additionally, I used the react-toastify library to display a toast message when actions were taken, such as my attempt to add a course already in the cart or a running out of credit limit
