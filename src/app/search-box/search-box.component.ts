import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { GitReposService } from '../git-repos.service';

@Component({
  selector: 'app-search-box',
  templateUrl: './search-box.component.html',
  styleUrls: ['./search-box.component.css']
})
export class SearchBoxComponent implements OnInit {

  @Output() repoData = new EventEmitter<any>();
  searchName: string = "";

  constructor(private gitReposService: GitReposService) { }

  ngOnInit(): void {

  }

  searchByName() {
    this.gitReposService.getReposUrl(this.searchName).subscribe((data: any) => {
      let result = data.map((item: any) => {
        const obj = {
          repoName: item.name,
          userName: item.owner.login,
          openIssue: item.open_issues_count,
          imgUrl: item.owner.avatar_url
        };
        return obj;
      });
        this.repoData.emit(result)
    });
  }


}
