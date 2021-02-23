import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { GitReposService } from '../git-repos.service';

@Component({
  selector: 'app-repo-details',
  templateUrl: './repo-details.component.html',
  styleUrls: ['./repo-details.component.css']
})
export class RepoDetailsComponent implements OnInit {

  username: string = '';
  details: any = {
    name: '',
    owner: {
      login: ''
    },
    pushed_at: ''
  };
  constructor(private router: Router, private activateRoute: ActivatedRoute, private gitRepoService: GitReposService) { }

  ngOnInit(): void {
    this.activateRoute.params.subscribe((params) => {
      this.username = params['name'];
      this.gitRepoService.getRepoDetails(this.username, params['reponame']).subscribe((data) => {
        this.details = data;
      });
    });
  }

  backToList() {
    this.router.navigate(['cardshow', this.username]);
  }



}
