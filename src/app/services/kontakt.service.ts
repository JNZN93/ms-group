import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Post {
  name: string;
  email: string;
  subject: string;
  message: string;
}

@Injectable({
  providedIn: 'root'
})
export class KontaktService {

  private apiUrl = 'https://ms-group-backend.vercel.app/api/kontakt';

  constructor(private http: HttpClient) { }

  createPost(post: Omit<any, 'id'>): Observable<any> {
    console.log(post);
    
    return this.http.post<any>(this.apiUrl, post);
  }
}
