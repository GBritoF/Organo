import "./TextField.css"

const TextField = (props) => {

    // let value = ''
    

    const whenTyped = (event) => {
        props.changed(event.target.value)
    }

    return(
        <div className="field-text">
            <label 
                htmlFor={props.value}
            >
                {props.label}
            </label>
            <input
            value={props.value}
            onChange={whenTyped}
            required={props.mandatory}
            placeholder={props.placeholder} id={props.id}
            />
        </div>
    )
}

export default TextField