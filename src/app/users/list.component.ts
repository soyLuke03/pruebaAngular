import { Component, OnInit } from '@angular/core';
import { first } from 'rxjs/operators';

import { AccountService } from '@app/_services/account.service';
import { Usuario } from '@app/_interfaces/user';

@Component({ templateUrl: 'list.component.html' })
export class ListComponent implements OnInit {
    users?: Usuario[];


    loggedUser:string|null = ""
    rol:string|undefined = ""

    constructor(private accountService: AccountService) {}

    ngOnInit() {
        this.accountService.getAll()
            .pipe(first())
            .subscribe(users => {
                this.users = users;
            })
    
    if(localStorage.getItem('user')!=null)
        this.loggedUser = localStorage.getItem('user');
        this.rol = this.loggedUser?.split('"')[5]
        
    }
    
    delete(id:string){
        this.accountService.delete(id).subscribe({
            next: resp => console.log(resp)
            
        })
    }

}