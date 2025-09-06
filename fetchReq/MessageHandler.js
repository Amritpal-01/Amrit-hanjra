export const sendMessage = async (data) => {
    try{
        const res = await fetch("/api/handleDM", {
        method : "POST",
        headers : {
            "COntent-Type" : "application/json",
        },
        body : JSON.stringify(data)
    })

    if(!res.ok) return ({status : 500, meessage : "An Unexpected Error"});

    const stat = await res.json();

    return stat
    
    }catch{
        return ({status : 500, meessage : "Unable to connect to the server"});
    }
}