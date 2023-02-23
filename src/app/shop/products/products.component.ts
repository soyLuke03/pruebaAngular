import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Categoria, CategoriaElement } from '../../_interfaces/categories';
import { AccountService } from '../../_services/account.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html'
})
export class ProductsComponent implements OnInit {

  param!:Params;
  constructor(private route:ActivatedRoute, private accS:AccountService) { 
    
  }


  productos!:Categoria

  ngOnInit(): void {


    


    let parametro = this.route.snapshot.params['_id'];

    this.route.params.subscribe((params: Params) => {
      this.param = params

      this.accS.getProducts(this.param._id).subscribe({
        next: resp => this.productos = resp
        
      })

  })}


}
