install:
	npm install

start:
	npm run babel-node -- 'src/bin/brain-games.js'

calc:
	npm run babel-node -- 'src/bin/brain-calc.js'

even:
	npm run babel-node -- 'src/bin/brain-even.js'

gcd:
	npm run babel-node -- 'src/bin/brain-gcd.js'

publish:
	npm publish

lint:
	npm run eslint -- src

build:
	rm -rf dist
	npm run build

.PHONY: install start publish lint build even calc gcd
