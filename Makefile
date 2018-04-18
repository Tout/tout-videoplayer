.PHONY: all build build.production lint test test.only clean hotel.install server
NODE_BIN=$(shell npm bin)

all: build

build: node_modules/
	$(NODE_BIN)/webpack --mode=development

build.production: node_modules/
	$(NODE_BIN)/webpack --mode=development

lint:
	$(NODE_BIN)/eslint src/

test: node_modules/ lint
	$(NODE_BIN)/mocha --opts ./mocha.opts test/

test.only:
	$(NODE_BIN)/mocha --opts ./mocha.opts test/

clean:
	-rm -r ./node_modules
	-rm package-lock.json
	-npm cache verify
	-rm ./dist/*

node_modules/: package.json
	NPM_CONFIG_TMP=../tmp npm install
	touch node_modules

server: build
	$(NODE_BIN)/http-server public/ --p 8085

hotel.install: node_modules/
	hotel add 'make server' --port 8085 --out app.log
