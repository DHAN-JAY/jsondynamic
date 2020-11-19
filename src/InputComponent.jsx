import React, { useState } from 'react'

const InputComponent = ({
    jobj,
    setFomData,
    onSubmit
}) => {
    const [value, setValue] = useState(jobj.value || '')

    return (
        <div className="inputContainer">
            <input
                className="inputStye"
                id={jobj.id}
                type={jobj.type || 'text'}
                name={jobj.name}
                value={value}
                onChange={(evt) => {
                    setValue(evt.target.value)
                    setFomData(jobj.name, evt.target.value)
                }}
                onClick={
                    () => {
                        if(jobj.type === "button" && onSubmit){
                            onSubmit()
                        }
                    }
                }
            />
        </div>
    )
}

export default InputComponent