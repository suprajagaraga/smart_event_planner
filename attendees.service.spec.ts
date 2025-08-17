import { TestBed } from '@angular/core/testing';
import { AttendeesService } from './attendees.service';
import { of } from 'rxjs';

describe('AttendeesService', () => {
  let service: AttendeesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AttendeesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return attendees list (observable)', (done) => {
    // Arrange: mock data
    const mockAttendees = [
      { name: 'Aruna', email: 'aruna@test.com' },
      { name: 'John', email: 'john@test.com' }
    ];

    // Act: call the service
    spyOn(service, 'getAttendees').and.returnValue(of(mockAttendees));

    service.getAttendees().subscribe(data => {
      // Assert: check returned data
      expect(data.length).toBe(2);
      expect(data[0].name).toBe('Aruna');
      expect(data[1].email).toBe('john@test.com');
      done();
    });
  });
});
