import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { QuizzComponent } from './components/quizz/quizz.component';
import { StartComponent } from './pages/start/start.component';

const routes: Routes = [
  {path:'', component:StartComponent},
  {path:'quiz', component:QuizzComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
