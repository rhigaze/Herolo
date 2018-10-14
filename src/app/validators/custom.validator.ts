import { AbstractControl, ValidationErrors, ValidatorFn,AsyncValidatorFn } from '@angular/forms';
import { DataService } from './../data.service'; 
import { map } from 'rxjs/operators';   
export class CustomValidator {
   

    static uniquTitleValidator( customerService:DataService,movieId:string) {
        return (control: AbstractControl)   => { 
            if(customerService.titleIsExist(control.value,movieId))  return {"titleIsExist":true} 
            return null;
         
        }
    }
    static dateValidator() {
        return (control: AbstractControl)   => {  
            if(control.value &&control.value._elRef.nativeElement.value.length < 4) return {"dateInvalid":true}  
            return null; 
        }
    }
 
}
