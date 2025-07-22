import { ChangeDetectionStrategy, Component, Input, ViewEncapsulation } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { marked } from 'marked';
import { MarkdownComponent } from 'ngx-markdown';
import { NgStyle } from "@angular/common";

@Component({
  selector: 'app-markdown-wrapper',
  imports: [MarkdownComponent, NgStyle],
  templateUrl: './markdown-wrapper.component.html',
  styleUrl: './markdown-wrapper.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.ShadowDom,
})
export class MarkdownWrapperComponent { 
  @Input() markdown: string = '';
  constructor(private sanitizer: DomSanitizer) {}

  get processedMarkdown(): SafeHtml {
    const html = marked(this.markdown) as string;
    return this.sanitizer.bypassSecurityTrustHtml(html);
  }
}
