import { Component, OnInit } from '@angular/core';
import { GitReposService } from '../git-repos.service';

@Component({
  selector: 'app-search-box',
  templateUrl: './search-box.component.html',
  styleUrls: ['./search-box.component.css']
})
export class SearchBoxComponent implements OnInit {

  searchName: string = "";
  repoData: any;

  constructor(private gitReposService: GitReposService) { }

  ngOnInit(): void {

  }

  searchByName() {
    this.gitReposService.getReposUrl(this.searchName).subscribe((data: any) => {
      this.repoData = data.map((item: any) => {
        const obj = {
          repoName: item.name,
          userName: item.owner.login,
          openIssue: item.open_issues_count,
          imgUrl: item.owner.avatar_url
        };
        return obj;
      });
      console.log(this.repoData)
    });
  }


}
