import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SwissToSingleComponent } from './swiss-to-single.component';
import { SwissStageComponent } from './swiss-stage/swiss-stage.component';
import { SwissOpponentComponent } from './swiss-stage/swiss-opponent/swiss-opponent.component';
import { SwissMatchupComponent } from './swiss-stage/swiss-matchup/swiss-matchup.component';
import { LeaderBoardComponent } from './leader-board/leader-board.component';
import { SingleElimComponent } from './single-elim/single-elim.component';
import { SingleMatchupComponent } from './single-elim/single-matchup/single-matchup.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatGridListModule } from '@angular/material/grid-list';
import { HttpClientModule } from '@angular/common/http';
import { MatCardModule } from '@angular/material/card';
import { MatChipsModule } from '@angular/material/chips';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatTableModule } from '@angular/material/table';
import { SharedModule } from '../shared/shared.module';
import { FormsModule } from '@angular/forms';
import { SwissToSingleRoutingModule } from './swiss-to-single-routing.module';
import { MatDividerModule } from '@angular/material/divider';
import { MatTabsModule } from '@angular/material/tabs';



@NgModule({
  declarations: [
    SwissToSingleComponent,
    SwissStageComponent,
    SwissOpponentComponent,
    SwissMatchupComponent,
    LeaderBoardComponent,
    SingleElimComponent,
    SingleMatchupComponent,
  ],
  imports: [
    FormsModule,
    CommonModule,
    MatToolbarModule,
    MatButtonModule,
    MatGridListModule,
    MatCardModule,
    MatTableModule,
    MatChipsModule,
    MatInputModule,
    MatFormFieldModule,
    MatSelectModule,
    HttpClientModule,
    SharedModule,
    SwissToSingleRoutingModule,
    MatDividerModule,
    MatTabsModule,
  ]
})
export class SwissToSingleModule { }
