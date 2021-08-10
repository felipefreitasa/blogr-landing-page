import React from 'react'
import './State.scss'
import Phones from '../../assets/images/illustration-phones.svg'

const State = () => {
   return (
      <div className="state">
         <img data-aos="zoom-in" src={Phones} alt="Phones Illustration" />
         <div>
            <h3 data-aos="fade-down">State of the Art Infrastructure</h3>
            <p data-aos="fade-down">Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt quam voluptas repellat aperiam voluptatibus similique ipsa nemo commodi molestias dolor facilis aliquid recusandae ad obcaecati sequi vitae, molestiae, impedit maiores.</p>
         </div>
      </div>
   )
}

export default State
