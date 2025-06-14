import { Injectable } from "@nestjs/common";

@Injectable()
export class NewsService {
  private categories = [
    { slug: 'local', name: 'Local' },
    { slug: 'national', name: 'National' },
    { slug: 'international', name: 'International' },
    { slug: 'business', name: 'Business' },
    { slug: 'sports', name: 'Sports' },
    { slug: 'weather', name: 'Weather' },
    { slug: 'entertainment', name: 'Entertainment' },
  ];

  findAll() {
    return this.categories;
  }

  findBySlug(slug: string) {
    return this.categories.find((cat) => cat.slug === slug);
  }
}
