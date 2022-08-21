// eslint-disable-next-line
import React from "react";
function Footer(){

    var currentYear= new Date().getFullYear(); 

     return(
      
        <footer>
          <p>
         Copyright <i class="fa fa-copyright"></i> {currentYear} Syed Hassan
         </p> 

        </footer>
    
     )

};

export {Footer};