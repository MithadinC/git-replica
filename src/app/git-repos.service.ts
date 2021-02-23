import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable({
  providedIn:'root'
})
export class GitReposService {
  constructor(private http: HttpClient) {}
  getReposUrl(value:string) {
    return this.http.get(`https://api.github.com/users/${value}/repos`)
  }

}