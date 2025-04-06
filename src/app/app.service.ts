import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

var baseurl = "http://localhost:3000"

@Injectable({
  providedIn: 'root',
})
export class AppService {
  constructor(private http: HttpClient) { }

  // Send the user message to the backend
  // sendMessage(user: any): Observable<any> {
  //   return this.http.post(`${baseurl}/message`, user); // Sending POST request to the backend
  // }

  // Example of another method you already have
  getdata() {
    // return this.http.get(this.url);
    let url = "http://localhost:3000/usersmessage/";
    return this.http.get(url);
};

}
