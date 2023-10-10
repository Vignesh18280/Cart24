import React from 'react'
import './Addproj.css'

function Addproj() {
    return(
        <div>
            <div class="login-box">
            <h2>Add project</h2>
            <form>
                <div class="user-box">
                <input type="text" name="" required=""/>
                <label>title</label>
                </div>
                <div class="user-box">
                <input type="text" name="" required=""/>
                <label>description</label>
                </div>
                <div class="user-box">
                <input type="text" name="" required=""/>
                <label>price</label>
                </div>
                <div class="user-box">
                <input type="text" name="" required=""/>
                <label>rating</label>
                </div>
                <div class="user-box">
                <input type="text" name="" required=""/>
                <label>thumbnail</label>
                </div>

                <a href="#">
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                ADD
                </a>
            </form>
            </div>
        </div>
    );
}

export default Addproj;