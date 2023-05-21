import { Component, OnInit } from '@angular/core';
import { FormGroup , FormControl, Validators, ValidationErrors, AbstractControl, ValidatorFn} from '@angular/forms';
@Component({
  selector: 'app-media-item-form',
  templateUrl: './media-item-form.component.html',
  styleUrls: ['./media-item-form.component.css']
})
export class MediaItemFormComponent implements OnInit{
  form :FormGroup = new FormGroup({});

  ngOnInit(){
    this.form = new FormGroup({
      medium: new FormControl('Series'),
      name : new FormControl('', Validators.compose([
        Validators.required,
        Validators.pattern('[\\w\\-\\s\\/]+')
      ])),
      category : new FormControl(),
      year : new FormControl('', this.yearRangeValidator()),
    });

  }
  

  onSubmit(mediaItem: any){
    console.log(mediaItem.controls);
  }

  yearRangeValidator(): ValidatorFn | null {
    return (control: AbstractControl): ValidationErrors | null => {
      const year = parseInt(control.value, 10);
      const minYear = 1900;
      const maxYear = 2100;
  
      if (isNaN(year) || year < minYear || year > maxYear) {
        return { yearRange: true };
      }
  
      return null;
    };
  }
}
