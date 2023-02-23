import { Component, OnInit } from '@angular/core';
import { AccountService } from '../../_services/account.service';
import { Categoria } from '../../_interfaces/categories';
import { Router } from '@angular/router';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html'
})
export class CategoriesComponent implements OnInit {

  constructor(private accS:AccountService, private router:Router) { }

  categorias!:Categoria;
  loggedUser:string|null = ""
  rol:string|undefined = ""
  ngOnInit(): void {

    if(localStorage.getItem('user')!=null)
    this.loggedUser = localStorage.getItem('user');
    this.rol = this.loggedUser?.split('"')[5]

    this.accS.getCategories().subscribe({
      next: resp => this.categorias = resp
    })
  }


  navigate(params:string){
    this.router.navigate(['/products'], { queryParams: { categoria : params } });
  }
}
