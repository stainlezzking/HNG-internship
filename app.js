const path = require('path')
const hash = require('hash.js')
const fs = require("fs")
const Papa = require("papaparse")
const CHIP0007 = require('./utilities/chip-0007')


   fs.readFile(path.resolve(__dirname, "csv", process.argv[2] || 'HNGi9 CSV FILE - Sheet1.csv' ), 'utf8',
    function(err,data){
        if(err){
            console.log("Couldn't find your file : Make sure to add the file in the CSV folder and run npm run convert <filename>.csv ")
             return process.exit()
        }
        Papa.parse(data, {
            header: true,
            skipEmptyLines : true,
            complete: function(results) {
                const allTeams = results.data.filter(d=> d.Filename)
                const Teams_Object_Array = allTeams.map(member=>{
                    let attArray = member.Attributes.split(',')
                            .map(str=> { return {trait_type : str.split(':')[0],  value : str.split(':')[1] }})
                    attArray.unshift({trait_type: 'gender', value :  member.Gender })
                    return new CHIP0007(member, attArray, allTeams.length)
                })
                Teams_Object_Array.forEach((jsonObject, index)=>{
                    allTeams[index].hash = hash.sha256().update(JSON.stringify(jsonObject)).digest('hex')
                fs.writeFile(path.resolve(__dirname, "json", jsonObject.minting_tool + jsonObject.series_number +".json"),
                JSON.stringify(jsonObject),
                function(err, d){
                    if(err) {
                        console.log("an Error occured saving your file message - " + err.message)
                        return process.exit()
                        }
                        fs.writeFileSync(path.resolve(__dirname, "filename.output.csv"), Papa.unparse(allTeams))
                    })
            })
        }
    });
})
