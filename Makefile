install:
	npm ci

test:
	npm test

gendiff:
	node bin/gendiff.js

lint:
	npx eslint .
	
publish:
	npm publish
