#!/bin/bash
# This script should be run in Vercel's build process or manually with DATABASE_URL set

echo "🔄 Generating Prisma Client..."
npx prisma generate

echo "🚀 Running Prisma migrations..."
npx prisma migrate deploy

echo "✅ Prisma setup complete!"
