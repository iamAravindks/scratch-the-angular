import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { WizardModule } from './wizard/wizard.module';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
        declarations:[AppComponent],
      imports: [WizardModule],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });


});
