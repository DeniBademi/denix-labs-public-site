import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BlogHeroComponent } from './blog-hero.component';
import { BlogService } from '../../_services/blog.service';
import { of } from 'rxjs';

describe('BlogHeroComponent', () => {
  let component: BlogHeroComponent;
  let fixture: ComponentFixture<BlogHeroComponent>;
  let mockBlogService: jasmine.SpyObj<BlogService>;

  beforeEach(async () => {
    const spy = jasmine.createSpyObj('BlogService', ['getCategories']);
    spy.getCategories.and.returnValue(of(['All', 'AI & Machine Learning', 'Automation']));

    await TestBed.configureTestingModule({
      imports: [BlogHeroComponent],
      providers: [
        { provide: BlogService, useValue: spy }
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(BlogHeroComponent);
    component = fixture.componentInstance;
    mockBlogService = TestBed.inject(BlogService) as jasmine.SpyObj<BlogService>;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should emit search query', () => {
    spyOn(component.searchQuery, 'emit');
    component.searchText = 'test search';
    component.onSearch();
    expect(component.searchQuery.emit).toHaveBeenCalledWith('test search');
  });

  it('should emit category selection', () => {
    spyOn(component.categorySelected, 'emit');
    component.onCategorySelect('AI & Machine Learning');
    expect(component.categorySelected.emit).toHaveBeenCalledWith('AI & Machine Learning');
  });
});