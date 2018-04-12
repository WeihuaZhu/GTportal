import {Component, OnDestroy, OnInit} from '@angular/core';
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

    Buzzport(): void {
        window.open('https://buzzport.gatech.edu/');
    };

    TSquare(): void {
        window.open('https://t-square.gatech.edu/portal');
    };

    Github(): void {
        window.open('https://www.github.com');
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

    ngOnDestroy() {
        this.themeSubscription.unsubscribe();
    }
}
