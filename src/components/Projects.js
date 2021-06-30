import React, { useState, useEffect } from 'react'

function Projects() {
    const [ projects, setProjects ] = useState([])
    useEffect(() => {
        fetch('/projects')
            .then(res => res.json())
            .then(data => {
                console.log(data)
                setProjects(data)
            })
    },[])

    return (
        <div>
            {projects.map((project, i) => {
                return <li key={i}>{project.title}</li>
            })}
        </div>
    )
}

export default Projects
