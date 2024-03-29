import { NgModule } from '@angular/core';
import { CurrentTrainingComponent } from './current-training/current-training.component';
import { NewTrainingComponent } from './new-training/new-training.component';
import { PastTrainingsComponent } from './past-trainings/past-trainings.component';
import { TrainingComponent } from './training.component';

import { SharedModule } from '../shared/shared.module';
import { StopTrainingComponent } from './current-training/stop-traing.component';
import { TrainingRoutingModule } from './training-routing.module';

@NgModule({
  declarations: [
    CurrentTrainingComponent,
    NewTrainingComponent,
    PastTrainingsComponent,
    TrainingComponent,
    StopTrainingComponent,
  ],
  imports: [SharedModule, TrainingRoutingModule],
  entryComponents: [StopTrainingComponent],
})
export class TrainingModule {}
