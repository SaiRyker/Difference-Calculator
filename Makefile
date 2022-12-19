install:
	npm ci

test:
	npm test

gendiff:
	node bin/gendiff.js file1.json file2.json

lint:
	npx eslint .
	
publish:
	npm publish
