import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WizardComponent } from './wizard.component';
import { WizardStepperService } from './wizard-stepper.service';
import { Tab } from './Tabs/tab.component';
import { By } from '@angular/platform-browser';

describe('WizardComponent', () => {
  let component: WizardComponent;
  let fixture: ComponentFixture<WizardComponent>;
  let service: WizardStepperService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [WizardComponent, Tab],
      providers: [WizardStepperService],
    }).compileComponents();

    service = TestBed.inject(WizardStepperService);
    fixture = TestBed.createComponent(WizardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the wizard component', () => {
    expect(component).toBeTruthy();
  });

  it('should initialize the menu and currentTabId on ngOnInit', () => {
    component.ngOnInit();
    expect(component.menu).toEqual(service.getTabs());
    expect(component.currentTabId).toEqual(1);
  });

  it('should move to the next tab (2) when next is called', () => {
    component.next(2);
    expect(component.currentTabId).toEqual(2);
  });

  it('should move to the previous tab (1) from tab 2 when previous is called', () => {
    component.next(2);
    component.previous();
    expect(component.currentTabId).toEqual(1);
  });

  it("shouldn't be able to go to the 4th step if it's not visited", () => {
    component.setCurrentTab(4);
    expect(component.currentTabId).not.toEqual(4);
  });

  it('should move to the next tab (3) when next is called after tab 2', () => {
    component.next(2);
    component.next(3);
    expect(component.currentTabId).toEqual(3);
  });

  it('should be able to go to tab 1 from tab 3', () => {
    component.next(2);
    component.next(3);
    component.setCurrentTab(1);
    expect(component.currentTabId).toEqual(1);
  });

  it('should be able to go back to tab 3 from tab 1 again', () => {
    component.next(2);
    component.next(3);
    component.setCurrentTab(1);
    component.setCurrentTab(3);
    expect(component.currentTabId).toEqual(3);
  });
});


describe("WizardComponent View",()=>{
  let component :WizardComponent;
  let fixture:ComponentFixture<WizardComponent>;

  beforeEach(async()=>{
    await TestBed.configureTestingModule({
      declarations:[WizardComponent,Tab],
    }).compileComponents();

    fixture = TestBed.createComponent(WizardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges()
  })

    it("should have dispaly the correct tab (1) initially",()=>{
      const listItems = fixture.debugElement.queryAll(By.css('.wizard-index li'));
      const firstListItem = listItems.find(li => li.nativeElement.getAttribute('data-tab')==="1")
      expect(firstListItem).toBeTruthy();
      expect(firstListItem?.classes['visited']).toBeTrue();
    })

    it('should not switch to the second tab when clicked on the li tag instead of next button', () => {
      const secondTabLink = fixture.debugElement.query(By.css('.wizard-index li:nth-child(2)'));
      secondTabLink.triggerEventHandler('click', null);
      fixture.detectChanges();
      expect(component.currentTabId).not.toEqual(2);
   });

   it('should  switch to the second tab when clicked on the tab one button ', () => {
    const secondTabBtn = fixture.debugElement.query(By.css('#tab-one-btn'));
    console.log("btn",secondTabBtn);
    secondTabBtn.triggerEventHandler('click', null);
    fixture.detectChanges();
    expect(component.currentTabId).toEqual(2);
 });
  

})

