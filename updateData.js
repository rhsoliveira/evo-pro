const fs = require('node:fs');
const path = require('node:path');
const dotenv = require('dotenv');

dotenv.config();

function getJsFiles() {
  const distDir = path.resolve(__dirname, 'manager', 'dist');
  const files = fs
    .readdirSync(distDir, { recursive: true, withFileTypes: true })
    .filter((file) => file.isFile() && file.name.endsWith('.js'));

  return files;
}

function updateLogo(newLogoUrl) {
  const files = getJsFiles();

  files.forEach((file) => {
    const filePath = path.resolve(__dirname, file.parentPath, file.name);
    let content = fs.readFileSync(filePath, 'utf8');

    const logoUrlPattern = /(https:\/\/evolution-api\.com\/files\/evo\/evolution-logo)(?:[a-z-]+)?(?:\.svg)/gi;
    const hasMatches = logoUrlPattern.test(content);

    if (hasMatches) {
      content = content.replace(logoUrlPattern, newLogoUrl);
      fs.writeFileSync(filePath, content, 'utf8');
      console.log(`Updated logo URL in file: ${filePath}`);
    }
  });
}

function updateDashboardName(newName) {
  const files = getJsFiles();

  files.forEach((file) => {
    const filePath = path.resolve(__dirname, file.parentPath, file.name);
    let content = fs.readFileSync(filePath, 'utf8');

    const dashboardNamePattern = /Evolution Manager/g;
    const hasMatches = dashboardNamePattern.test(content);

    if (hasMatches) {
      content = content.replace(dashboardNamePattern, newName);
      fs.writeFileSync(filePath, content, 'utf8');
      console.log(`Updated dashboard name in file: ${filePath}`);
    }
  });
}

if (process.env.X_CUSTOM_SHOULD_UPDATE_LOGO === 'true') {
  const logoUrl = process.env.X_CUSTOM_UPDATE_LOGO_PATH;
  console.log('Start updating logo to :', logoUrl);
  updateLogo(logoUrl);
}

if(process.env.X_CUSTOM_SHOULD_UPDATE_DASHBOARD_NAME === 'true') {
  const dashboardName = process.env.X_CUSTOM_DASHBOARD_NAME;
  console.log('Start updating dashboard name to :', dashboardName);
  updateDashboardName(dashboardName);
}