import { Component, OnInit, ViewChild } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';

import { AccountService } from '@app/_services/account.service';

@Component({ templateUrl: 'login.component.html' })
export class LoginComponent implements OnInit {
    loading = false;
    
    constructor(private accS:AccountService) { }

    ngOnInit() {
        
    }


    @ViewChild('myForm') myForm!: NgForm;

    initForm = {
        email: "",
        password: ""
    }


      notValid(campo: string): boolean{
        return this.myForm?.controls[campo]?.invalid &&
          this.myForm?.controls[campo]?.touched
      }
    
      
      save() {
        let email:string = this.myForm.controls['email'].value
        let pass:string = this.myForm.controls['password'].value

        this.myForm.resetForm({})
        this.accS.login(email,pass).subscribe({
            next : resp => console.log(resp)
        })
    
    }


   


}