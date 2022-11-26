import React from 'react';
import './Blog.css'
const Blog = () => {
    return (
        <div>
            <h2 className='font-bold text-sky-500 my-4 text-center text-4xl'>Blog Section</h2>
            <div>
                <div className='QA'>
                    <h3 className='font-bold text-2xl'>Question-01 : What are the different ways to manage a state in a React application?</h3>
                    <p>SQL is the programming language used to interface with relational databases. (Relational databases model data as records in rows and tables with logical links between them). NoSQL is a class of DBMs that are non-relational and generally do not use SQL.SQL databases represent massive communities, stable codebases, and proven standards. Multitudes of examples are posted online and experts are available to support those new to programming relational data.At a high level, SQL and NoSQL comply with separate rules for resolving transactions. RDBMSs must exhibit four “ACID” properties:</p>
                </div>
                <div className='QA'>
                    <h3 className='font-bold text-2xl'>Question-02 : How does prototypical inheritance work?</h3>
                    <p>JSON Web Token (JWT) is an open standard (RFC 7519) that defines a compact and self-contained way for securely transmitting information between parties as a JSON object. This information can be verified and trusted because it is digitally signed. Claims are used to transmit information between two parties. What these claims are depends on the use case at hand. For example, a claim may assert who issued the token, how long it is valid for, or what permissions the client has been granted.A JWT is a string made up of three parts, separated by dots (.), and serialized using base64. In the most common serialization format, compact serialization, the JWT looks something like this: xxxxx.yyyyy.zzzzz.</p>
                </div>
                <div className='QA'>
                    <h3 className='font-bold text-2xl'>Question-03 : What is a unit test? Why should we write unit tests?</h3>
                    <p>JavaScript is a simple programming language that can be used with any browser that has the JavaScript Engine installed. Node. js, on the other hand, is an interpreter or execution environment for the JavaScript programming language.Javascript is a programming language that is used for writing scripts on the website. NodeJS is a Javascript runtime environment. 2. Javascript can only be run in the browsers.To summarize, Node. js is a cross-platform JavaScript runtime environment for servers and applications. It is built on a single-threaded, non-blocking event loop, the Google Chrome V8 JavaScript engine, and a low-level I/O API</p>
                </div>
                <div className='QA'>
                    <h3 className='font-bold text-2xl'>Question-04 : React vs. Angular vs. Vue?</h3>
                    <p> NodeJS receives multiple client requests and places them into EventQueue. NodeJS is built with the concept of event-driven architecture. NodeJS has its own EventLoop which is an infinite loop that receives requests and processes them.As is, node. js can process upwards of 1000 requests per second and speed limited only to the speed of your network card. Note that it's 1000 requests per second not clients connected simultaneously. It can handle the 10000 simultaneous clients without issue. </p>
                </div>
            </div>

        </div>
    );
};

export default Blog;