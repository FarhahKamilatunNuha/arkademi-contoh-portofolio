import React, { Component } from "react";
import "./landing.css";
import TopName from "./components/topName";
import Description from "./components/description";
import Form from "./components/form";

class Landing extends Component{
    render(){
        return (
            <div class="wrapper with-image ">
            <div class="flex-wrapper">
                {/* topname */ }
                <TopName
                    name="Farhah"
                ></TopName>
                    {/* -- */}
                     {/* description */}
                    <Description/>
                     {/* -- */}
                      {/* form */}
                      <Form/>
                    
               
                     {/* -- */}
                      {/* scroll down */}

                <div class="flex-scroll">
                     {/* -- */}
                    <div>
                        <small>
                            Menggulir kebawah
                        </small>
                    </div>
                    <div class="flex-arrow-bottom">
                        <i class="fa fa-chevron-down" aria-hidden="true"></i>
                    </div>
                </div>
            </div>
            <div class="opacity">
            </div>
        </div>
        )
    }
}

export default Landing;