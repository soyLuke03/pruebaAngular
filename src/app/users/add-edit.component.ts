import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';

import { AccountService } from '@app/_services/account.service';

@Component({ templateUrl: 'add-edit.component.html' })
export class AddEditComponent implements OnInit {

    myForm: FormGroup = this.fb.group({
        nombre: [null, [Validators.required, Validators.minLength(4)]],
        correo: [null, [Validators.required, Validators.email]],
        rol: ["USER_ROLE", [Validators.required]],
        password: [null, [Validators.required, Validators.pattern("123123")]]
      })
      
      constructor(private fb: FormBuilder, private accS:AccountService) { }
    
      ngOnInit() {
      }
    
      isValidField(campo: string): boolean{
        return this.myForm?.controls[campo]?.invalid &&
          this.myForm?.controls[campo]?.touched
      }
    
      save(){
        this.myForm.markAllAsTouched()
        // console.log(this.myForm.value)

        this.accS.register(this.myForm.value).subscribe({
            next: resp => console.log(resp)
            
        })

      }

    
}