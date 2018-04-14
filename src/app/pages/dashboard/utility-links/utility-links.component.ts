import {Component, OnDestroy} from '@angular/core';
import {NbThemeService} from '@nebular/theme';

@Component({
  selector: 'ngx-utility-links',
  styleUrls: ['./utility-links.component.scss'],
    templateUrl: './utility-links.component.html',
})
export class UtilityLinksComponent implements OnDestroy {

    themeName = 'default';
    settings: Array<any>;
    themeSubscription: any;

    constructor(private themeService: NbThemeService) {
        this.themeSubscription = this.themeService.getJsTheme().subscribe(theme => {
            this.themeName = theme.name;
            this.init(theme.variables);
        });
    }

    Courseoff(): void {
        window.open('https://gatech.courseoff.com/workspace');
    };

    Buzzport(): void {
        window.open('https://buzzport.gatech.edu/');
    };

    TSquare(): void {
        window.open('https://t-square.gatech.edu/portal');
    };

    Github(): void {
        window.open('https://www.github.com');
    };

    GTGithub(): void {
        window.open('https://github.gatech.edu/login');
    };

    Slack(): void {
        window.open('https://www.slack.com');
    };

    Stackoverflow(): void {
        window.open('https://stackoverflow.com');
    };

    Canvas(): void {
        window.open('https://gatech.instructure.com/');
    };

    Nextbus(): void {
        window.open('http://www.nextbus.com/googleMap/?a=georgia-tech');
    };

    Campusmap(): void {
        window.open('http://map.gatech.edu/');
    };

    CRC(): void {
        window.open('https://crc.gatech.edu/');
    };

    Library(): void {
        window.open('http://www.library.gatech.edu/');
    };

    Dining(): void {
        window.open('https://gatechdining.com/');
    };

    Stingerette(): void {
        window.open('https://gt-new.ridecell.com/request');
    };

    Buzzcard(): void {
        window.open('https://eacct-buzzcard-sp.blackboard.com/buzzcard/AnonymousHome.aspx');
    };

    LibPrinter(): void {
        window.open('https://myprintcenter.gatech.edu/');
    };

    Istart(): void {
        window.open('https://oie.gatech.edu/isss/istart-help');
    };

    OnCampusJob(): void {
        window.open('https://studentcenter.gatech.edu/campus-jobs');
    };

    GTbuses(): void {
        window.open('http://www.nextbus.com/googleMap/?a=georgia-tech&r=trolley&d=marta&s=centrstud');
    };

    CareerBuzz(): void {
        window.open('https://gatech-csm.symplicity.com/');
    };

    PiazzaCareers(): void {
        window.open('https://gatech-csm.symplicity.com/');
    };

    CocJobBoard(): void {
        window.open('https://www.cc.gatech.edu/about/jobs');
    };

    AngelList(): void {
        window.open('https://angel.co/jobs');
    };

    AtlantaTechVillage(): void {
        window.open('http://atlantatechvillage.com/about-us/job-board/');
    };

    LinkedIn(): void {
        window.open('https://www.linkedin.com/');
    };

    Indeed(): void {
        window.open('https://www.indeed.com/');
    };

    Glassdoor(): void {
        window.open('https://www.glassdoor.com/');
    };

    CareerCup(): void {
        window.open('https://www.careercup.com/');
    };

    RateMyProfessor(): void {
        window.open('http://www.ratemyprofessors.com/');
    };
    
    Piazza(): void {
        window.open('https://piazza.com/');
    };

    init(colors: any) {
        this.settings = [{
            class: 'https://www.google.com',
            container: 'primary-container',
            buttonTitle: 'Course',
        }, {
            class: 'btn-hero-warning',
            container: 'warning-container',
            title: 'Warning Button',
            buttonTitle: 'Utility',
        }, {
            class: 'btn-hero-success',
            container: 'success-container',
            title: 'Success Button',
            buttonTitle: 'Campus Info',
        }, {
            class: 'btn-hero-info',
            container: 'info-container',
            buttonTitle: 'Career',
        }, {
            class: 'btn-hero-danger',
            container: 'danger-container',
            buttonTitle: 'Others',
        },
        ];
    }

    goToUrl(): void {
        window.open('https://www.github.com');
    };

    ngOnDestroy() {
        this.themeSubscription.unsubscribe();
    }
}
