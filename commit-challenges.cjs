// Script to commit each challenge file separately
const { execSync } = require('child_process');
const path = require('path');

console.log('Committing challenges 6-55...');

for (let i = 6; i <= 55; i++) {
  const fileName = `src/challenge/challenge${i}.ts`;
  try {
    execSync(`git add ${fileName}`, { stdio: 'inherit' });
    execSync(`git commit -m "Add challenge${i}.ts: Simple TypeScript example"`, { stdio: 'inherit' });
    console.log(`Committed challenge${i}.ts`);
  } catch (error) {
    console.error(`Error committing challenge${i}.ts:`, error.message);
  }
}

console.log('All challenges committed!');
console.log('Pushing to remote...');

try {
  execSync('git push origin main', { stdio: 'inherit' });
  console.log('All commits pushed successfully!');
  
  // Verify commit count
  const log = execSync('git log --oneline', { encoding: 'utf8' });
  const commitCount = log.trim().split('\n').length;
  console.log(`Total commits: ${commitCount}`);
  
  if (commitCount >= 50) {
    console.log('✅ Task completed! 50+ public commits created.');
  } else {
    console.log('⚠️  Commit count less than 50. Please check.');
  }
} catch (error) {
  console.error('Error pushing to remote:', error.message);
}