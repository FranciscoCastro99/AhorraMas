import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {OverlayModule} from '@angular/cdk/overlay';
import {CdkAccordionModule} from '@angular/cdk/accordion';
import {DragDropModule} from '@angular/cdk/drag-drop'
import {DialogModule} from '@angular/cdk/dialog';



import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './pages/login/login.component';
import { BtnComponent } from './components/btn/btn.component';
import { BoardsComponent } from './pages/boards/boards.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { BtnAgregarContadorComponent } from './components/btn-agregar-contador/btn-agregar-contador.component';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { BtnEliminarComponent } from './components/btn-eliminar/btn-eliminar.component';
import { HistorialComponent } from './pages/historial/historial.component';
import { PresupuestoDialogComponent } from './components/presupuesto-dialog/presupuesto-dialog.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    BtnComponent,
    BoardsComponent,
    NavbarComponent,
    BtnAgregarContadorComponent,
    BtnEliminarComponent,
    HistorialComponent,
    PresupuestoDialogComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    OverlayModule,
    AppRoutingModule,
    FontAwesomeModule,
    CdkAccordionModule,
    NgxChartsModule,
    DragDropModule,
    DialogModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
