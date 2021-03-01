import { DataSource } from '@angular/cdk/table';
import { Component, OnInit } from '@angular/core';
import { Depense } from 'src/app/models/depense';
import { DepenseService } from 'src/app/services/depense.service';

@Component({
  selector: 'app-list-depense',
  templateUrl: './list-depense.component.html',
  styleUrls: ['./list-depense.component.css']
})
export class ListDepenseComponent implements OnInit {

  depenses: Depense[] = [];

  filters = {
    keyword: ''
  }

  constructor(private _depenseService: DepenseService) { }

  ngOnInit(): void {
    this.listDepenses();
  }


  listDepenses(){
    this._depenseService.getDepenses().subscribe(
      data => this.depenses = this.filterDepenses(data)
      
    )
  }


  filterDepenses(depenses: Depense[]) {
    console.log(this.filters);
    return depenses.filter((e) => {
      return e.depense.toLowerCase().includes(this.filters.keyword.toLowerCase());
    })
  }

}
