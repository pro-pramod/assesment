import { Component, OnInit } from '@angular/core';
import userData from './../../assets/userData.json'
import { ComponentService } from '../component.service';
@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  userData: Array<any> = (userData as any);

  constructor(private service : ComponentService){

  }

  ngOnInit(): void {
    this.userData = this.userData.map((e:any) => {
      if(e.isActive){
        e['status'] = 'Active'
      } else {
        e['status'] = 'Inactive'
      }
      return e;
    })
    this.onFilter();
  }



  onFilter(){
    // if(event.toLowerCase().includes('active')){
    //   this.userData = this.userData.filter(e => {      
    //     if(e.status.includes(event)){
    //       return e;
    //     } else {
    //       return;
    //     }
    //    });
    // } else {
    //   this.userData = (userData as any);
    // }

    this.service.subject.subscribe((event : any)  => {      
      if(event.toLowerCase().includes('active')){
          this.userData = this.userData.filter(e => {      
            if(e.status.includes(event)){
              return e;
            } else {
              return;
            }
           });
        } else {
          this.userData = (userData as any);
        }
    });
   
  }

  onSearch(event:any){        
    if(event){
      this.userData = this.userData.filter(e => {      
        if(e.name.includes(event) || e.phone.includes(event) ){
          return e;
        } else {
          return;
        }
       });
    } else {
      this.userData = (userData as any);
    }
  }
}
