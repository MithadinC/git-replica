import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { GitReposService } from '../git-repos.service';

@Component({
  selector: 'app-card-show',
  templateUrl: './card-show.component.html',
  styleUrls: ['./card-show.component.css']
})
export class CardShowComponent implements OnInit {

  data: any;

  constructor(private router: Router, private activatedRoute: ActivatedRoute, private gitReposService: GitReposService) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      const name: string = params['name'];
      this.searchByName(name);
    });
  }

  goToDetails(repo: any) {
    this.router.navigate(['details', repo.userName, repo.repoName])
  }

  searchByName(name: string) {
    this.gitReposService.getReposUrl(name).subscribe((data: any) => {
      let result = data.map((item: any) => {
        const obj = {
          repoName: item.name,
          userName: item.owner.login,
          openIssue: item.open_issues_count,
          imgUrl: item.owner.avatar_url
        };
        return obj;
      });
      this.data = result;
      // this.repoData.emit(result)
    });
  }

}
