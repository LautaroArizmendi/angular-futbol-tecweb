import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CreatePlayerComponent } from './create-player.component';
import { HttpClientModule } from '@angular/common/http';

describe('CreatePlayerComponent', () => {
  let component: CreatePlayerComponent;
  let fixture: ComponentFixture<CreatePlayerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientModule],
      declarations: [ CreatePlayerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreatePlayerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
