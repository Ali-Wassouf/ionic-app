import { Component, OnInit, ViewChild } from '@angular/core';
import { IonInfiniteScroll } from '@ionic/angular';


@Component({
    selector: 'app-plan',
    templateUrl: 'plan.page.html',
    styleUrls: ['plan.page.scss']
})
export class PlanPage implements OnInit {

    items = [];
    @ViewChild(IonInfiniteScroll) infiniteScroll: IonInfiniteScroll;

    constructor() {
    }

    ngOnInit(): void {
        this.generateItems();
    }

    private generateItems() {
        for (let i = 0; i < 10; i++) {
            this.items.push({
                name: `Day ${i + 1}`,
                meals: [{mealName: 'firstMeal', description: 'something'}, {mealName: 'secondMeal', description: 'something'}]
            });

        }
    }
}
