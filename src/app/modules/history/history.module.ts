import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HistoryRoutingModule } from './history-routing.module';
import { HistoryPageComponent } from './pages/history-page.component';
import { SearchComponent } from './components/search/search.component';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '@shared/shared.module';


@NgModule({
  declarations: [
    HistoryPageComponent,
    SearchComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    HistoryRoutingModule,
    FormsModule
  ]
})
export class HistoryModule { }
