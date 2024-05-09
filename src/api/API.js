import axios from "axios";


export default class PostService {
    static async getAll(){
        let response = []
        let cache = JSON.parse(localStorage.getItem("freesound"))
        if (cache){
            response = cache
            // console.log("UPLOADED FROM CACHE")
            // console.log(response[0].id)
        }else{

            for (let x = 0; x < 20; x++) {
                // console.log(x+249504);

                await new Promise(r => setTimeout(r, 200));
                let a = await axios.get('https://api.discogs.com/releases/' + (x+249503),{
                    // timeout: 100
                }).then(res => {
                    if (res.data.videos) {
                        response.push(res.data);
                    }
                    // console.log(res.data.videos);
                })
            }
            // console.log("UPLOADED FROM NET")
            localStorage.setItem("freesound", JSON.stringify(response));
            }
        // console.log(response.data, 111)
        return response;
    }

    static async getById(id) {
        const response = await axios.get("https://api.discogs.com/releases/"+ id)
        return response.data;
    }
}