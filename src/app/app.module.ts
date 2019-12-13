import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {MaterialModule} from './material/material.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TypographyComponent } from './MaterialComponent/typography/typography.component';
import { ButtonsComponent } from './MaterialComponent/buttons/buttons.component';
import { ButtonsToggleComponent } from './MaterialComponent/buttons-toggle/buttons-toggle.component';
import { IconsComponent } from './MaterialComponent/icons/icons.component';
import { ProgressSpinnerComponent } from './MaterialComponent/progress-spinner/progress-spinner.component';
import { NavbarComponent } from './MaterialComponent/navbar/navbar.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ListComponent } from './MaterialComponent/list/list.component';
import { ExpansionPanelComponent } from './MaterialComponent/expansion-panel/expansion-panel.component';
import { DefaultPageComponent } from './default/default-page.component';
import { InputComponent } from './MaterialComponent/input/input.component';
import { SelectComponent } from './MaterialComponent/select/select.component';
import { AutocompleteComponent } from './MaterialComponent/autocomplete/autocomplete.component';
import { RadioCheckBoxComponent } from './MaterialComponent/radio-check-box/radio-check-box.component';
import { DatePickerComponent } from './MaterialComponent/date-picker/date-picker.component';
import { SnackBarComponent } from './MaterialComponent/snack-bar/snack-bar.component';
import { DialogExampleComponent } from './MaterialComponent/dialog-example/dialog-example.component';
import { DataTableComponent } from './MaterialComponent/data-table/data-table.component';
import { ResponsiveNavComponent } from './ProjectMaterial/responsive-nav/responsive-nav.component';



@NgModule({
  declarations: [
    AppComponent,
    TypographyComponent,
    ButtonsComponent,
    ButtonsToggleComponent,
    IconsComponent,
    ProgressSpinnerComponent,
    NavbarComponent,
    ListComponent,
    ExpansionPanelComponent,
    DefaultPageComponent,
    InputComponent,
    SelectComponent,
    AutocompleteComponent,
    RadioCheckBoxComponent,
    DatePickerComponent,
    SnackBarComponent,
    DialogExampleComponent,
    DataTableComponent,
    ResponsiveNavComponent,

  ],
  entryComponents:[DialogExampleComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
