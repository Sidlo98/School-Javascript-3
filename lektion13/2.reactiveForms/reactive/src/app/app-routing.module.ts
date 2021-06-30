import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FromBuilderComponent } from './views/from-builder/from-builder.component';
import { FromControlComponent } from './views/from-control/from-control.component';
import { FromGroupComponent } from './views/from-group/from-group.component';

const routes: Routes = [
  {
    path: '',
    component: FromControlComponent,
  },
  {
    path: 'group',
    component: FromGroupComponent,
  },
  {
    path: 'builder',
    component: FromBuilderComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
