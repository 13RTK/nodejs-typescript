# Find all node_modules directories and delete them
find . -type d -name "node_modules" -exec rm -rf {} \;

# Find all pnpm-lock.yaml files and delete them
find . -type f -name "pnpm-lock.yaml" -exec rm -rf {} \;