import { Component, OnInit } from '@angular/core';

import { User, Usuario } from '@app/_interfaces/user';
import { AccountService } from '@app/_services/account.service';

@Component({ templateUrl: 'home.component.html' })
export class HomeComponent implements OnInit {
    
    loggedUser:string|null = ""
    rol:string|undefined = ""
    user: Usuario | null;


    constructor(private accountService: AccountService) {
        this.user = this.accountService.userValue;
    }
    ngOnInit(): void {
        if(localStorage.getItem('user')!=null)
        this.loggedUser = localStorage.getItem('user');
        this.rol = this.loggedUser?.split('"')[5]
    }
    

    
}