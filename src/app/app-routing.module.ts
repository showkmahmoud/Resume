import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'alaa-muhammed', pathMatch: 'full' },
  {
    path: 'alaa-muhammed',
    loadChildren: () =>
      import('./elements/elements.module').then((m) => m.ElementsModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
