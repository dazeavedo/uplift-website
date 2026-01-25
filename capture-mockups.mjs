#!/usr/bin/env node

/**
 * Mockup Capture Script
 * Captures all Uplift mockups as PNG images for use in presentations
 */

import puppeteer from 'puppeteer';
import { mkdir } from 'fs/promises';
import { join } from 'path';
import { homedir } from 'os';

const OUTPUT_DIR = join(homedir(), 'Desktop', 'Uplift-Mockups');
const BASE_URL = 'http://localhost:5175';

const mockups = [
  { id: 'worker-home', name: '01-Worker-Home', width: 500, height: 920 },
  { id: 'worker-schedule', name: '02-Worker-Schedule', width: 500, height: 920 },
  { id: 'worker-career', name: '03-Worker-Career', width: 500, height: 920 },
  { id: 'worker-rewards', name: '04-Worker-Rewards', width: 500, height: 920 },
  { id: 'manager-dashboard', name: '05-Manager-Dashboard', width: 500, height: 920 },
  { id: 'manager-approvals', name: '06-Manager-Approvals', width: 500, height: 920 },
  { id: 'portal-dashboard', name: '07-Portal-Dashboard', width: 1400, height: 920 },
];

async function captureMockups() {
  console.log('Starting mockup capture...');
  console.log(`Output directory: ${OUTPUT_DIR}\n`);

  // Ensure output directory exists
  await mkdir(OUTPUT_DIR, { recursive: true });

  // Launch browser
  const browser = await puppeteer.launch({
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });

  for (const mockup of mockups) {
    const page = await browser.newPage();

    // Set viewport
    await page.setViewport({
      width: mockup.width,
      height: mockup.height,
      deviceScaleFactor: 2 // Retina quality
    });

    const url = `${BASE_URL}/capture/${mockup.id}`;
    console.log(`Capturing: ${mockup.name}...`);

    try {
      await page.goto(url, { waitUntil: 'networkidle0', timeout: 30000 });

      // Wait for content to render
      await page.waitForSelector('#capture-target', { timeout: 10000 });

      // Get the element and capture it
      const element = await page.$('#capture-target');

      if (element) {
        const outputPath = join(OUTPUT_DIR, `${mockup.name}.png`);
        await element.screenshot({
          path: outputPath,
          type: 'png'
        });
        console.log(`  Saved: ${mockup.name}.png`);
      } else {
        console.log(`  Error: Could not find capture target for ${mockup.name}`);
      }
    } catch (error) {
      console.log(`  Error capturing ${mockup.name}: ${error.message}`);
    }

    await page.close();
  }

  await browser.close();

  console.log('\nCapture complete!');
  console.log(`Files saved to: ${OUTPUT_DIR}`);
}

captureMockups().catch(console.error);
