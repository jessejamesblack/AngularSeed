import { TestBed, inject, async, getTestBed } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientTestingModule, HttpTestingController } from "@angular/common/http/testing";

import { LambdaService } from './lambda.service';

describe('LambdaService', () => {

  let httpMock: HttpTestingController;
  let injector: TestBed;
  let service: LambdaService;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule, HttpClientTestingModule],
      providers: [LambdaService]
    });
    injector = getTestBed();
    service = injector.get(LambdaService);
    httpMock = injector.get(HttpTestingController);
  }));
  afterEach(() => {
    httpMock.verify();
  });
  it('should be created', () => {
    const service: LambdaService = TestBed.get(LambdaService);
    expect(service).toBeTruthy();
  });
  it('Fetch account info data should return something', () => {
    service.fetchAccountInfoData().subscribe(users => {
      expect(users).not.toBe(null);
    })
    const req = httpMock.expectOne(`http://localhost:4200/assets/accountData.json`);
    expect(req.request.method).toBe("GET");
    req.flush(service);
  });
  it('Fetch account list data should return something', () => {
    service.fetchAcountListData().subscribe(users => {
      expect(users).not.toBe(null);
    })
    const req = httpMock.expectOne(`http://localhost:4200/assets/accountListData.json`);
    expect(req.request.method).toBe("GET");
    req.flush(service);
  });

});
