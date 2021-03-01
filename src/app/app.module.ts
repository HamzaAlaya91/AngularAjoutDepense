import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule} from "@angular/common/http";
import { RouterModule, Routes } from "@angular/router";
import {FormsModule } from "@angular/forms";
import {MatButtonModule} from '@angular/material/button';
import {MatTableModule} from '@angular/material/table';

import { AppComponent } from './app.component';
import { ListDepenseComponent } from './components/list-depense/list-depense.component';
import { AddDepenseComponent } from './components/add-depense/add-depense.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

const routers: Routes = [
  {path:'depenses', component: ListDepenseComponent },
  {path:'adddepense', component: AddDepenseComponent },
  {path:'editdepense/:id', component: AddDepenseComponent },
  {path:'', redirectTo: '/depenses', pathMatch: 'full' }
];

@NgModule({
  declarations: [
    AppComponent,
    ListDepenseComponent,
    AddDepenseComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(routers),
    BrowserAnimationsModule,
    MatButtonModule,
    MatTableModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
