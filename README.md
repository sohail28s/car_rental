Car Rental Project
Welcome to the Car Rental Project! This web application allows users to easily rent cars from various branches of a car rental service. The project features a user-friendly interface, subscription for updates, dynamic car model selection based on company choice, and email confirmation sent to the user.

Features
Car Rental Form: Users can fill out a form to rent a car, providing their name, phone number, email, and preferred branch.
Car Company and Model Selection: Users can select a car company (e.g., Toyota, Honda, Ford), and based on that, the available car models are dynamically shown for selection.
Date and Time Picker: Users can specify the rental date and time via a datetime-local input.
Email Confirmation: After submitting the form, the user receives a confirmation email with details about the car rental, including the car company, model, branch, and the chosen rental date and time.
Subscription for Updates: A subscription feature allows users to subscribe to the latest updates, receiving a confirmation email when they subscribe.
Technologies Used
HTML: The structure and content of the form and pages.
CSS: Styling for the layout, form, buttons, and animations.
JavaScript: Adds dynamic functionality for selecting car models based on the car company, handling form submission, and sending data to EmailJS for email notifications.
EmailJS: Service to send emails directly from the client-side, providing confirmation emails to users.
Swiper: A touch-friendly carousel slider for displaying cars or other content dynamically.
ScrollReveal: Adds scroll-triggered animations to elements on the page for a smooth user experience.


Navigate to the project directory:

bash
Copy
Edit
cd car-rental-project
Open index.html in your browser to view the project:

bash
Copy
Edit
open index.html
Features in Detail
Car Rental Form
The rental form allows users to input their personal details (name, phone number, email) and select the branch they wish to pick up the car from. The form also includes a car company dropdown (e.g., Toyota, Honda) and a dynamically populated car model selection based on the chosen company.

Dynamic Car Model Selection
When a user selects a car company (e.g., Toyota), the car models available for that company are shown in a dropdown list. This is achieved through JavaScript and dynamically updates based on the user's selection.

Date and Time Selection
Users can select the rental date and time using a datetime-local input field. This input makes it easy for users to specify when they want to pick up the car.

Email Confirmation via EmailJS
Once the user submits the form, the system uses EmailJS to send a confirmation email to the user with all the details of the car rental: name, phone number, car company, model, branch, and rental date/time.

Subscription for Updates
Users can subscribe for updates regarding the latest offers and car rental news. After subscribing, they will receive a confirmation email with a thank-you message and information about the subscription.

How It Works
The user enters their details and selects the car company, model, branch, and rental date.
The form is submitted via EmailJS, which sends a confirmation email to the user with all the entered details.
If the user subscribes to updates, they receive a subscription confirmation email from the Car Rental service.
Contributions
Feel free to fork this project and contribute! Here are some ways you can contribute:

Fixing bugs or adding new features.
Improving the design or adding more animations.
Enhancing the mobile responsiveness of the form and layout.
If you have any questions or ideas, please open an issue or submit a pull request.

License
This project is open source and available under the MIT License.
