import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TypographyComponent } from './MaterialComponent/typography/typography.component';
import { ButtonsComponent } from './MaterialComponent/buttons/buttons.component';
import { ButtonsToggleComponent } from './MaterialComponent/buttons-toggle/buttons-toggle.component';
import { IconsComponent } from './MaterialComponent/icons/icons.component';
import { ProgressSpinnerComponent } from './MaterialComponent/progress-spinner/progress-spinner.component';
import { NavbarComponent } from './MaterialComponent/navbar/navbar.component';
import { ListComponent } from './MaterialComponent/list/list.component';
import { ExpansionPanelComponent } from './MaterialComponent/expansion-panel/expansion-panel.component';
import { DefaultPageComponent } from './default/default-page.component';
import { InputComponent } from './MaterialComponent/input/input.component';
import { SelectComponent } from './MaterialComponent/select/select.component';
import { AutocompleteComponent } from './MaterialComponent/autocomplete/autocomplete.component';
import { RadioCheckBoxComponent } from './MaterialComponent/radio-check-box/radio-check-box.component';
import { DatePickerComponent } from './MaterialComponent/date-picker/date-picker.component';
import { SnackBarComponent } from './MaterialComponent/snack-bar/snack-bar.component';
import { DataTableComponent } from './MaterialComponent/data-table/data-table.component';
import { ResponsiveNavComponent } from './ProjectMaterial/responsive-nav/responsive-nav.component';


const routes: Routes = [
  { path: 'typography', component: TypographyComponent },
  { path: 'buttons', component: ButtonsComponent },
  { path: 'toggleBtn', component: ButtonsToggleComponent },
  { path: 'icons&Badget', component: IconsComponent },
  { path: 'progressSpinner', component: ProgressSpinnerComponent },
  { path: 'navbar', component: NavbarComponent },
  { path: 'list', component: ListComponent },
  { path: 'expansionPanel', component: ExpansionPanelComponent },
  { path: 'input', component: InputComponent },
  { path: 'select', component: SelectComponent },
  { path: 'autoComplete', component: AutocompleteComponent },
  { path: 'Radio&CheckBox', component: RadioCheckBoxComponent },
  { path: 'DatePicker&tooltip', component: DatePickerComponent },
  { path: 'SnackBar&Dialogs', component: SnackBarComponent },
  { path: 'DataTable', component: DataTableComponent },
  { path: 'ResponsiveNav', component: ResponsiveNavComponent },
  

  { path: 'welcome', component: DefaultPageComponent },
  { path: '', redirectTo: '/welcome', pathMatch: 'full' }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
