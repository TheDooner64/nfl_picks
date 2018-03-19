SHELL := /bin/bash
export DEV_MODE=1
export DEBUG=True
export FLASK_DEBUG=True
export FLASK_APP=nfl_picks
export TEST_DB=postgres://postgres@localhost/test_nfl_picks

clean:
	@echo "Removing garbage"
	@find . -name '*.pyc' -delete
	@rm -rf .coverage *.egg-info *.log build dist MANIFEST

setup_python: clean
	@if [ -z $$VIRTUAL_ENV ]; then \
		echo "Make sure you run this from a virtualenv!"; \
		exit 1; \
	fi
	@if [ -z $$SKIP_DEPS ]; then \
		echo "Installing dependencies"; \
		pip install --quiet -r development.txt; \
	fi

setup_js:
	@echo "Installing JS dependencies"
	@npm install

setup: setup_python setup_js

setup_dummy_manifest_file:
	@echo "Creating nfl_picks/manifest.json"
	@if [ ! -e "nfl_picks/manifest.json" ]; then \
		echo '{"assets":{},"publicPath":""}' > nfl_picks/manifest.json; \
	fi

test_python: setup_python setup_dummy_manifest_file
	py.test --cov=nfl_picks nfl_picks/tests/

run_python: setup_dummy_manifest_file
	python -m flask run

run_js:
	npm run watch

_run_all: run_python run_js

# Runs in 4 parallel jobs
_run_async:
	make _run_all -j4

run: _run_async

migrate: reset_database
	flask db migrate -d nfl_picks/migrations
