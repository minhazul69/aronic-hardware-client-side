import React from "react";
// import "./Blogs.css";

const Blogs = () => {
  return (
    <div>
      <div className="question-container">
        <h1 className="question-title mb-4 text-4xl font-bold text-yellow-400 mt-10">
          Our Blogs
        </h1>
        <div className="question-part pt-16">
          <div>
            <h2 className="text-center text-3xl mb-4">
              How will you improve the performance of a React Application?
            </h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center text-center lg:px-12">
              <div className=" ">
                <p>
                  Since its introduction, React has changed the way front-end
                  developers think of building web apps. With virtual DOM, React
                  makes UI updates as efficient as they can ever be, making your
                  web app snappier.A modern front-end library like React doesn’t
                  magically make your app faster. It requires the developer to
                  understand how React works and how the components live through
                  the various phases of the component lifecycle.With React, you
                  can gain a lot of the performance improvements that it has to
                  offer by measuring and optimizing how and when your components
                  render. And, React provides just the tools and functionalities
                  necessary to make this easy.
                </p>
              </div>
              <div className="right-part">
                <img
                  className="question-img rounded-3 w-3/4 mx-auto"
                  src="https://www.xenonstack.com/hubfs/xenonstack-optimizing-react-application.png"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
        <div className="question-part pt-16">
          <div>
            <h2 className="text-center text-3xl mb-4">
              What are the different ways to manage a state in a React
              application?
            </h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 items-center lg:px-12">
              <div className="right-part">
                <img
                  className="question-img rounded-3 w-3/4 mx-auto"
                  src="https://www.freecodecamp.org/news/content/images/size/w2000/2022/02/how-to-manage-state-react.png"
                  alt=""
                />
              </div>
              <div>
                <p>
                  Managing state is arguably the hardest part of any
                  application. It's why there are so many state management
                  libraries available and more coming around every day (and even
                  some built on top of others... There are hundreds of "easier
                  redux" abstractions on npm). Despite the fact that state
                  management is a hard problem, I would suggest that one of the
                  things that makes it so difficult is that we often
                  over-engineer our solution to the problem.There's one state
                  management solution that I've personally tried to implement
                  for as long as I've been using React, and with the release of
                  React hooks (and massive improvements to React context) this
                  method of state management has been drastically simplified.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="question-part mt-10">
          <div>
            <h2 className="text-center text-3xl pt-16">
              How does prototypical inheritance work?
            </h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center text-center lg:px-12 ">
              <div>
                <p>
                  JavaScript is a prototype-based, Object Oriented programming
                  language. After the ES6 updates, JavaScript allowed for
                  “prototypal inheritance”, meaning that objects and methods can
                  be shared, extended, and copied. Sharing amid objects makes
                  for easy inheritance of structure (data fields), behavior
                  (functions / methods), and state (data values). JavaScript is
                  the most common of the prototype-capable languages, and its
                  capabilities are relatively unique. When used appropriately,
                  prototypical inheritance in JavaScript is a powerful tool that
                  can save hours of coding.
                </p>
              </div>
              <div className="right-part">
                <img
                  className="question-img rounded-3 w-3/4 mx-auto"
                  src="https://www.codeproject.com/KB/scripting/887551/PrototypalInheritance__1_.jpg"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
        <div className="question-part pt-16">
          <div>
            <h2 className="text-center text-3xl mb-4">
              What is a unit test? Why should write unit tests?
            </h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center text-center lg:px-12">
              <div>
                <p>
                  UNIT TESTING is a type of software testing where individual
                  units or components of a software are tested. The purpose is
                  to validate that each unit of the software code performs as
                  expected. Unit Testing is done during the development (coding
                  phase) of an application by the developers. Unit Tests isolate
                  a section of code and verify its correctness. A unit may be an
                  individual function, method, procedure, module, or object.
                </p>
              </div>
              <div className="right-part">
                <img
                  className="question-img rounded-3 w-3/4 mx-auto"
                  src="https://www.guru99.com/images/unit-testing.png"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
        <div className="question-part mt-10">
          <div>
            <h2 className="text-center text-3xl mb-4">
              You have an array of products. Each product has a name, price,
              description, etc. How will you implement a search to find products
              by name?
            </h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 items-center lg:px-12">
              <div className="right-part">
                <img
                  className="question-img rounded-3 w-3/4 mx-auto"
                  src="https://i.ibb.co/HKHWxqX/search-product.png"
                  alt=""
                />
              </div>
              <div>
                <p>
                  The above is how to find the product by name from an array.
                  First i will make a search field and from there i will take
                  the field value. Then we will filter the product in the array
                  that contains the product and try to includes the product name
                  with the value of search input . And i will set a state that
                  matches. In this way if you want you can search for the
                  product according to the name of the product
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blogs;
