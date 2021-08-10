import React from 'react'
import './Free.scss'
import DesignedImg from '../../assets/images/illustration-laptop-desktop.svg'

const Free = () => {
   return (
      <div className="free">
         <div className="free-content">
            <img data-aos="zoom-in" src={DesignedImg} alt="" />
            <div className="free-paragraphs">
               <div>
                  <h3 data-aos="fade-down">Free, open, simple</h3>
                  <p data-aos="fade-down">Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt quam voluptas repellat aperiam voluptatibus similique ipsa nemo commodi molestias dolor facilis aliquid recusandae ad obcaecati sequi vitae, molestiae, impedit maiores.</p>
               </div>
               <div>
                  <h3 data-aos="fade-down">Powerful tooling</h3>
                  <p data-aos="fade-down">Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt quam voluptas repellat aperiam voluptatibus similique ipsa nemo commodi molestias dolor facilis aliquid recusandae ad obcaecati sequi vitae, molestiae, impedit maiores.</p>
               </div>
            </div>

         </div>

      </div>
   )
}

export default Free
