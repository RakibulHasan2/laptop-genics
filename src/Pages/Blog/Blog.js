import React from 'react';
import './Blog.css'
const Blog = () => {
    return (
        <div>
            <h2 className='font-bold text-sky-500 my-4 text-center text-4xl'>Blog Section</h2>
            <div>
                <div className='QA'>
                    <h3 className='font-bold text-2xl'>Question-01 : What are the different ways to manage a state in a React application?</h3>
                    <p>There are four main types of state you need to properly manage in your React apps. <br /> 1.Local state <br />2. Global state <br /> 3.Server state <br />4.URL state <br />Local (UI) state  Local state is data we manage in one or another component.Local state is most often managed in React using the useState hook. For example, local state would be needed to show or hide a modal component or to track values for a form component, such as form submission, when the form is disabled and the values of a forms inputs.Global state is necessary when we want to get and update data anywhere in our app, or in multiple components at least.Server state is a simple concept, but can be hard to manage alongside all of our local and global UI state.URL state is often missing as a category of state, but it is an important one.In many cases, a lot of major parts of our application rely upon accessing URL state. </p>
                </div>
                <div className='QA'>
                    <h3 className='font-bold text-2xl'>Question-02 : How does prototypical inheritance work?</h3>
                    <p>The Prototypal Inheritance is a feature in javascript used to add methods and properties in objects. It is a method by which an object can inherit the properties and methods of another object. Traditionally, in order to get and set the [[Prototype]] of an object, we use Object. getPrototypeOf and Object.The prototype is itself an object, so the prototype will have its own prototype, making what's called a prototype chain. The chain ends when we reach a prototype that has null for its own prototype. Note: The property of an object that points to its prototype is not called prototype </p>
                </div>
                <div className='QA'>
                    <h3 className='font-bold text-2xl'>Question-03 : What is a unit test? Why should we write unit tests?</h3>
                    <p>The main objective of unit testing is to isolate written code to test and determine if it works as intended. Unit testing is an important step in the development process, because if done correctly, it can help detect early flaws in code which may be more difficult to find in later testing stages.For Test-Driven Development (TDD), you write unit tests before writing any implementation. This makes your implementation details in your code shorter and easier to understand. In this instance, the best time to write unit tests is immediately. For others, most developers write unit tests after the code's been written</p>
                </div>
                <div className='QA'>
                    <h3 className='font-bold text-2xl'>Question-04 : React vs. Angular vs. Vue?</h3>
                    <p> developed by Google, was first released in 2010, making it the oldest of the lot. It is a TypeScript-based JavaScript framework. A substantial shift occurred in 2016 on the release of Angular 2 (and the dropping of the “JS” from the original name – AngularJS). Angular 2+ is known as just Angular. Although AngularJS (version 1) still gets updates, we will focus the discussion on Angular.also known as Vue.js, is the youngest member of the group. It was developed by ex-Google employee Evan You in 2014. Over the last several years, Vue has seen a substantial shift in popularity, even though it doesn’t have the backing of a large company. developed by Facebook, was initially released in 2013. Facebook uses React extensively in their products (Facebook, Instagram, and WhatsApp). Similar to Vue, the React developers also announce their newest version on the blog section of the React website.</p>
                </div>
            </div>

        </div>
    );
};

export default Blog;