import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { GitRepo } from '../models/git-repositories-model';
import { Observable } from 'rxjs';
import * as moment from 'moment';

@Injectable({ providedIn: "root" })
export class GitRepositoriesService {

  //current date - 3 mounths
  date = moment().subtract(3, 'months').format("YYYY-MM-DD");

  /*
   * API URL VARIABLE
   */
  private apiURL = 'https://api.github.com/search/repositories?q=created:>' +this.date+'&sort=stars&order=desc&page=';

  constructor(private http: HttpClient) { }

  /*
  * GET ALL GIT REPOSITORIES FUNCTION
  */

  getAllGitRepo(event = 0): Observable<GitRepo[]> {
    return this.http.get<GitRepo[]>(this.apiURL+event);
  }

}
