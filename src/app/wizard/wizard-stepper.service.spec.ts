import { TestBed } from '@angular/core/testing';

import { WizardStepperService } from './wizard-stepper.service';

describe('WizardStepperService', () => {
  let service: WizardStepperService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers:[WizardStepperService]
    });
    service = TestBed.inject(WizardStepperService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it("should return the menu",()=>{
    const result = service.getTabs();
    expect(result).toEqual([
      { id: 1, visited: true, disabled: false },
      { id: 2, visited: false, disabled: true },
      { id: 3, visited: false, disabled: true },
      { id: 4, visited: false, disabled: true },
   ])
  })

  it('should change the state of a tab', () => {
    service.setTabState(2, { visited: true, disabled: false });
    expect(service.getTabs()).toContain({ id: 2, visited: true, disabled: false });
   });
   
});
