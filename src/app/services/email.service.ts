import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Post {
  id: number;
  title: string;
  body: string;
  userId: number;
}

@Injectable({
  providedIn: 'root'
})
export class EmailService {

  private apiUrl = 'https://ms-group-backend.vercel.app/api/email';

  constructor(private http: HttpClient) { }

  createPost(post: Omit<any, 'id'>): Observable<any> {
    console.log(post);
    
    return this.http.post<any>(this.apiUrl, post);
  }
}
