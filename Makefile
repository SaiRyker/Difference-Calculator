install:
	npm ci

test:
	npm test

gendiff:
	node bin/gendiff.js file1.yaml file2.yaml

lint:
	npx eslint .
	
publish:
	npm publish
