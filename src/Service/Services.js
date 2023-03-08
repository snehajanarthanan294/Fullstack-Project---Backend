import axios  from "axios";
const HOSPITAL_API_BASE_URL = "http://localhost:8080/"

class Services{
    saveSong(music)
    {
    return axios.post(HOSPITAL_API_BASE_URL + "add",music);
    } 
    
    showSong() {
        return axios.get(HOSPITAL_API_BASE_URL +"show");
    }

    delete(id) {
    return axios.delete(HOSPITAL_API_BASE_URL + "delete/" + id);
    }

    getById(id) {
    return axios.get(HOSPITAL_API_BASE_URL + "get/" + id);
    }

    update(id, album){
        return axios.put(HOSPITAL_API_BASE_URL + "update/" + id,album);
    }
        
}

export default new Services();