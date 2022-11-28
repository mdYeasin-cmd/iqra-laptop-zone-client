import React from 'react';

const Blog = () => {
    return (
        <div className="max-w-[1140px] mx-auto">
            <h2 className="text-4xl text-center font-bold">Blog Page </h2>

            <h2 className="bg-red-700 text-white text-3xl font-medium rounded-sm mb-4 py-3 pl-3 mt-3">What are the different ways to manage a state in a React application?</h2>
            <h3 className="text-2xl">
                There are two different options for manage state in React Application - <br />
                1. useState React Hook <br />
                2. Redux <br />
            </h3>
            <h2 className="bg-red-700 text-white text-3xl font-medium rounded-sm mb-4 py-3 pl-3">How does prototypical inheritance work?</h2>
            <h3 className="text-2xl">
                Prototype Inheritance in JavaScript: Following bullet points will try to analyze the basics behind Prototype Inheritance in JavaScript- <br />

                1. Under the classical inheritance phenomenon, we create a new class that actually extends or reuses the properties or functions, or methods of another class that are used by several programming languages (like C, C++, Java, etc.) <br />
                2. JavaScript doesn’t use classical inheritance instead it uses the phenomenon called Prototype Inheritance. <br />
                3. In Prototype Inheritance, an object uses the properties or methods of another object via the prototype linkage. <br />
                4. All the JavaScript objects inherit properties and methods from a prototype (like Date objects inherit properties from Date.prototype and so on). <br />
            </h3>
            <h2 className="bg-red-700 text-white text-3xl font-medium rounded-sm mb-4 py-3 pl-3">What is a unit test? Why should we write unit tests?</h2>
            <h3 className="text-2xl">
                A unit test is a way of testing a unit - the smallest piece of code that can be logically isolated in a system. In most programming languages, that is a function, a subroutine, a method or property. The isolated part of the definition is important. In his book "Working Effectively with Legacy Code", author Michael Feathers states that such tests are not unit tests when they rely on external systems: “If it talks to the database, it talks across the network, it touches the file system, it requires system configuration, or it can't be run at the same time as any other test. <br /><br />
                One of the benefits of unit tests is that they isolate a function, class or method and only test that piece of code. Higher quality individual components create overall system resiliency. Thus, the result is reliable code.

                Unit tests also change the nature of the debugging process. To attempt a bug fix, programmers simply write a failing test, then iterate to make it pass without breaking a previous expectation. This process eliminates the manual loop of traditional debugging through set up, re-create, pause and inspect.

                Changing code to make it unit testable requires programmers to change how they work. Any code snippets written without unit tests are likely to be considered untestable, at least as individual units. Programmers that don't have to unit test tend to be change- and risk-averse.
            </h3>
            <h2 className="bg-red-700 text-white text-3xl font-medium rounded-sm mb-4 py-3 pl-3">React vs. Angular vs. Vue?</h2>
            <h3 className="text-2xl">
                Angular <br />
                Angular is a TypeScript-based JavaScript framework created by the Angular Team at Google in September 2016. Based on an earlier iteration called AngularJS that the same group of developers released in 2010, the Angular Framework continues to be maintained by Google as it has recently reached its fourteenth version. <br /><br />

                React <br />
                React is the most popular front-end JavaScript framework of today. It was created by Jordan Walke, a software engineer at Facebook (recently rebranded as Meta), in 2011 under FaxJs. Best used for designing dynamic and interactive user interfaces (UI). While its current stable version is 18.x, React is maintained by Meta along with a large community of developers and companies. <br /><br />

                Vue <br />
                Vue is another open-source JS Framework created by former Google employee Evan You in February 2014, mainly for building User Interfaces (UI) and Single Page Applications (SPA). A younger Framework that has only reached its third stable version, Vue is maintained by a team of professional developers under You’s leadership. <br /><br />
            </h3>

        </div>
    );
};

export default Blog;