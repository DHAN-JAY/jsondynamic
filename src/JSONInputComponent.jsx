import React from 'react'

const JSONInputComponent = ({
    setJsonValue
}) => {

    return (
        <div className="jsonInputContainer">
            <textarea 
                className="inputField"
                onChange={(evt) => {
                        try{
                                JSON.parse(evt.target.value)
                                setJsonValue(evt.target.value)
                        }catch(error){
                                console.log(error)
                        }
                    }
                }
            />
        </div>
    )
}

export default JSONInputComponent