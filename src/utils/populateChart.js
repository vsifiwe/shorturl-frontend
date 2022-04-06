export let count = (data) => {
    let doneDevices = []
    let result = []

    data.map(d => {
        if (!doneDevices.includes(d.os)){
            let de = data.filter( dev => dev.os === d.os)
            result.push({"device": d.os, "amount": de.length})
            doneDevices.push(d.os)
        }
    })

    return result
}