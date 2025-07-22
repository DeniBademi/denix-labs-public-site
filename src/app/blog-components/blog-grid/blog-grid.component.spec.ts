import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BlogGridComponent } from './blog-grid.component';
import { BlogCardComponent } from '../blog-card/blog-card.component';
import { BlogPost } from '../../_models/BlogPost';

describe('BlogGridComponent', () => {
  let component: BlogGridComponent;
  let fixture: ComponentFixture<BlogGridComponent>;

  const mockPosts: BlogPost[] = [
    {
      id: '1',
      title: 'Test Post 1',
      description: 'Test description 1',
      category: 'Test Category',
      date: 'Dec 15, 2024',
      readTime: 5,
      slug: 'test-post-1'
    },
    {
      id: '2',
      title: 'Test Post 2',
      description: 'Test description 2',
      category: 'Test Category',
      date: 'Dec 16, 2024',
      readTime: 7,
      slug: 'test-post-2'
    }
  ];

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BlogGridComponent, BlogCardComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(BlogGridComponent);
    component = fixture.componentInstance;
    component.posts = mockPosts;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display all posts', () => {
    const compiled = fixture.nativeElement;
    expect(compiled.textContent).toContain('Test Post 1');
    expect(compiled.textContent).toContain('Test Post 2');
  });
});