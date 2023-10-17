import { TestBed } from '@angular/core/testing';
import { PlayersDataService } from './players-data.service';
import { HttpClientModule } from '@angular/common/http';

describe('PlayersDataService', () => {
  let service: PlayersDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
    });
    service = TestBed.inject(PlayersDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
