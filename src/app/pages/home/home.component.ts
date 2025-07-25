import { Component } from '@angular/core';
import { HeroComponent } from '../../hero/hero.component';
import { FaqComponent } from '../../faq/faq.component';
import { WhyUseAiComponent } from '../../why-use-ai/why-use-ai.component';
import { Meta, Title } from '@angular/platform-browser';
import { MetatagService } from '../../_services/metatag.service';
import { VapiSectionComponent } from '../../vapi-section/vapi-section.component';

@Component({
  selector: 'app-home',
  imports: [HeroComponent, FaqComponent, WhyUseAiComponent, VapiSectionComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  markdown = `
This is a paragraph with a [link](http://google.com "Google").

# h1 Heading
## h2 Heading
### h3 Heading
#### h4 Heading
##### h5 Heading
###### h6 Heading


## Horizontal Rules

___

---

***

## Emphasis

**This is bold text**

__This is bold text__

*This is italic text*

_This is italic text_

~~Strikethrough~~


## Blockquotes


> Blockquotes can also be nested...
>> ...by using additional greater-than signs right next to each other...
> > > ...or with spaces between arrows.


## Lists

Unordered:

+ Create a list by starting a line with \`+\`, \`-\`, or \`*\`
+ Sub-lists are made by indenting 2 spaces:
- Marker character change forces new list start:
    * Ac tristique libero volutpat at
    + Facilisis in pretium nisl aliquet
    - Nulla volutpat aliquam velit
+ Very easy!

Ordered:

1. Lorem ipsum dolor sit amet
2. Consectetur adipiscing elit
3. Integer molestie lorem at massa


1. You can use sequential numbers...
1. ...or keep all the numbers as \`1.\`

Start numbering with offset:

57. foo
1. bar


## Code

Inline \`code\`.

Indented code:

    // Some comments
    line 1 of code
    line 2 of code
    line 3 of code


Block code "fences":

\`\`\`javascript
// Sample comments
function foo (bar) {
  return bar++;
};

console.log(foo(5));
\`\`\`

## Tables

| Option | Description |
| :----- | :---------: |
| row 1  | Lorem ipsum dolor sit amet, consectetur adipiscing elit. |
| row 2  | sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. |
| row 3  | Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. |

## Math

Aerodynamic forces can be derived from the Lift Coefficient ($$C_L$$) and Drag Coefficient ($$C_D$$) with the following
equations:

$$
L = \\frac{1}{2} \\rho v^2 S C_L
$$

$$
D = \\frac{1}{2} \\rho v^2 S C_D
$$

## Mermaid

\`\`\`mermaid
graph TD
    A[Enter Chart Definition] --> B(Preview)
    B --> C{decide}
    C --> D[Keep]
    C --> E[Edit Definition]
    E --> B
    D --> F[Save Image and Code]
    F --> B
\`\`\`

## Links

This is a link: [Example](https://example.com).

## Images

![Sample image](https://picsum.photos/200)
`;
  constructor(private metatag: MetatagService) {
    metatag.updateMetaTags('home');
   }


}
