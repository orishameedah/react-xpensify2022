import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import AppRouter, { history } from "./routers/AppRouter";
import configureStore from "./store/configureStore";
import LoadingPage from "./components/LoadingPage";
import { startSetExpenses } from "./actions/expenses";
import { login, logout } from "./actions/auth";
import "normalize.css/normalize.css";
import "./styles/styles.scss";
import "react-dates/lib/css/_datepicker.css";
import { firebase } from "./firebase/firebase";
// import "./playground/promises";


// const store = configureStore();
// const jsx = (
//   <Provider store={store}>
//     <AppRouter />
//   </Provider>
// );

// let hasRendered = false;
// const renderApp = () => {
//   if (!hasRendered) {
//     ReactDOM.render(jsx, document.getElementById("app"));
//     hasRendered = true;
//   }
// };

// ReactDOM.render(<p>Loading...</p>, document.getElementById("app"));

// firebase.auth().onAuthStateChanged((user) => {
//   if (user) {
//     // console.log("uid", user.uid);
//     store.dispatch(login(user.uid)); //dispatching login
//     store.dispatch(startSetExpenses()).then(() => {
//       renderApp();
//       if (history.location.pathname === "/") {
//         history.push("/dashboard");
//       }
//     });
//   } else {
//     store.dispatch(logout()); //dispatching logout
//     renderApp();
//     history.push("/");
//   }
// });

//Styling Expensify App
//- Styling Login Page
//- copy bg.jpg  and loader.gif onto public/images folder
//- next is to style LoginPage component by opening it
//- open styles/styles.scss
//- create _box-layout.scss partial file inside styles/components folder
//@import "./components/box-layout" onto styles/styles.scss file remember that underscore _ and extension .scss is 
//excluded when importing your partial file onto style.scss
//- open _box-layout.scss partial file for setting up.
//- create nested div tags inside the root div tags in LoginPage.js then add h1 and p tags onto the nested 
//- add this class selector  <div className="box-layout__box"> onto LoginPage.js file
//- open styles/base/_base.scss then add the following

//Styling Buttons
//Challenge area
//1. Create new file called _button.scss partial file
//2. add button class selector onto _button.scss file 
//3. use the class selector on button tags in Login Button
//solution to chanllenge area
//1. create _button.scss partial file inside styles/components folder
//and import './components/button'; onto styles.scss file
//2. setup _button.scss partial file
//3. use .button class selector on button tags in LoginPage.js file
//- login into another app inorder to add more style onto the app
//- open src/components/Header.js component
//- remove create Expense Link on Header.js component, switch NavLink and modify Link tag
//- create _header.scss partial file inside styles/components folder
//- import './components/header'; onto styles.scss file
//- setup _header.scss partial file
//- create _content-container.scss partial file onto styles/components folder for justifying the entire app
//- import './components/content-container'; onto styles.scss file
//- setup _content-container.scss partial file
//- add nesed div inside header tags in Header.js component then use content-container class selector inside the nested div tags
//- add inner nested div tags inside the nested div with header__content class selector

//Styling Summary Area
//- open components/ExpensesSumarry.js component for styling.
//- create _page-header.scss partial file onto styles/components folder
//- import "./components/page-header"
//add <div className="page-header"> class selector onto root div tags in ExpenseSummary.js
//- create a nested div tags inside the root div tags with a class selctor content-container for justify the content
//- add page-header__title class selector onto h1 tags and add span tags onto h1 tags inorder to bolder some dynamic content
//- import { Link } from "react-router-dom"; onto ExpenseSummary.js component and use it to add create  expenses like this
//<Link className="button" to="/create">
// Add Expense
// </Link>
//apply className= "button button--link" class selector onto the button div tags in Header.js component.

//Styling List Filters
//- open ExpensesListFilters.js component for styling.
//- reuse content-container class selector on ExpenseListFilters.js root div tags
//- create a nested div tags inside the root div tags then add three div tags inside the nested div tags inside the nested
//div then copy each inpu field onto the inner nested div tag
//- add <div className="input-group"> class selector onto the nested div tags and 
//<div className="input-group__item"> onto each inner nested div tags in ExpenseFilters.js component.
//- create _input-group.scss partial file in styles/components folder
//@import "./components/input-group"; onto styles.scss

//Styling input
//- create _inputs.scss partial file in styles/styles.scss for styling inputs
//- @import "./components/inputs"; onto styles/styles.scss file
//- use test-input class selector on the input fileds in ExpenseFilters.js file
//- add universal selector onto the styles/_base-scss file like this
//*{
//  box-sizing: border-box;
//}
//- use select class selector on the select dropdown
//-open ExpenseForm.js component for sstyling of the input fields
//- apply text-input class selctor onto the input fields on ExpenseForm.js component
//- apply textarea class selector onto the textarea tags on ExpenseForm.js component

//Styling ExpenseForm
//- open AddExpensePage.js component then add nested div tags onto the root tags with the class selector of page-header
//- open ExpenseForm.js component, move the error message into form tags and remove the root div
//- add form class selcetor onto form tags and form__error class selector onto p tags in the error message area inside 
//ExpenseForm.js component.
//- create _form.scss partial file in styles/components folder
//- @import "./components/form"; onto styles/styles.scss file
//- setup _form.scss partial file
//- add content-container class selector onto a div tags, wrap ExpenseForm component onto that div in AddExpensePage.js
// component

//Challenge Area
//open EditExpensePage.js component then do the following
//1. setup page header
//2. setup content contain for the form and remove the button
//3. add modifier on button and button--secondary (bg of #888888)
//- add nested div onto root div in EditExpensePage.js component with content-container class selector
//- add more style on EditExpensePage.js Component
//- open ExpenseForm.js component to change Add Expense button name to Save Expense
//- change the button name from Remove to Remove Expenses on EditExpensePage.js component

//Styling Expense List: Part I
//- open ExpenseList.js Component
//- add content-container class selector onto ExpenseList Compoenent
//- add nesed div inside the root div with three inner nested div tags, one div for mobile view and the two other div tags
//for desktop view
//- create _visibility.scss partial file for styling ExpenseList.js component
//- @import "./components/visibility";
//- setup _visibility.scss partial file
//- create _list.scss partial file in styles/styles.scss
//- @import "./components/list";
//- setup _list.scss file
//- use the class selector of _list partial file in ExpenseList.js component
//- open ExpenseListItem.js component where the individual item on the dashboard live for modification

//Styling Expense List: Part II
//- add list-body class selector onto div wrap {props.expense} in ExpenseList.js
//component inorder not to allow the list data touch the footer of the browser

//Adding loader
//- styling of loading screen which will be display for a very little time before displaying the main app.
//- open app.js file where we have our loading rendering the comment firebase.auth().onAuthStateChanged((user)=>{}) inorder to
//manually work on loading page

const store = configureStore();
const jsx = (
  <Provider store={store}>
    <AppRouter />
  </Provider>
);

let hasRendered = false;
const renderApp = () => {
  if (!hasRendered) {
    ReactDOM.render(jsx, document.getElementById("app"));
    hasRendered = true;
  }
};

ReactDOM.render(<LoadingPage />, document.getElementById("app"));

firebase.auth().onAuthStateChanged((user) => {
  if (user) {
    // console.log("uid", user.uid);
    store.dispatch(login(user.uid)); //dispatching login
    store.dispatch(startSetExpenses()).then(() => {
      renderApp();
      if (history.location.pathname === "/") {
        history.push("/dashboard");
      }
    });
  } else {
    store.dispatch(logout()); //dispatching logout
    renderApp();
    history.push("/");
  }
});

//change this ReactDOM.render(<p>Loading...</p>, document.getElementById("app")); 
//to this ReactDOM.render(<LoadingPage />, document.getElementById("app"));
//- create LoadingPage.js file inside components folder
//- setup LoadingPage.js component
//- import LoadingPage from "./components/LoadingPage"; onto app.js file
//- create _loader.scss partial file onto style/components folder
//- @import "./components/loader"; onto styles/styles.scss
//- setup _loader.scss partial file
//- uncomment firebase.auth().onAuthStateChanged((user) inorder to render the app on the browser since we have made alot of 
//changes to the app let run the jest test suite like this
//C:\react-course-projects032021\xpensify-app8>npm test -- --watch
//- almost all the change are in snapshot tests, then press u to update snapshot 
//- let create test case for LoadingPage.js file
//- create LoadingPage.test in test/components folder
//- setup LoadingPage.test suite
//- run test jest suite

//Babel Polyfill
//- Babel Polyfill will allow your app to run in wider range of browsers and browser versions 
//- on some browser our app will crah becos we are using some new like some array methods such includes method e.t.c
//- install babel polyfill like this
//C:\react-course-projects032021\xpensify-app8>npm i babel-polyfill@6.26.0
//- open webpack.config.file for configuration like this 
//change entry: "./src/app.js",
//to this
//entry: ['babel-polyfill',"./src/app.js"],
//with this modification babel polyfill allow wide range of browser to access our app becos all the es6 and es7 features that 
//we have being using, babel polyfill we give support to low version of browser to gain access to our app
//- startup dev-server

//Final Deployment