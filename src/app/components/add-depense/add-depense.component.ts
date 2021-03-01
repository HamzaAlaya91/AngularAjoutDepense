import { Component, OnInit } from '@angular/core';
import { Depense } from 'src/app/models/depense';
import { DepenseService } from 'src/app/services/depense.service';
import { ActivatedRoute, Router } from "@angular/router";

@Component({
  selector: 'app-add-depense',
  templateUrl: './add-depense.component.html',
  styleUrls: ['./add-depense.component.css']
})
export class AddDepenseComponent implements OnInit {

  depense: Depense = new Depense();

  constructor(private _depenseService: DepenseService,
              private _router: Router,
              private _activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    const isIdPresent = this._activatedRoute.snapshot.paramMap.has('id');
    if (isIdPresent){
      const id = +this._activatedRoute.snapshot.paramMap.get('id');
      this._depenseService.getDepense(id).subscribe(
        data => this.depense = data
      )
    }
  }

  saveDepense() {
    this._depenseService.saveDepense(this.depense).subscribe(
      data => {
        console.log('response', data);
        this._router.navigateByUrl("/depenses");
      }
    )
  }

  deleteDepense(id: number) {
    this._depenseService.deleteDepense(id).subscribe(
      data => {
        console.log('deleted response', data);
        this._router.navigateByUrl('/depenses');
      }
    )
  }

}
