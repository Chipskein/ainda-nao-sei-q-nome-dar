export function VerifyIfObjHasKeys(obj,objKeys){
    if(!obj || !objKeys){
        return false
    }    
    if(!typeof obj==='object' || !Array.isArray(objKeys)){
        return false
    }
    if(objKeys.length==0||Object.keys(obj).length==0){
        return false
    }
    if(objKeys.length!=Object.keys(obj).length){
        return false
    }
    for(const key of objKeys){
        if(!obj[key]){
            return false
        }
    }
    return true
}