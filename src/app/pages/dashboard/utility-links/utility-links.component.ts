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
