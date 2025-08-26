# Find all node_modules directories and delete them
find . -type d -name "node_modules" -exec rm -rf {} \;