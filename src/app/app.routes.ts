import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from './dashboard/home/home.component';
import {TableComponent} from './dashboard/table/table.component';
import {RootComponent} from './dashboard/root/root.component';
import {LoginComponent} from './page/login/login.component';


const routes: Routes = [
  {path: '', component: LoginComponent},
  {path: 'dashboard', component: RootComponent, children: [
    {path: '', component: HomeComponent},
      {path: 'table', component: TableComponent}
  ]}
];

export const routing = RouterModule.forRoot(routes);

