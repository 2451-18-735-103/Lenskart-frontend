import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Lenses } from 'src/app/_Models/lenses.model';
import { LensesService } from 'src/app/_Services/lenses.service';

@Component({
  selector: 'app-create-lenses',
  templateUrl: './create-lenses.component.html',
  styleUrls: ['./create-lenses.component.css']
})
export class CreateLensesComponent implements OnInit {
  lenses: Lenses=new Lenses();
  constructor(
    private lensesService: LensesService,
     private router:Router
    
    ) { }

  ngOnInit(): void {
  }
  saveLenses(){

    this.lensesService.createLenses(this.lenses).subscribe(data =>{

      console.log(data);

      this.goToLensesList();

    },

    error => console.log(error));

  }



  goToLensesList(){

    this.router.navigate(['/lenses']);

  }

  onSubmit(){

    console.log(this.lenses);

    this.saveLenses();

  }

}
