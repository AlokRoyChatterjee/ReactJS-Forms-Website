import React from "react";
import "./index.css";

export default function App() {
  return (
    <div class="form-container">
      <form class="register-form">
      
        <input id="form 1"class="form-field"type="text"placeholder="form 1" name="form1"
        />
        <input id="form 2"class="form-field"type="text"placeholder="form 1"name="form2"
        />
        <input id="form 3"class="form-field"type="text"placeholder="form 1" name="form3"
        />
       
        <button class="form-field" type="submit">
          This form
        </button>
      </form>
    </div>
  );
}
