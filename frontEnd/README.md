# NirogGyan Frontend Assignment Reference Document

---

### Assignment Objective

Your main goal is to create a user-friendly and responsive web application for booking healthcare appointments. This involves displaying doctor information, showing their availability, and allowing users to schedule appointments through a simple interface.

---

### Assignment Overview

You'll be building a **responsive web application** primarily using **React.js**. While **TypeScript is preferred** for its type safety and improved developer experience, you can use JavaScript if you're not yet comfortable with TypeScript. The user interface should be **clean, intuitive, and functional**.

For the backend, you have flexibility:

- **Mock Backend:** You can use static JSON data to simulate API responses. This is a good option if you want to focus primarily on the frontend.
- **Node.js/Express:** If you're comfortable with backend development, you can create a simple Node.js/Express API to serve your data.

---


### Bonus (Optional Enhancements)

Consider implementing these features if you have extra time and want to challenge yourself further. These will significantly enhance your application's quality and demonstrate additional skills.

- **Styling Framework:** Utilize a CSS framework like **Tailwind CSS** (recommended) or another framework of your choice (e.g., Bootstrap, Material-UI) for efficient and consistent styling.
- **Node.js Express API:** Build a simple backend using **Node.js with Express** to manage doctor data and appointments dynamically.
- **Form Validation:** Implement client-side validation for the appointment booking form to ensure data integrity and a better user experience.
- **Responsive Design:** Ensure your application looks and functions well across various screen sizes (mobile, tablet, desktop).

---

### Technical Constraints

Adhering to these constraints will help you build a modern and maintainable React application.

- **React:** Use React for your frontend. You can choose to use it with or without Next.js.
- **TypeScript:** While not strictly mandatory, **TypeScript is strongly preferred** for its benefits in larger applications and team environments.
- **Functional Components & Hooks:** Leverage React's functional components and hooks (e.g., `useState`, `useEffect`, `useContext`) for state management and side effects.
- **State Management:** Use **React Context API** or **local component state** for managing your application's data. Avoid external state management libraries like Redux for this assignment unless you are very comfortable with them.

# Set Up Instructions
Download dependencies by running npm install

Start up the app using npm start

#Routes
Home Route
Home Route contains a Header which consists a SearchBar
Doctors List
Doctor List images should consist of alt attribute value as doctor name

The Profile image should consist of alt attribute value as user profile

1. **Landing Page:**
    - Display a clear list of doctors.
    - For each doctor, show their **name, specialization, and a profile image**.
    - Indicate their **availability status** (e.g., "Available Today," "Fully Booked," "On Leave").
    - Implement a **search functionality** to filter doctors by name or specialization.
2. **Doctor Profile Page:**
    - When a user clicks on a doctor from the landing page, navigate to a dedicated profile page.
    - This page should display more detailed information about the doctor.
    - Clearly show their **availability schedule**.
    - Include a prominent **"Book Appointment" button**.
3. **Book Appointment:**
    - Clicking the "Book Appointment" button should lead to a simple form.
    - The form needs to collect: **Patient Name, Email, and desired Date/Time for the appointment.**
    - Upon submission, provide a **confirmation message** to the user.



#libraries used
=> React-icons for icon
=> react-router-dom for navigation
=> React-popup for popup form
=> React hooks for function components

#Resoureces
   Didn't created Backend API with node.js, insted used data which is placed in seperate .js file# DoctorAppointment-app
# DoctorAppointment-app
# DoctorAppointment-app
