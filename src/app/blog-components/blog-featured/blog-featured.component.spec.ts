import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BlogFeaturedComponent } from './blog-featured.component';
import { BlogCardComponent } from '../blog-card/blog-card.component';
import { BlogPost } from '../../_models/BlogPost';

describe('BlogFeaturedComponent', () => {
  let component: BlogFeaturedComponent;
  let fixture: ComponentFixture<BlogFeaturedComponent>;

  const mockPost: BlogPost = {
    id: '1',
    title: 'Featured Test Post',
    description: 'Featured test description',
    category: 'Test Category',
    date: 'Dec 15, 2024',
    readTime: 8,
    slug: 'featured-test-post',
    featured: true
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BlogFeaturedComponent, BlogCardComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(BlogFeaturedComponent);
    component = fixture.componentInstance;
    component.post = mockPost;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display featured post', () => {
    const compiled = fixture.nativeElement;
    expect(compiled.textContent).toContain('Featured Test Post');
  });
});