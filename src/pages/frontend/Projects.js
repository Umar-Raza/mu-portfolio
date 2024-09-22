import React from 'react'
import ProjectCard from '../../components/projectCard/ProjectCard';
import ProjectData from '../../constant/projectsDara/ProjectData'

export default function Projects() {
  return (
    <div className="container" id='project'>
      <div className="row">
        <div className="col">
          <div className="hadding">
            <h1 className='text-center'>PROJECTS</h1>
          </div>
          <div className="row">
            <div className="col-md-12 mx-auto ">
              <div className="row">
                {ProjectData.map((items, index) => {
                  return <ProjectCard
                    key={index}
                    img={items.img}
                    hadding={items.hadding}
                    webLink={items.webLink}
                    paragaraph={items.paragaraph}
                  />
                })
                }
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
