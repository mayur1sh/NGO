import { NgModule } from '@angular/core';
import { CommonModule, } from '@angular/common';
import { BrowserModule  } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';

import { ComponentsComponent } from './components/components.component';
import { LandingComponent } from './examples/landing/landing.component';
import { LoginComponent } from './examples/login/login.component';
import { ProfileComponent } from './examples/profile/profile.component';
import { NucleoiconsComponent } from './components/nucleoicons/nucleoicons.component';
import { ProgramComponent } from './components/program/program.component';
import { TeamComponent } from './components/team/team.component';
import { AboutUsComponent } from './components/aboutus/aboutus.component';
import { DonationComponent } from './components/donation/donation.component';
import { ContactUsComponent } from './components/contactus/contactus.component';

const routes: Routes =[
    { path: '', redirectTo: 'index', pathMatch: 'full' },
    { path: 'index',                component: LandingComponent },
    { path: 'nucleoicons',          component: NucleoiconsComponent },
    { path: 'examples/landing',     component: LandingComponent },
    { path: 'examples/login',       component: LoginComponent },
    { path: 'examples/profile',     component: ProfileComponent },
    { path: 'modes',     component: ComponentsComponent },
    { path: 'programs',     component: ProgramComponent },
    { path: 'team',     component: TeamComponent },
    { path: 'aboutus',     component: AboutUsComponent },
    { path: 'donation',     component: DonationComponent },
    { path: 'contactus',     component: ContactUsComponent },
];

@NgModule({
    imports: [
        CommonModule,
        BrowserModule,
        RouterModule.forRoot(routes)
    ],
    exports: [
    ],
})
export class AppRoutingModule { }
