import axios from 'axios'
var urlparser = require('url-parse')
var config={}
import {saveAs} from 'file-saver'
let zipFile=''
export default async function (path) {
   
    const arr=path
    console.log(arr)
    

     await axios.post('https://3idvrt9tvc.execute-api.us-east-1.amazonaws.com/default/S3Zipper?path=["'+`${arr.join('","')}"]`).then(async res=>{
        console.log(res.data)
        zipFile = res.data
    await axios.post('https://z8hr5ej4dj.execute-api.us-east-1.amazonaws.com/default/s3ziperreader?folder="'+`${res.data}"`)
    .then(
        async ()=>{
            console.log("Zipped")
            saveAs('https://awss3zipper.s3.amazonaws.com/'+`${zipFile}.zip`,"images.zip")
        })


     })
     
}