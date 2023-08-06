/* eslint-disable import/no-anonymous-default-export */
import requests from "./httpServices";
class ReviewerServices {
    getReviewer(){
        return requests.get('/reviewer');
    }
    postReviewer(body) {
        console.log(body);
        return requests.post('/reviewer', body);
    }
    getReviewerByEmail(body){
        console.log('body',body);
        return requests.post('/reviewer/get-reviewer', body);
    }
}


export default  new ReviewerServices();