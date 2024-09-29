import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Lenses } from 'src/app/_Models/lenses.model';
import { LensesService } from 'src/app/_Services/lenses.service';

@Component({
  selector: 'app-lenses-list',
  templateUrl: './lenses-list.component.html',
  styleUrls: ['./lenses-list.component.css']
})
export class LensesListComponent implements OnInit {
  lenses?: Lenses[];
  constructor(private lensesService: LensesService,

    private router:Router) { }

  ngOnInit(): void {
    this.getLenses();
  }
  private getLenses(){

    this.lensesService.getLensesList().subscribe(data => {

      this.lenses = data;

    });

  }

  updateLenses(){

    this.router.navigate(['update-lenses']);



  }

  deleteLenses(){

    /*this.lensesService.deleteLenses().subscribe(data => {

      console.log(data);

      this.getLenses();

    })*/

  }

  lensesDetails(){

    this.router.navigate(['lensesDetails']);

     

    }

  }


