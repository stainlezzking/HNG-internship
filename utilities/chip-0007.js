const teamList = require("./teamListing")

module.exports = class ChIP0007 {
    constructor(member, attArray, total){
        this.format = "CHIP-0007",
        this.name = member.Name,
        this.description = member.Description,
        this.minting_tool = teamList.find(v=> v.spot >= Number(member['Series Number'])).name,
        this.sensitive_content = false,
        this.series_number = member['Series Number'],
        this.series_total = total,
        this.attributes= attArray,
        this.collection = {
            name : "",
            id : "",
            attributes : [
                {
                    type : "",
                    value : ""
                }
            ]
        }
    }
}