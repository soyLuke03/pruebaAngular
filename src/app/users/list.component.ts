import { Component, OnInit } from '@angular/core';
import { first } from 'rxjs/operators';

import { AccountService } from '@app/_services/account.service';
import { Usuario } from '@app/_interfaces/user';

@Component({ templateUrl: 'list.component.html' })
export class ListComponent implements OnInit {
    users?: Usuario[];

    constructor(private accountService: AccountService) {}

    ngOnInit() {
        this.accountService.getAll()
            .pipe(first())
            .subscribe(users => {
                this.users = users;
            })
    }

}