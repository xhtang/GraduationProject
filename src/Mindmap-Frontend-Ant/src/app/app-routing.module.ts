import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const appRoutes: Routes = [
  { path: '',   redirectTo: '/main', pathMatch: 'full' },
  { path: '**', redirectTo: '/main' }
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(
      appRoutes,
      {
        'useHash': true,
        // enableTracing: true
      } // enableTracing: debugging purposes only
    )
  ],
  exports: [
      RouterModule
  ]
})
export class AppRoutingModule { }
