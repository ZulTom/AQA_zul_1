import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule }    from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { JwtModule } from '@auth0/angular-jwt';
import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { DemocomponentComponent } from './democomponent/democomponent.component';
import { PsiImageComponent } from './psi-image/psi-image.component';
import { LoginComponent } from './login/login.component';
import { IndexComponent } from './index/index.component';
import {Routes,RouterModule} from '@angular/router';
import { AdminUiComponent } from './admin-ui/admin-ui.component';
import { SearchFunctionComponent } from './search-function/search-function.component';
import { SearchResultsComponent } from './search-results/search-results.component';
import { EditComponent } from './edit/edit.component';
import { AddeditorComponent } from './addeditor/addeditor.component';
import { Admin2Component } from './admin2/admin2.component';
import { SearchFunction2Component } from './search-function2/search-function2.component';
import { Edit2Component } from './edit2/edit2.component';
import { DeleteComponent } from './delete/delete.component';
import { AddComponent } from './add/add.component';
import { DeleteeditorComponent } from './deleteeditor/deleteeditor.component';
import { ChangepasswordComponent } from './changepassword/changepassword.component';
import { ForgotpasswordComponent } from './forgotpassword/forgotpassword.component';

const router: Routes = [
{path:'login',component:LoginComponent},
{path:'index',component:IndexComponent},
{path:'add_user',component:AddeditorComponent },
{path:'admin',component:Admin2Component },
{path:'search',component:SearchFunction2Component },
{path:'edit',component:Edit2Component },
{path:'delete',component:DeleteComponent },
{path:'add',component:AddComponent },
{path:'deleteuser',component:DeleteeditorComponent },
{path:'info',component:ChangepasswordComponent },
{path:'forgotpassword',component:ForgotpasswordComponent },
{path:'',redirectTo:'/index',pathMatch:'full'}
]

export function tokenGetter() {
  return localStorage.getItem('access_token');
}



@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    DemocomponentComponent,
    PsiImageComponent,
    LoginComponent,
    IndexComponent,
    AdminUiComponent,
    SearchFunctionComponent,
    SearchResultsComponent,
    EditComponent,
    AddeditorComponent,
    Admin2Component,
    SearchFunction2Component,
    Edit2Component,
    DeleteComponent,
    AddComponent,
    DeleteeditorComponent,
    ChangepasswordComponent,
    ForgotpasswordComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    RouterModule.forRoot(router),
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    JwtModule.forRoot({
      config: {
        tokenGetter: tokenGetter,
        whitelistedDomains: ['http://202.160.1.102:8084/api'],
        blacklistedRoutes: ['localhost:3001/auth/'],
        throwNoTokenError: true,
        skipWhenExpired: true
      }
    })

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
