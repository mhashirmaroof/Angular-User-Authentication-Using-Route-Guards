import { Routes } from "@angular/router"
import { HomeComponent } from "./home/home.component"
import { LoginComponent } from "./user/login/login.component"
import { RegisterComponent } from "./user/register/register.component"
import { UserComponent } from "./user/user.component"
import { AuthGuard } from "./authguard/auth.guard"

export const appRoutes: Routes= [
    { path:'home', canActivate:[AuthGuard] , component : HomeComponent},
 { path:'', component : UserComponent,
 children : [
   { path:'register', component : RegisterComponent},
   { path:'login', component : LoginComponent}
  ]},
  { path: '', redirectTo:'/login', pathMatch:'full'},

]