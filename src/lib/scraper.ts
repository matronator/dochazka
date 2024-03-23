import * as cheerio from 'cheerio';

export async function scrapeTrelloCard(url: string) {
    const response = await fetch(url);
    const html = await response.text();

    // Use Cheerio to parse the HTML
    const $ = cheerio.load(html);

    const hours = $.root().find('.amz-powerup-app-body .field-input[data-testid*="rozpočet" i] .field-body .badge-text').text() ?? null;

    if (!hours) {
        throw new Error('Hours not found');
    }
}
