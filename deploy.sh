#!/bin/bash

echo "🚀 Starting TechGear Pro deployment preparation..."

# Ensure we're in the correct directory
cd "$(dirname "$0")"

# Check if pnpm is installed
if ! command -v pnpm &> /dev/null; then
    echo "❌ pnpm is not installed. Installing..."
    npm install -g pnpm
fi

# Install dependencies
echo "📦 Installing dependencies..."
pnpm install

# Run type checking
echo "🔍 Running type check..."
pnpm tsc --noEmit

# Build the project
echo "🏗️ Building for production..."
pnpm build

# Success message
echo "✅ Build complete! Ready for deployment to Vercel."
echo ""
echo "Next steps:"
echo "1. Commit all changes: git add . && git commit -m 'Ready for deployment'"
echo "2. Push to GitHub: git push origin main"
echo "3. Import project in Vercel: https://vercel.com/new"
echo "4. Deploy!"