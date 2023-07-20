import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ComponentService } from '../component.service';

@Component({
  selector: 'app-user-search-list',
  templateUrl: './user-search-list.component.html',
  styleUrls: ['./user-search-list.component.css']
})
export class UserSearchListComponent implements OnInit{
  search:any = undefined;
  filter:any = '';
  @Output() emitSearch = new EventEmitter();
  @Output() emitFilter = new EventEmitter();

  constructor(private service : ComponentService){}

  ngOnInit(): void {
  }

  onSearchChange(){ 
    this.emitSearch.emit(this.search ? this.search : null)
  }

  onchangeFilter() {    
    // this.emitFilter.emit(this.filter)
    this.service.subject.next(this.filter)
  }

}
