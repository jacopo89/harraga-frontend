export const getAccessorElementsNoIndex = (accessor:string) =>{
    return accessor.split(".").map(item => removeIndex(item) )
}

export const getAccessorElements = (accessor:string) =>{
    return accessor.split(".")
}

const regexpModifications = /\[.*?\]/g;
const removeIndex = (accessor:string) => {
    const matchedValues = accessor.match(regexpModifications)
    if(matchedValues){
        let initialAccessor = accessor;
        matchedValues.forEach(matchedValue =>  initialAccessor= accessor.replaceAll(matchedValue,""))
        return initialAccessor;
    }
    return accessor
}

export const getNestedValue = (accessor:string,obj:any) => {
    console.log("accessor",accessor)
    return getAccessorElements(accessor).reduce((previousValue, currentValue) => {
        if(previousValue) return previousValue[currentValue];
        return undefined
    },obj)
}
