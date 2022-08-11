import { HttpClient, HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { SocketIoModule, SocketIoConfig } from 'ngx-socket-io';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ConsultasService } from './services/consultas.service';
import { MatSidenavModule } from '@angular/material/sidenav';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgChartsModule } from 'ng2-charts';
import { LinearComponent } from './graphs/linear/linear.component';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import { LinearBDComponent } from './graphs/linear-bd/linear-bd.component';
const config: SocketIoConfig = { url: 'http://localhost:5000', options: {} };
@NgModule({
  declarations: [
    AppComponent,
    LinearComponent,
    LinearBDComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SocketIoModule.forRoot(config),
    HttpClientModule,
    MatSidenavModule,
    BrowserAnimationsModule,
    NgChartsModule,
    MatButtonModule,
    MatIconModule
    
  ],
  providers: [ConsultasService],
  bootstrap: [AppComponent]
})
export class AppModule { }
