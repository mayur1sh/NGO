import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NouisliderModule } from 'ng2-nouislider';
import { JwBootstrapSwitchNg2Module } from 'jw-bootstrap-switch-ng2';
import { RouterModule } from '@angular/router';

import { BasicelementsComponent } from './basicelements/basicelements.component';
import { NavigationComponent } from './navigation/navigation.component';
import { TypographyComponent } from './typography/typography.component';
import { NucleoiconsComponent } from './nucleoicons/nucleoicons.component';
import { ComponentsComponent } from './components.component';
import { NotificationComponent } from './notification/notification.component';
import { NgbdModalBasic } from './modal/modal.component';
import { ProgramComponent } from './program/program.component';
import { TeamComponent } from './team/team.component';
import { AboutUsComponent } from './aboutus/aboutus.component';
import { DonationComponent } from './donation/donation.component';
import { ContactUsComponent } from './contactus/contactus.component';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        NgbModule,
        NouisliderModule,
        RouterModule,
        JwBootstrapSwitchNg2Module,
        ReactiveFormsModule
    ],
    declarations: [
        ComponentsComponent,
        BasicelementsComponent,
        NavigationComponent,
        TypographyComponent,
        NucleoiconsComponent,
        NotificationComponent,
        NgbdModalBasic,
        ProgramComponent,
        TeamComponent,
        AboutUsComponent,
        DonationComponent,
        ContactUsComponent
    ],

    exports: [ComponentsComponent
        , ProgramComponent
        , TeamComponent
        , AboutUsComponent
        , DonationComponent
        ,ContactUsComponent]
})
export class ComponentsModule { }
