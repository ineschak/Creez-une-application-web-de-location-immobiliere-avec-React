import picture1 from  '../assets/picture1.png'
import "../styles/index.css";
import logement from '../assets/logement.png'
function body() {
   return (
       <section>
           <img src={picture1} alt='' /> 
           <img className='logement' src={logement} alt='' />           
       </section>
       )
}


export default body