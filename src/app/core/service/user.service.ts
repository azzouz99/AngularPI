import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { User } from '../Model/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private url = 'http://localhost:8083/api/user';
  httpOptions = {
    headers: new HttpHeaders({
      'Authorization': 'Bearer ' + localStorage.getItem('Token')
    })
  };
  
          



  constructor(private http: HttpClient) { }
 
  
  create(data: any): Observable<any> {
    
    return this.http.post(this.url+"/addUser", data);
  }
  
  getAll(): Observable<User[]> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Authorization': `Bearer ${localStorage.getItem('Token')}`
      })
    };

    return this.http.get<User[]>(`${this.url}/getallUsers`, httpOptions);
  }

  

login(data: any): Observable<any> {
  return this.http.post(this.url+"/login", data).pipe(
    map((response: any) => {
      // If necessary, you can access the JSON response here
      // by calling response.json()
      console.log(response.token);
      localStorage.setItem('Token', response.token);

      return response;
    })
  );
}
delete(id_user: any): Observable<Object> {
  return this.http.delete(this.url + `/deleteUser/${id_user}`);
}





currentUser(): Observable<User> {
  console.log(localStorage.getItem("Token"))
 console.log()
  return this.http.get<User>(this.url+"/currentUser", this.httpOptions);
}
get(mail: any): Observable<User> {
  const httpOptions = {
    headers: new HttpHeaders({
      'Authorization': `Bearer ${localStorage.getItem('Token')}`
    })
  };

  return this.http.get<User>(this.url+"/getuserbymail/"+mail,httpOptions);
}

logout():Observable<any>{
  localStorage.removeItem('Token');

  return this.http.post(this.url+"/logout",this.httpOptions);
  }

  sendResetPasswordEmail(email: string) {
    const url = `http://localhost:8083/api/user/send-reset-password?email=${email}`;
    

    return this.http.post(url, null, { responseType: 'text' }).pipe(
    map((response: any) => {
      // If necessary, you can access the JSON response here
      // by calling response.json()
      console.log(response);
      localStorage.setItem('TokenRest', response);

      return response;
    })
  );
  }
  resetPassword( password: string): Observable<string> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };
    const url = `${this.url}/reset-password`;
    const token=localStorage.getItem('TokenRest');
    console.log(token,password);
    const body = { token, password };
    return this.http.post<string>(`http://localhost:8083/api/user/reset-password?token=${token}&password=${password}`,null);
  }
  
  getCurrentUser(): Observable<User> {
    return this.http.get<User>(this.url+"/currentUser",this.httpOptions);
  }


}
