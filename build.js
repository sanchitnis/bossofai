const { execSync } = require('child_process');
const path = require('path');
const fs = require('fs');

const rootDir = __dirname;

function run(cmd, cwd) {
  console.log(`\n=== Running: ${cmd} in ${cwd} ===`);
  execSync(cmd, { cwd, stdio: 'inherit', env: process.env });
}

try {
  // 1. Build main web app
  run('npm install && npm run build', path.join(rootDir, 'web'));

  // 2. Build aihub app
  run('npm install --legacy-peer-deps && npm run build', path.join(rootDir, 'aihub'));
  const aihubTarget = path.join(rootDir, 'web', 'dist', 'aihub');
  fs.rmSync(aihubTarget, { recursive: true, force: true });
  fs.cpSync(path.join(rootDir, 'aihub', 'dist'), aihubTarget, { recursive: true });

  // 3. Build learning-hub
  run('npm install && npm run build', path.join(rootDir, 'learning-hub'));
  const learnTarget = path.join(rootDir, 'web', 'dist', 'learn');
  fs.rmSync(learnTarget, { recursive: true, force: true });
  fs.cpSync(path.join(rootDir, 'learning-hub', 'build'), learnTarget, { recursive: true });

  console.log('\n=== Unified build completed successfully! Output in web/dist ===');
} catch (error) {
  console.error('\nBuild failed:', error);
  process.exit(1);
}
