import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BlogCardComponent } from './blog-card.component';
import { BlogPost } from '../../_models/BlogPost';

describe('BlogCardComponent', () => {
  let component: BlogCardComponent;
  let fixture: ComponentFixture<BlogCardComponent>;

  const mockPost: BlogPost = {
    id: '1',
    title: 'Test Post',
    description: 'Test description',
    category: 'Test Category',
    date: 'Dec 15, 2024',
    readTime: 5,
    slug: 'test-post'
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BlogCardComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(BlogCardComponent);
    component = fixture.componentInstance;
    component.post = mockPost;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display post title', () => {
    const compiled = fixture.nativeElement;
    expect(compiled.textContent).toContain('Test Post');
  });

  it('should display post category', () => {
    const compiled = fixture.nativeElement;
    expect(compiled.textContent).toContain('Test Category');
  });
});