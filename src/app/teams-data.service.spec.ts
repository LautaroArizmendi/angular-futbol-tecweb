import { TestBed } from '@angular/core/testing';
import { TeamsDataService } from './teams-data.service';
import { HttpClientModule } from '@angular/common/http';

describe('TeamsDataService', () => {
  let service: TeamsDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
    });
    service = TestBed.inject(TeamsDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
