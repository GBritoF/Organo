import Collaborator from "../Collaborator"
import "./Team.css"

const Team = (props) => {
    return(
        props.collaborators.length > 0 && 
        <section
         style={{backgroundColor: props.primaryColor}}
         className="team">
            <h3 style={ {borderColor: props.secondColor} }> {props.name} </h3>
            <div className="collaborators">
            
                {props.collaborators.map(collaborator => 
                <Collaborator 
                    name={collaborator.name} 
                    office={collaborator.office} 
                    image={collaborator.image}
                />)}
                
            </div>
        </section> 
    )
}

export default Team