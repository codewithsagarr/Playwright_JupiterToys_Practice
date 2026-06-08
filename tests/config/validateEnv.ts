import dotenv from 'dotenv';

dotenv.config();

type BrowserName = 'chromium' | 'firefox' | 'webkit';
type DeviceType = 'desktop' | 'mobile';

const validBrowsers: BrowserName[] = ['chromium', 'firefox', 'webkit'];

const browserName = (process.env.BROWSER || 'chromium') as BrowserName;
const deviceType = (process.env.DEVICE || 'desktop') as DeviceType;
const workers = process.env.WORKERS ? parseInt(process.env.WORKERS, 10) : undefined;
const fullyParallel = process.env.FULLY_PARALLEL === 'true';

if (!validBrowsers.includes(browserName)) {
  throw new Error(`Invalid BROWSER value: ${process.env.BROWSER}. Valid values are: ${validBrowsers.join(', ')}`);
}

export { browserName, deviceType, workers, fullyParallel };
