import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';

import { AccountService } from '@app/_services/account.service';

@Component({ templateUrl: 'add-edit.component.html' })
export class AddEditComponent implements OnInit {

    constructor() { }

    ngOnInit() {
        
    }

    
}