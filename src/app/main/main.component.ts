import { Component } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'],
})
export class MainComponent {
  clients = [
    { imageUrl: '../../assets/images/image 2.png' },
    { imageUrl: '../../assets/images/image 3.png' },
    { imageUrl: '../../assets/images/Frame 2.png' },
    { imageUrl: '../../assets/images/Frame 3.png' },
    { imageUrl: '../../assets/images/image 6.png' },
    { imageUrl: '../../assets/images/image 3.png' },
  ];
  featuretteData = {
    title: 'Why Hire a Partnership & Alliance Consultant?',
    description1: `Partnerships are the lifeblood of tech companies. From cutting edge AI
        platforms to enterprise ISVs, collaboration with service providers and
        other tech companies is the primary driver of growth at scale. But every
        company has unique partner needs and most encounter challenges to launch
        and integrate partners into their existing business. Direct Sales,
        Marketing, Product and Engineering teams all require collaboration with
        partners but need to develop both a strategy and path to execution.
        Hiring a single partner employee or building a new team from scratch
        rarely achieves the desired results because these roles need to be
        intertwined with all facets of the company, not just set-up in a new or
        separate org. Zoltan has seen this across the companies he's worked for
        and the thousands of partners he's worked with over the years.`,
    description2: `Leveraging his three decades of alliance management, partner program
        development, and partner team building. Zoltan is now helping companies
        to achieve their goals and avoid sub-optimal partner strategies.`,
    imageUrl:
      '../../assets/images/build-strategic-partnerships-text-quote-build-strategic-partnerships-text-quote-wooden-signpost-outdoors-black-white-212998869 1.png',
  };

  blogs = [
    {
      title: 'Blog 1',
      description: 'Description of blog 1 goes here.',
      imageUrl: '../../assets/images/image 7.png',
    },
    {
      title: 'Blog 2',
      description: 'Description of blog 2 goes here.',
      imageUrl: '../../assets/images/image 8.png',
    },
    {
      title: 'Blog 3',
      description: 'Description of blog 3 goes here.',
      imageUrl: '../../assets/images/image 9.png',
    },
  ];
  constructor() {}

  ngOnInit(): void {
    
  }
}
