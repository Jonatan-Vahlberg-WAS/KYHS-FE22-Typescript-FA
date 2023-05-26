# **TypeScript Based Webshop Application**

## **Objective**

Your task is to build a fully functional webshop application using React and TypeScript. This application should connect to a database, display products, and provide a shopping cart feature. The requirements of this task are detailed below.

## **Main Tasks**

1. **Database Connection:** Connect your application to a database of products. You may choose to use Firebase, MongoDB, or another suitable database. Ensure that your database contains various products, each having unique attributes such as ID, name, price, description, and image URL. There is a sample database implementation to firebase realtime database that can be replaced with your own database. If you choose to use this implementation simply replace the firebase config in the firebase.js file with your own.
2. **Product Display:** Implement a feature to display the products in a list format. Each product should also have a detail page, where the user can view more information about the selected product.
3. **Cart Functionality:** Implement a local cart, which is controlled by a context using either **`useReducer`** or **`useState`**. The cart should have the following capabilities:
    - Add a product
    - Remove a product
    - Increase or decrease the quantity of a product
4. **Data Persistence:** As login is not required for this application, ensure data persistence by saving the user's cart data either in local storage or in the database.
5. **TypeScript Implementation:** Your entire application should be typed with TypeScript and should reflect the functionality of a real webshop. Each component, function, and prop should have defined types.
6. **Styling:** Minimal styling is necessary. You are free to use any CSS-in-JS library, such as styled-components, or traditional CSS/Sass. Your UI should be user-friendly and intuitive.

## **Optional Tasks for VG Grade**

To attain a VG grade, complete at least one of the following tasks:

1. **Product Addition Page:** Add a page that allows for the addition of new products to the database. This should be achieved via a form with necessary fields (product name, price, description, image URL, etc.). Ensure that this form is typed correctly using TypeScript including the html spesific form interactions.
2. **Type Extension:** Include multiple product types with TypeScript's type extension feature. For instance, a basic product type might have properties such as ID, name, and price. You could then extend this type for specific product categories. For example, a book type might extend the basic product type by adding an author and ISBN.

## **Deliverables**

1. Source code in a GitHub repository.
2. A Readme file explaining how to run your application.
3. A demo of your application (a link to a live version or a recorded video demonstration).

## **Evaluation Criteria**

1. Successful implementation of the main tasks.
2. Code quality: clear structure, use of comments, and adherence to TypeScript and React best practices.
3. Optional tasks: successful implementation of at least one optional task will earn a VG grade.
4. Understanding and correct use of the React and TypeScript principles and concepts.

Good luck and `spread the code!`