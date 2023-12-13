/* eslint-disable import/no-anonymous-default-export */
import requests from "./httpServices";
class TrackServices {

    updatePaperAssigningReviewer(id,body) {
        console.log(id,body);
        return requests.patch(`reviewer/${id}`, body);
    }
    
}


export default  new TrackServices();