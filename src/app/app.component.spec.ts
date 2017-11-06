import { TestBed, async } from '@angular/core/testing';
import { SecurityModule, SecurityMockService, ISecurityService } from './modules/security';
import { AppComponent } from './app.component';


describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        SecurityModule.forRoot(new SecurityMockService())
      ],
      providers: [],
      declarations: [
        AppComponent
      ],
    }).compileComponents();
  }));

  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));

});
