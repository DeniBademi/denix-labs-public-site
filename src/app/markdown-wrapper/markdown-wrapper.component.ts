import { ChangeDetectionStrategy, Component, Input, ViewEncapsulation } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { marked } from 'marked';
// import { MarkdownComponent } from 'ngx-markdown';
import { NgStyle } from "@angular/common";
// import { KatexOptions } from 'ngx-markdown';
import { RemarkModule, KatexComponent, PrismComponent, MermaidComponent, HeadingComponent } from 'ngx-remark';
import { unified } from 'unified';
import remarkGfm from 'remark-gfm';
import remarkParse from 'remark-parse';
import remarkMath from 'remark-math';
@Component({
  selector: 'app-markdown-wrapper',
  imports: [ NgStyle,     RemarkModule,
    PrismComponent,
    KatexComponent,
    MermaidComponent,
    HeadingComponent,],
  templateUrl: './markdown-wrapper.component.html',
  styleUrl: './markdown-wrapper.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.ShadowDom,
})
export class MarkdownWrapperComponent { 
  @Input() markdown: string = '';
  processor = unified().use(remarkParse).use(remarkGfm).use(remarkMath);
  markdowntest = `# My Awesome Project

A short description of _what_ this project does and **why** it exists.

---

## Table of Contents
1. [Features](#features)
2. [Installation](#installation)
3. [Usage](#usage)
4. [Contributing](#contributing)
5. [License](#license)

---

## Features <a id="features"></a>

- ✨ **Fast** – optimized algorithms  
- 📦 **Modular** – tiny, composable pieces  
- 🔒 **Secure** – audited dependencies  
  - Uses **OWASP‑recommended** practices  
  - Automatic secret scanning  
- 🧪 **Tested**  
  - Unit tests  
  - Integration tests  

---

Here is a cool formula:
$$
\\frac{1}{2\\pi i} \\oint_C \\frac{f(z)}{z-z_0} dz
$$

## Installation <a id="installation"></a>

\`\`\`bash
# Clone the repo
git clone https://github.com/username/my-awesome-project.git

# Move into the directory
cd my-awesome-project

# Install dependencies
npm install
`;


  constructor(private sanitizer: DomSanitizer) {}
  
  get processedMarkdown(): SafeHtml {
    const html = marked(this.markdown) as string;
    return this.sanitizer.bypassSecurityTrustHtml(html);
  }
}
