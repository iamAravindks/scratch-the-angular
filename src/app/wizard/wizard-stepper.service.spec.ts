import { TestBed } from '@angular/core/testing';

import { WizardStepperService } from './wizard-stepper.service';

describe('WizardStepperService', () => {
  let service: WizardStepperService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WizardStepperService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
