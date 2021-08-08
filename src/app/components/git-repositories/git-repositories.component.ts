import { Component, OnInit } from '@angular/core';
import { GitRepositoriesService } from '../../services/git-repositories-service';

@Component({
  selector: 'app-git-repositories',
  templateUrl: './git-repositories.component.html',
  styleUrls: ['./git-repositories.component.css']
})
export class GitRepositoriesComponent implements OnInit {
  gitRepos=[];
  constructor(private gitRepoService:GitRepositoriesService) { }

  ngOnInit(): void {
    let datapush = [];
    this.gitRepoService.getAllGitRepo().subscribe(
      data =>
      {
          datapush.push(data['items']);
        this.gitRepos = datapush[0];
        console.log(this.gitRepos);
      });


  }

  //get all git repositories pagination function
  OnGetAllGitRepo(event) {
    let datapush = [];
    console.log(this.gitRepoService.getAllGitRepo());
    this.gitRepoService.getAllGitRepo(event.pageIndex).subscribe(
      data => {
        datapush.push(data['items']);
        this.gitRepos = datapush[0];
        console.log(this.gitRepos);
      });
  }

}
