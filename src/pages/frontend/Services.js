import React from 'react'
import ServicCard from '../../components/serviceCard/ServiceCard'
import ServiceData from '../../constant/serviceData/serviceData'
export default function Services() {
  return (
    <div className="container">
      <div className="row">
        <div className="col sericCol">
          <div className="serviceHadding">
            <h1>SERVICES</h1>
          </div>
          <div className="service_P">
            <p>Delivering creative and high-performance web and mobile solutions that exceed your expectations and drive your business forward.</p>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-md-12 mx-auto">
          <div className="row">
            {ServiceData.map((items, index) => {
              return <ServicCard
                key={index}
                icon={items.icon}
                title={items.title}
                paragraph={items.paragraph}
              />
            })
            }
          </div>
        </div>
      </div>

    </div>

  )
}
