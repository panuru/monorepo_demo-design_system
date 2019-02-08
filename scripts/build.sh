
#!/bin/sh

rm -rf build && NODE_ENV=production babel src --out-dir build --ignore src/stories,__snapshots__,__tests__,spec.js,test.js,*.test.js
