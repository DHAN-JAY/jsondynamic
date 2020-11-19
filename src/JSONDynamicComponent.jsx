import React, { useMemo, useState } from 'react'
import InputComponent from './InputComponent'

const JSONDynamicComponent = ({
    jsonValue
}) => {
    const [formData, setFomData] = useState({})
    const jsonObject = useMemo(() => {
        try{
            return JSON.parse(jsonValue)
        }catch(error){
            console.log(error)
            return [
                {
                    id: 'test',
                    name: "test",
                    type: "text",
                    value: "Djay"
                }
            ]
        }
    }, [jsonValue])

    if(!Array.isArray(jsonObject)){
        return null
    }

    return (
        <div className="jsonFormContainer">
           {Boolean(jsonObject && jsonObject.length) && 
                jsonObject.map((jobj, index) => {
                
                    return (
                        <InputComponent
                            key={index}
                            jobj={jobj}
                            setFomData={(key, value) => {
                                setFomData({
                                    ...formData,
                                    [key]: value
                                })
                            }}
                            onSubmit={() => {
                                let str = ''
                                Object.keys(formData).forEach(key => {
                                    str += '  '+key+': '+formData[key]
                                })
                                alert(str)
                            }}
                        />
                    )
                })
           }
        </div>
    )
}

export default JSONDynamicComponent                  