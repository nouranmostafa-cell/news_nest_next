import { Controller, Get, Param, Res } from '@nestjs/common';
import { NewsService } from './news.service';
import { Response } from 'express';

@Controller('categories')
export class NewsController {
  constructor(private readonly newsService: NewsService) {}

  @Get()
  getAll() {
    return this.newsService.findAll();
  }

  @Get(':slug')
  getBySlug(@Param('slug') slug: string, @Res() res: Response) {
    const category = this.newsService.findBySlug(slug);
    if (!category) {
      return res.status(404).json({ message: 'Category not found' });
    }

    if (slug === 'climate') {
      return res.redirect('/categories/weather');
    }

    return res.json(category);
  }
}
