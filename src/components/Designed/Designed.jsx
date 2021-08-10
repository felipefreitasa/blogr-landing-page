import React from 'react'
import './Designed.scss'
import DesignedImg from '../../assets/images/illustration-editor-desktop.svg'

const Designed = () => {
   return (
      <div className="designed">
         <h2 data-aos="fade-down">Designed for the future</h2>
         <div className="designed-content">
            <div className="designed-paragraphs">
               <div>
                  <h3 data-aos="fade-down">Introducing an extensible editor</h3>
                  <p data-aos="fade-down">Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt quam voluptas repellat aperiam voluptatibus similique ipsa nemo commodi molestias dolor facilis aliquid recusandae ad obcaecati sequi vitae, molestiae, impedit maiores.</p>
               </div>
               <div>
                  <h3 data-aos="fade-down">Introducing an extensible editor</h3>
                  <p data-aos="fade-down">Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt quam voluptas repellat aperiam voluptatibus similique ipsa nemo commodi molestias dolor facilis aliquid recusandae ad obcaecati sequi vitae, molestiae, impedit maiores.</p>
               </div>
            </div>
            <img data-aos="zoom-in" src={DesignedImg} alt="" />
         </div>

      </div>
   )
}

export default Designed
