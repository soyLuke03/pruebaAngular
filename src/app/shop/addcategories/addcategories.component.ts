import { Component, OnInit } from '@angular/core';
import { AccountService } from '../../_services/account.service';

@Component({
  selector: 'app-addcategories',
  templateUrl: './addcategories.component.html'
})
export class AddcategoriesComponent implements OnInit {

  constructor(private accS:AccountService) { }

  ngOnInit(): void {
  }

  nombre:string = ""


  save(){
    this.accS.addCategory(this.nombre).subscribe({
      next: resp => console.log(resp)
      
    })
  }
}
