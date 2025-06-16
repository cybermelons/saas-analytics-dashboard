const { execSync } = require('child_process');
const path = require('path');

console.log('Testing TechGear Pro build...\n');

try {
  // Change to project directory
  process.chdir(__dirname);
  
  // Run build
  console.log('Running: pnpm build');
  execSync('pnpm build', { stdio: 'inherit' });
  
  console.log('\n✅ Build successful!');
} catch (error) {
  console.error('\n❌ Build failed!');
  process.exit(1);
}