import React from "react";
import {NavBar, Footer} from "./Nav";
import fountain from "../img/fountain.jpg";

export function About() {
    return (
        <Body />
    );
}

function Body() {
    return (
        <div>
            <NavBar />
            <div className="container">
                <h1 style={{marginTop:'48px'}}>About</h1>
                <p>This website was created by Mark, Katherine, Marco and Phuong</p>
                <h3>How it Works</h3>
                <p>
                On the class search page enter in a course that you want more information on. After you press search a list of information will appear
                with information on the class structure, grading policies, and other data on the class. On the professor search page you are able to enter in
                a professor you are interested in taking classes with and it will show you the classes that they have previously taught.
                </p>
                <h3>Our Goal</h3>
                <p>
                We want to provide students with information on the classes they are interested in taking that isn't easily accessible elsewhere. It is hard
                for students to find course information so we want this to be a source they can use to use to solve that problem. Typically students can't get
                this information until they are registered for a course and we want them to have access for it before they register.
                </p>
                <div className = "imageFooter">
                <img src={fountain} alt="Drumheller Fountain" />
                </div>
            </div>
            <Footer />
        </div>
    );
}
